const fs = require("fs");
const os = require("os");
const path = require("path");
const puppeteer = require("puppeteer");

const projectRoot = path.resolve(__dirname, "..");
const extensionPath = projectRoot;
const downloadDir = path.join(projectRoot, "test-output", "downloads");

function logStep(name, detail = "") {
  console.log(`[PASS] ${name}${detail ? ` - ${detail}` : ""}`);
}

function assertStep(condition, name, detail = "") {
  if (!condition) {
    throw new Error(`${name}${detail ? `: ${detail}` : ""}`);
  }
  logStep(name, detail);
}

async function discoverExtensionId(browser, userDataDir) {
  const target = await browser.waitForTarget(
    (candidate) => candidate.type() === "background_page" || candidate.type() === "service_worker",
    { timeout: 10000 }
  ).catch(() => null);
  if (target) {
    const match = target.url().match(/^chrome-extension:\/\/([^/]+)/);
    if (match) return match[1];
  }

  const extensionsPage = await browser.newPage();
  try {
    await extensionsPage.goto("chrome://extensions/", { waitUntil: "domcontentloaded" });
    await extensionsPage.waitForSelector("extensions-manager", { timeout: 5000 });
    await new Promise((resolve) => setTimeout(resolve, 500));
    const extensionId = await extensionsPage.evaluate((expectedName) => {
      const manager = document.querySelector("extensions-manager");
      const itemList = manager && manager.shadowRoot && manager.shadowRoot.querySelector("extensions-item-list");
      const items = itemList && itemList.shadowRoot
        ? [...itemList.shadowRoot.querySelectorAll("extensions-item")]
        : [];
      const match = items.find((item) => {
        const data = item.data || {};
        return data.name === expectedName;
      });
      return match ? match.id : "";
    }, "NightstandPlus B2B Product Finder");
    if (extensionId) return extensionId;
  } finally {
    await extensionsPage.close().catch(() => {});
  }

  const preferencesPath = path.join(userDataDir, "Default", "Preferences");
  for (let attempt = 0; attempt < 30; attempt += 1) {
    if (fs.existsSync(preferencesPath)) {
      const preferences = JSON.parse(fs.readFileSync(preferencesPath, "utf8"));
      const settings = preferences.extensions && preferences.extensions.settings;
      if (settings) {
        const match = Object.entries(settings).find(([, value]) => {
          return value && value.path && path.resolve(value.path) === extensionPath;
        });
        if (match) return match[0];
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Could not discover extension id from Chrome profile Preferences.");
}

async function setDownloadBehavior(page) {
  fs.rmSync(downloadDir, { recursive: true, force: true });
  fs.mkdirSync(downloadDir, { recursive: true });

  const client = await page.target().createCDPSession();
  await client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: downloadDir
  });
}

function waitForDownloadedFile(filename) {
  const targetPath = path.join(downloadDir, filename);
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();
    const timer = setInterval(() => {
      const exists = fs.existsSync(targetPath);
      const partialExists = fs.existsSync(downloadDir)
        && fs.readdirSync(downloadDir).some((file) => file.endsWith(".crdownload"));
      if (exists && !partialExists) {
        clearInterval(timer);
        resolve(targetPath);
      }
      if (Date.now() - startedAt > 10000) {
        clearInterval(timer);
        reject(new Error(`Download not found: ${filename}`));
      }
    }, 200);
  });
}

async function run() {
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), "nightstandplus-extension-test-"));
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: false,
      pipe: true,
      enableExtensions: [extensionPath],
      userDataDir,
      defaultViewport: { width: 420, height: 900 },
      args: [
        "--no-first-run",
        "--no-default-browser-check",
        `--disable-extensions-except=${extensionPath}`,
        `--load-extension=${extensionPath}`
      ]
    });

    const extensionId = process.env.EXTENSION_ID || await discoverExtensionId(browser, userDataDir);
    const popupUrl = `chrome-extension://${extensionId}/popup.html`;
    const page = await browser.newPage();
    await setDownloadBehavior(page);
    await page.goto(popupUrl, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("#searchInput", { timeout: 10000 });
    logStep("Open extension popup", popupUrl);

    await page.type("#searchInput", "wireless charging");
    await page.click("#searchButton");
    await page.waitForFunction(() => document.querySelector("#resultCount").textContent === "4");
    const firstResultTitle = await page.$eval(".product-card .product-title", (element) => element.textContent.trim());
    assertStep(firstResultTitle.includes("Wireless Charging"), "Search wireless charging", firstResultTitle);
    await page.screenshot({
      path: path.join(projectRoot, "test-output", "extension-loaded-search.png"),
      fullPage: false
    });
    logStep("Save loaded extension search screenshot", "test-output/extension-loaded-search.png");

    await page.click(".product-card .card-actions button:nth-child(2)");
    await page.waitForFunction(() => document.querySelector("#favoriteCount").textContent === "1");
    logStep("Save first product", "favorite count is 1");

    await page.click("#searchInput", { clickCount: 3 });
    await page.keyboard.press("Backspace");
    await page.click("#searchButton");
    await page.waitForFunction(() => document.querySelectorAll(".product-card").length >= 2);
    const checkboxes = await page.$$(".product-card input[type='checkbox']");
    await checkboxes[0].click();
    await checkboxes[1].click();
    await page.click("#compareButton");
    await page.waitForSelector("#comparePanel:not([hidden]) .compare-table");
    const compareRows = await page.$$eval(".compare-table tr", (rows) => rows.length);
    assertStep(compareRows >= 6, "Generate product comparison", `${compareRows} rows`);

    await page.click("#exportCsvButton");
    const csvPath = await waitForDownloadedFile("nightstandplus-products.csv");
    assertStep(fs.statSync(csvPath).size > 0, "Export CSV", csvPath);

    await page.click("#exportJsonButton");
    const jsonPath = await waitForDownloadedFile("nightstandplus-products.json");
    const jsonPayload = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    assertStep(Array.isArray(jsonPayload) && jsonPayload.length >= 2, "Export JSON", `${jsonPayload.length} products`);

    await page.click(".product-card .card-actions button:nth-child(3)");
    await page.waitForSelector("#fallbackModal:not([hidden])");
    const detailText = await page.$eval("#fallbackBody", (element) => element.textContent);
    assertStep(detailText.includes("Inquiry draft"), "Open product detail and RFQ draft");
    await page.click("#fallbackExportButton");
    const profilePath = await waitForDownloadedFile("30cm-slim-smart-led-wireless-profile.json");
    assertStep(fs.statSync(profilePath).size > 0, "Export product profile", profilePath);

    await page.screenshot({
      path: path.join(projectRoot, "test-output", "extension-loaded-popup.png"),
      fullPage: false
    });
    logStep("Save loaded extension screenshot", "test-output/extension-loaded-popup.png");
  } finally {
    if (browser) await browser.close();
    fs.rmSync(userDataDir, { recursive: true, force: true });
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
