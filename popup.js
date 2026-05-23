const WEBSITE = "https://www.nightstandplus.com/";

const officialRoutes = {
  home: WEBSITE,
  products: `${WEBSITE}products/`,
  smartNightstands: `${WEBSITE}products/smart-nightstands/`,
  wirelessCharging: `${WEBSITE}products/wireless-charging-nightstands/`,
  ledNightstands: `${WEBSITE}products/led-nightstands/`,
  safeBox: `${WEBSITE}products/safe-box-nightstands/`,
  fingerprintLock: `${WEBSITE}products/fingerprint-lock-nightstands/`,
  bluetoothSpeaker: `${WEBSITE}products/bluetooth-speaker-nightstands/`,
  floating: `${WEBSITE}products/floating-nightstands/`,
  solidWood: `${WEBSITE}products/solid-wood-nightstands/`,
  vanity: `${WEBSITE}products/vanity-nightstands/`,
  custom: `${WEBSITE}products/custom-nightstands/`,
  oemOdm: `${WEBSITE}oem-odm/`,
  rfqGuide: `${WEBSITE}blog/how-to-prepare-a-nightstand-rfq-for-a-chinese-factory/`,
  contact: `${WEBSITE}contact/`
};

const keywordRoutes = [
  { label: "OEM / ODM", primaryUrl: officialRoutes.oemOdm, fallbackUrl: officialRoutes.contact, fallbackType: "inquiry" },
  { label: "wholesale nightstand", primaryUrl: officialRoutes.products, fallbackUrl: officialRoutes.contact, fallbackType: "category" },
  { label: "bedside table", primaryUrl: officialRoutes.products, fallbackUrl: officialRoutes.smartNightstands, fallbackType: "category" },
  { label: "bedside cabinet", primaryUrl: officialRoutes.products, fallbackUrl: officialRoutes.custom, fallbackType: "category" },
  { label: "wireless charging", primaryUrl: officialRoutes.wirelessCharging, fallbackUrl: officialRoutes.smartNightstands, fallbackType: "feature" },
  { label: "LED nightstand", primaryUrl: officialRoutes.ledNightstands, fallbackUrl: officialRoutes.smartNightstands, fallbackType: "feature" },
  { label: "hotel project", primaryUrl: officialRoutes.custom, fallbackUrl: officialRoutes.oemOdm, fallbackType: "project" },
  { label: "safe storage", primaryUrl: officialRoutes.safeBox, fallbackUrl: officialRoutes.smartNightstands, fallbackType: "feature" }
];

const shortcutRoutes = [
  { label: "Products", primaryUrl: officialRoutes.products, fallbackUrl: officialRoutes.home, fallbackType: "category" },
  { label: "OEM/ODM", primaryUrl: officialRoutes.oemOdm, fallbackUrl: officialRoutes.contact, fallbackType: "inquiry" },
  { label: "RFQ Guide", primaryUrl: officialRoutes.rfqGuide, fallbackUrl: officialRoutes.contact, fallbackType: "resource" },
  { label: "Custom", primaryUrl: officialRoutes.custom, fallbackUrl: officialRoutes.oemOdm, fallbackType: "category" },
  { label: "Contact", primaryUrl: officialRoutes.contact, fallbackUrl: officialRoutes.home, fallbackType: "inquiry" }
];

const sitemapLinks = [
  { label: "Smart", url: officialRoutes.smartNightstands },
  { label: "Charging", url: officialRoutes.wirelessCharging },
  { label: "LED", url: officialRoutes.ledNightstands },
  { label: "Safe Box", url: officialRoutes.safeBox },
  { label: "Fingerprint", url: officialRoutes.fingerprintLock },
  { label: "Bluetooth", url: officialRoutes.bluetoothSpeaker },
  { label: "Vanity", url: officialRoutes.vanity },
  { label: "OEM", url: officialRoutes.oemOdm }
];

const products = [
  {
    id: "30cm-slim-smart-led-wireless",
    name: "30cm Slim Smart Nightstand with LED Light and Wireless Charging",
    category: "smart nightstand",
    dimensions: "30cm wide slim bedside table",
    features: ["LED light", "wireless charging", "USB charging", "compact storage", "small bedroom"],
    moq: "Confirm MOQ by finish and order plan",
    packaging: "Export carton, compact bedroom furniture packing",
    markets: ["Europe", "United States", "Southeast Asia", "apartments"],
    url: `${WEBSITE}products/30cm-smart-nightstand-led-wireless-charging/`,
    fallbackUrl: officialRoutes.wirelessCharging
  },
  {
    id: "50cm-oak-look-wireless-safe",
    name: "50cm Smart Nightstand with Wireless Charging and Safe Storage",
    category: "bedside cabinet",
    dimensions: "50cm wide oak-look bedside cabinet",
    features: ["wireless charging", "safe storage", "drawer storage", "oak look", "modern bedroom"],
    moq: "Confirm MOQ by cabinet color and hardware configuration",
    packaging: "Export carton, protected cabinet corners",
    markets: ["Europe", "United States", "wholesale furniture"],
    url: `${WEBSITE}products/50cm-oak-look-smart-nightstand-wireless-charging/`,
    fallbackUrl: officialRoutes.safeBox
  },
  {
    id: "70cm-tall-fingerprint-safe",
    name: "70cm Tall Smart Nightstand with LED Light, Speaker and Safe Storage",
    category: "smart bedside cabinet",
    dimensions: "70cm tall bedside cabinet",
    features: ["fingerprint lock", "safe storage", "LED light", "Bluetooth speaker", "tall cabinet"],
    moq: "Project MOQ depends on lock, speaker and finish options",
    packaging: "Reinforced export carton for tall cabinet",
    markets: ["hotel project", "villa bedroom", "Middle East", "United States"],
    url: `${WEBSITE}products/70cm-tall-smart-nightstand-fingerprint-lock/`,
    fallbackUrl: officialRoutes.fingerprintLock
  },
  {
    id: "open-shelf-voice-control-safe",
    name: "41.5/45cm Smart Nightstand with Open Shelf and Safe Storage",
    category: "nightstand",
    dimensions: "41.5cm / 45cm bedside table options",
    features: ["voice control", "open shelf", "safe storage", "LED light", "charging station"],
    moq: "Confirm by size, voltage and smart control configuration",
    packaging: "Export carton for mixed smart nightstand orders",
    markets: ["Europe", "Southeast Asia", "online furniture seller"],
    url: `${WEBSITE}products/voice-control-smart-nightstand-open-shelf/`,
    fallbackUrl: officialRoutes.smartNightstands
  },
  {
    id: "50cm-double-ring-speaker",
    name: "50cm Double-Ring Smart Nightstand with Bluetooth Speaker",
    category: "smart nightstand",
    dimensions: "50cm bedside table",
    features: ["Bluetooth speaker", "wireless charging", "double-ring design", "LED detail", "modern furniture"],
    moq: "Confirm MOQ by speaker module and finish",
    packaging: "Export carton with electronics protection",
    markets: ["Europe", "United States", "bedroom furniture wholesale"],
    url: `${WEBSITE}products/50cm-double-ring-smart-nightstand-bluetooth-speaker/`,
    fallbackUrl: officialRoutes.bluetoothSpeaker
  },
  {
    id: "50cm-four-drawer-led-side-lights",
    name: "50cm Four-Drawer Smart Nightstand with LED Side Lights",
    category: "bedside cabinet",
    dimensions: "50cm four-drawer cabinet",
    features: ["four drawers", "LED side lights", "wireless charging", "large storage", "hotel room"],
    moq: "Confirm by drawer hardware and finish",
    packaging: "Export carton for drawer cabinet",
    markets: ["hotel project", "United States", "Southeast Asia"],
    url: `${WEBSITE}products/50cm-four-drawer-smart-nightstand-led-side-lights/`,
    fallbackUrl: officialRoutes.ledNightstands
  },
  {
    id: "60cm-vanity-lighted-mirror",
    name: "60cm Smart Vanity Nightstand Cabinet with Lighted Mirror",
    category: "vanity nightstand",
    dimensions: "60cm vanity bedside cabinet",
    features: ["lighted mirror", "five drawers", "safe storage", "vanity use", "bedroom storage"],
    moq: "Confirm by mirror lighting and cabinet finish",
    packaging: "Mirror-safe export carton and protective insert",
    markets: ["Europe", "hotel apartment", "beauty room furniture"],
    url: `${WEBSITE}products/60cm-five-drawer-smart-vanity-cabinet-lighted-mirror/`,
    fallbackUrl: officialRoutes.vanity
  },
  {
    id: "custom-nightstand-oem",
    name: "Custom Nightstand OEM / ODM Manufacturing",
    category: "OEM wholesale service",
    dimensions: "Custom size, color, finish, hardware and smart module options",
    features: ["OEM", "ODM", "private label", "factory direct", "bulk order", "custom packaging"],
    moq: "MOQ depends on structure, material, smart module and packaging",
    packaging: "Buyer label, neutral carton or customized export packaging",
    markets: ["furniture importer", "wholesaler", "brand owner", "hotel project"],
    url: officialRoutes.oemOdm,
    fallbackUrl: officialRoutes.contact
  }
];

const labels = {
  searchPlaceholder: "Search nightstand, bedside table, feature or market",
  search: "Search",
  compare: "Compare",
  favorite: "Save",
  saved: "Saved",
  open: "Open",
  details: "Details",
  noResults: "No matching products. Try OEM, wholesale, wireless charging, LED, safe storage, hotel or bedside table.",
  compareHint: "Select exactly two products for comparison."
};

let currentResults = [...products];
let selectedProductIds = new Set();
let favorites = new Set();
let activeFallbackProduct = null;

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const resultList = document.querySelector("#resultList");
const resultCount = document.querySelector("#resultCount");
const keywordList = document.querySelector("#keywordList");
const shortcutList = document.querySelector("#shortcutList");
const sitemapList = document.querySelector("#sitemapList");
const compareButton = document.querySelector("#compareButton");
const comparePanel = document.querySelector("#comparePanel");
const compareTable = document.querySelector("#compareTable");
const closeCompareButton = document.querySelector("#closeCompareButton");
const exportCsvButton = document.querySelector("#exportCsvButton");
const exportJsonButton = document.querySelector("#exportJsonButton");
const favoriteList = document.querySelector("#favoriteList");
const favoriteCount = document.querySelector("#favoriteCount");
const fallbackModal = document.querySelector("#fallbackModal");
const fallbackTitle = document.querySelector("#fallbackTitle");
const fallbackBody = document.querySelector("#fallbackBody");
const closeFallbackButton = document.querySelector("#closeFallbackButton");
const fallbackContactButton = document.querySelector("#fallbackContactButton");
const fallbackExportButton = document.querySelector("#fallbackExportButton");

function t(key) {
  return labels[key] || key;
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function productHaystack(product) {
  return normalize([
    product.name,
    product.category,
    product.dimensions,
    product.packaging,
    product.moq,
    product.features.join(" "),
    product.markets.join(" ")
  ].join(" "));
}

function searchProducts() {
  const query = normalize(searchInput.value);
  const terms = query.split(/\s+/).filter(Boolean);
  currentResults = query
    ? products.filter((product) => {
      const haystack = productHaystack(product);
      return terms.every((term) => haystack.includes(term));
    })
    : [...products];
  selectedProductIds = new Set(
    [...selectedProductIds].filter((id) => currentResults.some((product) => product.id === id))
  );
  renderResults();
}

function openOfficialLink(url) {
  window.open(url, "_blank", "noopener");
}

function isUsableOfficialUrl(url) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.origin === new URL(WEBSITE).origin && !parsed.searchParams.has("s");
  } catch {
    return false;
  }
}

function buildProductDeepLink(product) {
  const params = new URLSearchParams({
    source: "nightstandplus-extension",
    product: product.id,
    category: product.category
  });
  return `${officialRoutes.contact}#product-inquiry?${params.toString()}`;
}

function buildInquiryTemplate(product) {
  return [
    "Hello NightstandPlus team,",
    "",
    `I am interested in ${product.name}.`,
    `Target market: ${product.markets.join(" / ")}.`,
    `Key requirements: ${product.features.join(", ")}.`,
    "Please share MOQ, FOB price range, lead time, packaging details, available finishes, OEM/ODM options and export documents.",
    "",
    `Reference link: ${product.url || product.fallbackUrl || officialRoutes.contact}`
  ].join("\n");
}

function openRoute(route) {
  if (isUsableOfficialUrl(route.primaryUrl)) {
    openOfficialLink(route.primaryUrl);
    return;
  }
  if (isUsableOfficialUrl(route.fallbackUrl)) {
    openOfficialLink(route.fallbackUrl);
    return;
  }
  showSitemapFallback(route.label, route.fallbackType);
}

function openProduct(product) {
  if (isUsableOfficialUrl(product.url)) {
    openOfficialLink(product.url);
    return;
  }
  if (isUsableOfficialUrl(product.fallbackUrl)) {
    showProductFallback(product, {
      reason: "This product uses a verified official category or inquiry route.",
      officialUrl: product.fallbackUrl,
      deepLink: buildProductDeepLink(product)
    });
    return;
  }
  showProductFallback(product, {
    reason: "Official product URL is not configured.",
    officialUrl: officialRoutes.contact,
    deepLink: buildProductDeepLink(product)
  });
}

function showSitemapFallback(label, fallbackType) {
  activeFallbackProduct = null;
  fallbackTitle.textContent = `${label} links`;
  fallbackBody.innerHTML = `
    <p class="product-meta">No dedicated page is configured for this ${escapeHtml(fallbackType)} route. Use the closest official resource below.</p>
    ${sitemapLinks.map((link) => `
      <div class="fallback-item">
        <strong>${escapeHtml(link.label)}</strong>
        <span>${escapeHtml(link.url)}</span>
      </div>
    `).join("")}
  `;
  fallbackModal.hidden = false;
}

function showProductFallback(product, context = {}) {
  activeFallbackProduct = product;
  fallbackTitle.textContent = product.name;
  fallbackBody.innerHTML = `
    <p class="product-meta">${escapeHtml(context.reason || "Product details are available inside the extension.")}</p>
    <div class="fallback-item">
      <strong>Category</strong>
      <span>${escapeHtml(product.category)}</span>
    </div>
    <div class="fallback-item">
      <strong>Dimensions</strong>
      <span>${escapeHtml(product.dimensions)}</span>
    </div>
    <div class="fallback-item">
      <strong>Buyer Features</strong>
      <span>${escapeHtml(product.features.join(", "))}</span>
    </div>
    <div class="fallback-item">
      <strong>MOQ</strong>
      <span>${escapeHtml(product.moq || "Confirm with the official sales team.")}</span>
    </div>
    <div class="fallback-item">
      <strong>Packaging</strong>
      <span>${escapeHtml(product.packaging)}</span>
    </div>
    <div class="fallback-item">
      <strong>Recommended official link</strong>
      <span>${escapeHtml(context.officialUrl || product.url || product.fallbackUrl || officialRoutes.contact)}</span>
    </div>
    <div class="fallback-item">
      <strong>Inquiry draft</strong>
      <p>${escapeHtml(buildInquiryTemplate(product)).replaceAll("\n", "<br>")}</p>
    </div>
  `;
  fallbackModal.hidden = false;
}

function createButton(label, className, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  if (className) button.className = className;
  button.addEventListener("click", onClick);
  return button;
}

function renderNavigation() {
  keywordList.innerHTML = "";
  keywordRoutes.forEach((keyword) => {
    keywordList.appendChild(createButton(keyword.label, "chip", () => openRoute(keyword)));
  });

  shortcutList.innerHTML = "";
  shortcutRoutes.forEach((shortcut) => {
    shortcutList.appendChild(createButton(shortcut.label, "shortcut", () => openRoute(shortcut)));
  });

  sitemapList.innerHTML = "";
  sitemapLinks.forEach((link) => {
    sitemapList.appendChild(createButton(link.label, "shortcut", () => openOfficialLink(link.url)));
  });
}

function renderResults() {
  resultList.innerHTML = "";
  resultCount.textContent = String(currentResults.length);

  if (!currentResults.length) {
    const empty = document.createElement("p");
    empty.className = "product-meta";
    empty.textContent = t("noResults");
    resultList.appendChild(empty);
    return;
  }

  currentResults.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const top = document.createElement("div");
    top.className = "product-top";

    const titleWrap = document.createElement("div");
    const title = document.createElement("div");
    title.className = "product-title";
    title.textContent = product.name;
    const meta = document.createElement("p");
    meta.className = "product-meta";
    meta.textContent = `${product.category} | ${product.dimensions}`;
    titleWrap.append(title, meta);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selectedProductIds.has(product.id);
    checkbox.setAttribute("aria-label", `Select ${product.name}`);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) selectedProductIds.add(product.id);
      else selectedProductIds.delete(product.id);
    });

    top.append(titleWrap, checkbox);

    const features = document.createElement("p");
    features.className = "product-meta";
    features.textContent = `Features: ${product.features.join(", ")}`;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const openButton = createButton(t("open"), "", () => openProduct(product));
    const favoriteButton = createButton(
      favorites.has(product.id) ? t("saved") : t("favorite"),
      "secondary",
      () => toggleFavorite(product.id)
    );
    const detailButton = createButton(t("details"), "secondary", () => showProductFallback(product));
    const copyButton = createButton("Copy RFQ", "secondary", async () => {
      await navigator.clipboard.writeText(buildInquiryTemplate(product));
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = "Copy RFQ";
      }, 1200);
    });

    actions.append(openButton, favoriteButton, detailButton, copyButton);
    card.append(top, features, actions);
    resultList.appendChild(card);
  });
}

function getSelectedProducts() {
  return products.filter((product) => selectedProductIds.has(product.id));
}

function renderComparison() {
  const selected = getSelectedProducts();
  if (selected.length !== 2) {
    comparePanel.hidden = false;
    compareTable.innerHTML = `<p class="product-meta">${t("compareHint")}</p>`;
    return;
  }

  const rows = [
    ["Product", selected[0].name, selected[1].name],
    ["Category", selected[0].category, selected[1].category],
    ["Dimensions", selected[0].dimensions, selected[1].dimensions],
    ["Buyer Features", selected[0].features.join(", "), selected[1].features.join(", ")],
    ["MOQ", selected[0].moq, selected[1].moq],
    ["Packaging", selected[0].packaging, selected[1].packaging],
    [
      "Official Link",
      selected[0].url || selected[0].fallbackUrl || buildProductDeepLink(selected[0]),
      selected[1].url || selected[1].fallbackUrl || buildProductDeepLink(selected[1])
    ]
  ];

  comparePanel.hidden = false;
  compareTable.innerHTML = `
    <table class="compare-table">
      <tbody>
        ${rows.map((row) => `
          <tr>
            <th>${escapeHtml(row[0])}</th>
            <td>${escapeHtml(row[1])}</td>
            <td>${escapeHtml(row[2])}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadFavorites() {
  if (typeof chrome === "undefined" || !chrome.storage) {
    renderFavorites();
    renderResults();
    return;
  }
  const stored = await chrome.storage.local.get({ favorites: [] });
  favorites = new Set(stored.favorites);
  renderFavorites();
  renderResults();
}

async function toggleFavorite(productId) {
  if (favorites.has(productId)) favorites.delete(productId);
  else favorites.add(productId);
  if (typeof chrome !== "undefined" && chrome.storage) {
    await chrome.storage.local.set({ favorites: [...favorites] });
  }
  renderFavorites();
  renderResults();
}

function renderFavorites() {
  favoriteList.innerHTML = "";
  const favoriteProducts = products.filter((product) => favorites.has(product.id));
  favoriteCount.textContent = String(favoriteProducts.length);

  if (!favoriteProducts.length) {
    const empty = document.createElement("p");
    empty.className = "product-meta";
    empty.textContent = "No saved products yet.";
    favoriteList.appendChild(empty);
    return;
  }

  favoriteProducts.forEach((product) => {
    const item = document.createElement("div");
    item.className = "favorite-item";
    const name = document.createElement("span");
    name.textContent = product.name;
    const link = document.createElement("a");
    link.href = product.url || product.fallbackUrl || buildProductDeepLink(product);
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = t("open");
    item.append(name, link);
    favoriteList.appendChild(item);
  });
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function exportCsv() {
  const header = ["name", "category", "dimensions", "features", "moq", "packaging", "markets", "official_url"];
  const rows = currentResults.map((product) => [
    product.name,
    product.category,
    product.dimensions,
    product.features.join("; "),
    product.moq,
    product.packaging,
    product.markets.join("; "),
    product.url || product.fallbackUrl || buildProductDeepLink(product)
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  downloadFile("nightstandplus-products.csv", csv, "text/csv;charset=utf-8");
}

function exportJson() {
  const payload = currentResults.map((product) => ({
    name: product.name,
    category: product.category,
    dimensions: product.dimensions,
    features: product.features,
    moq: product.moq,
    packaging: product.packaging,
    markets: product.markets,
    officialUrl: product.url || product.fallbackUrl || buildProductDeepLink(product),
    inquiryTemplate: buildInquiryTemplate(product)
  }));
  downloadFile("nightstandplus-products.json", JSON.stringify(payload, null, 2), "application/json;charset=utf-8");
}

function exportProductProfile(product) {
  if (!product) {
    showSitemapFallback("Official Routes", "sitemap");
    return;
  }
  const profile = {
    name: product.name,
    category: product.category,
    dimensions: product.dimensions,
    features: product.features,
    moq: product.moq,
    packaging: product.packaging,
    markets: product.markets,
    officialUrl: product.url || product.fallbackUrl || officialRoutes.contact,
    inquiryTemplate: buildInquiryTemplate(product)
  };
  downloadFile(`${product.id}-profile.json`, JSON.stringify(profile, null, 2), "application/json;charset=utf-8");
}

function applyLanguage() {
  searchInput.placeholder = t("searchPlaceholder");
  searchButton.textContent = t("search");
  compareButton.textContent = t("compare");
  renderResults();
  renderFavorites();
}

searchButton.addEventListener("click", searchProducts);
searchInput.addEventListener("input", searchProducts);
compareButton.addEventListener("click", renderComparison);
closeCompareButton.addEventListener("click", () => {
  comparePanel.hidden = true;
});
closeFallbackButton.addEventListener("click", () => {
  fallbackModal.hidden = true;
});
fallbackContactButton.addEventListener("click", () => {
  openOfficialLink(activeFallbackProduct ? buildProductDeepLink(activeFallbackProduct) : officialRoutes.contact);
});
fallbackExportButton.addEventListener("click", () => {
  exportProductProfile(activeFallbackProduct);
});
exportCsvButton.addEventListener("click", exportCsv);
exportJsonButton.addEventListener("click", exportJson);

renderNavigation();
applyLanguage();
loadFavorites();
