#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "store-assets");
const logoPath = path.join(root, "icons", "icon-128.png");
const logoData = fs.readFileSync(logoPath).toString("base64");
const logoSrc = `data:image/png;base64,${logoData}`;

const screenshots = [
  {
    file: "01-product-search.png",
    title: "Nightstand OEM Product Search",
    subtitle: "Find nightstand, bedside table and bedside cabinet references by size, feature and buyer need.",
    hero: "30cm Slim Smart Nightstand",
    cards: [
      "Features: LED light, wireless charging, USB charging",
      "Buyer terms: nightstand, bedside table, smart cabinet",
      "Actions: Open official page, save, compare, copy RFQ"
    ]
  },
  {
    file: "02-official-navigation.png",
    title: "Verified NightstandPlus Routes",
    subtitle: "Buttons open stable official pages instead of unsupported website search URLs.",
    hero: "Official product and OEM links",
    cards: [
      "Products -> /products/",
      "OEM/ODM -> /oem-odm/",
      "RFQ Guide -> buyer preparation resource"
    ]
  },
  {
    file: "03-product-comparison.png",
    title: "Compare B2B Product Profiles",
    subtitle: "Review dimensions, features, MOQ and packaging before preparing a furniture inquiry.",
    hero: "Product comparison table",
    cards: [
      "50cm wireless charging cabinet",
      "70cm tall fingerprint lock cabinet",
      "MOQ, packaging and official URL in one view"
    ]
  },
  {
    file: "04-export-saved-products.png",
    title: "Save and Export Sourcing Records",
    subtitle: "Build a shortlist for internal purchasing discussion and wholesale follow-up.",
    hero: "CSV / JSON / saved products",
    cards: [
      "Save favorite product references locally",
      "Export product data with official URLs",
      "Use records for importer and hotel project sourcing"
    ]
  },
  {
    file: "05-rfq-inquiry-draft.png",
    title: "RFQ Draft for OEM Buyers",
    subtitle: "Generate a clean English inquiry draft for NightstandPlus OEM and wholesale communication.",
    hero: "Inquiry draft builder",
    cards: [
      "Product name, target market and feature list",
      "Request MOQ, price range, lead time and packaging",
      "Open NightstandPlus contact route after user action"
    ]
  }
];

function baseStyles() {
  return `
    * { box-sizing: border-box; }
    body {
      margin: 0;
      width: 1280px;
      height: 800px;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2523;
      background: linear-gradient(135deg, #f7f2ea 0%, #efe4d5 44%, #f8f6f1 100%);
    }
    .frame {
      display: grid;
      grid-template-columns: 430px 1fr;
      gap: 44px;
      width: 100%;
      height: 100%;
      padding: 58px 70px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 52px;
    }
    .brand img {
      width: 72px;
      height: 72px;
      border-radius: 18px;
      box-shadow: 0 12px 30px rgba(47, 94, 85, 0.18);
    }
    .brand strong {
      display: block;
      font-size: 26px;
      line-height: 1.15;
    }
    .brand span {
      display: block;
      margin-top: 5px;
      color: #68716d;
      font-size: 16px;
    }
    h1 {
      margin: 0 0 18px;
      color: #2f5e55;
      font-size: 56px;
      line-height: 1.05;
      letter-spacing: 0;
    }
    .subtitle {
      margin: 0;
      color: #68716d;
      font-size: 24px;
      line-height: 1.35;
    }
    .keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 44px;
    }
    .keywords span {
      border: 1px solid #ded8ce;
      border-radius: 999px;
      padding: 9px 14px;
      color: #2f5e55;
      background: #ffffff;
      font-size: 17px;
      font-weight: 700;
    }
    .panel {
      align-self: center;
      border: 1px solid #ded8ce;
      border-radius: 18px;
      padding: 24px;
      background: #ffffff;
      box-shadow: 0 28px 70px rgba(47, 94, 85, 0.16);
    }
    .search {
      display: grid;
      grid-template-columns: 1fr 112px;
      gap: 12px;
      margin-bottom: 18px;
    }
    .search div {
      border: 1px solid #ded8ce;
      border-radius: 8px;
      padding: 14px 16px;
      color: #68716d;
      font-size: 18px;
    }
    .search button {
      border: 0;
      border-radius: 8px;
      color: #ffffff;
      background: #2f5e55;
      font-size: 18px;
      font-weight: 700;
    }
    .result {
      border: 1px solid #ded8ce;
      border-radius: 12px;
      padding: 18px;
      background: #fbf8f3;
    }
    .result h2 {
      margin: 0 0 10px;
      color: #1f2523;
      font-size: 28px;
      line-height: 1.2;
    }
    .result p {
      margin: 0 0 10px;
      color: #68716d;
      font-size: 18px;
      line-height: 1.42;
    }
    .actions {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-top: 18px;
    }
    .actions span {
      border-radius: 8px;
      padding: 11px 8px;
      color: #ffffff;
      background: #2f5e55;
      text-align: center;
      font-size: 15px;
      font-weight: 700;
    }
  `;
}

function screenshotHtml(item) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>${baseStyles()}</style>
      </head>
      <body>
        <main class="frame">
          <section>
            <div class="brand">
              <img src="${logoSrc}" alt="">
              <div>
                <strong>NightstandPlus</strong>
                <span>B2B Product Finder</span>
              </div>
            </div>
            <h1>${item.title}</h1>
            <p class="subtitle">${item.subtitle}</p>
            <div class="keywords">
              <span>nightstand OEM</span>
              <span>bedside table</span>
              <span>bedside cabinet</span>
              <span>wholesale</span>
              <span>factory</span>
            </div>
          </section>
          <section class="panel">
            <div class="search">
              <div>Search nightstand, feature or market</div>
              <button>Search</button>
            </div>
            <div class="result">
              <h2>${item.hero}</h2>
              ${item.cards.map((line) => `<p>${line}</p>`).join("")}
              <div class="actions">
                <span>Open</span>
                <span>Save</span>
                <span>Compare</span>
                <span>Copy RFQ</span>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  `;
}

function promoHtml(width, height) {
  const isSmall = width === 440;
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            width: ${width}px;
            height: ${height}px;
            overflow: hidden;
            font-family: Arial, Helvetica, sans-serif;
            color: #ffffff;
            background: linear-gradient(135deg, #1f403a 0%, #2f5e55 54%, #9a6a2f 100%);
          }
          .wrap {
            display: grid;
            ${isSmall ? "grid-template-columns: 104px 1fr;" : "grid-template-columns: 250px 1fr;"}
            align-items: center;
            gap: ${isSmall ? "18px" : "54px"};
            width: 100%;
            height: 100%;
            padding: ${isSmall ? "24px" : "58px 76px"};
          }
          img {
            width: ${isSmall ? "96px" : "210px"};
            height: ${isSmall ? "96px" : "210px"};
            border-radius: ${isSmall ? "22px" : "42px"};
            box-shadow: 0 24px 58px rgba(0, 0, 0, 0.24);
          }
          h1 {
            margin: 0 0 ${isSmall ? "8px" : "18px"};
            font-size: ${isSmall ? "30px" : "76px"};
            line-height: 1.02;
            letter-spacing: 0;
          }
          p {
            margin: 0;
            max-width: ${isSmall ? "260px" : "820px"};
            color: rgba(255, 255, 255, 0.88);
            font-size: ${isSmall ? "15px" : "30px"};
            line-height: 1.26;
          }
        </style>
      </head>
      <body>
        <main class="wrap">
          <img src="${logoSrc}" alt="">
          <section>
            <h1>NightstandPlus B2B Product Finder</h1>
            <p>Nightstand, bedside table and bedside cabinet OEM/wholesale sourcing helper.</p>
          </section>
        </main>
      </body>
    </html>
  `;
}

async function renderHtml(page, html, filePath, width, height) {
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "load" });
  await page.screenshot({ path: filePath, clip: { x: 0, y: 0, width, height } });
}

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: null,
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();

  for (const item of screenshots) {
    await renderHtml(page, screenshotHtml(item), path.join(outputDir, item.file), 1280, 800);
  }

  await renderHtml(page, promoHtml(440, 280), path.join(outputDir, "small-promo-440x280.png"), 440, 280);
  await renderHtml(page, promoHtml(1400, 560), path.join(outputDir, "marquee-promo-1400x560.png"), 1400, 560);

  await browser.close();
  console.log(`Generated store assets in ${outputDir}`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
