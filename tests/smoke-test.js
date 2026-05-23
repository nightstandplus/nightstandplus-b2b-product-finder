const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
const popupHtml = fs.readFileSync(path.join(root, "popup.html"), "utf8");
const popupJs = fs.readFileSync(path.join(root, "popup.js"), "utf8");
const privacy = fs.readFileSync(path.join(root, "PRIVACY.md"), "utf8");

assert.strictEqual(manifest.manifest_version, 3);
assert.strictEqual(manifest.name, "NightstandPlus B2B Product Finder");
assert.deepStrictEqual(manifest.permissions, ["storage"]);
assert(!manifest.host_permissions, "host_permissions should not be requested");

[
  "NightstandPlus Finder",
  "Popular Buyer Needs",
  "Official Website Shortcuts",
  "Product Results",
  "Saved Products"
].forEach((text) => assert(popupHtml.includes(text), `popup.html missing ${text}`));

[
  "https://www.nightstandplus.com/",
  "nightstandplus-extension",
  "buildInquiryTemplate",
  "wireless charging",
  "bedside table",
  "OEM wholesale service",
  "nightstandplus-products.csv",
  "nightstandplus-products.json"
].forEach((text) => assert(popupJs.includes(text), `popup.js missing ${text}`));

assert(privacy.includes("does not collect, transmit, sell or share personal data"));

console.log("Smoke test passed.");
