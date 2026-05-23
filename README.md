# NightstandPlus B2B Product Finder

A lightweight Chrome extension for furniture importers, wholesalers, hotel project buyers and sourcing teams who need fast access to NightstandPlus nightstand, bedside table, bedside cabinet and OEM/ODM product information.

Official website: [https://www.nightstandplus.com/](https://www.nightstandplus.com/)

Chrome Web Store: [NightstandPlus B2B Product Finder](https://chromewebstore.google.com/detail/nightstandplus-b2b-produc/memjliblkbachacpjknbihejpjbimkna)

GitHub Pages demo: [https://nightstandplus.github.io/nightstandplus-b2b-product-finder/](https://nightstandplus.github.io/nightstandplus-b2b-product-finder/)

## What It Does

NightstandPlus B2B Product Finder works without a website search feature. The extension keeps a local product index and opens verified official NightstandPlus routes only when the user clicks a link.

Core features:

- Search local product records by nightstand, bedside table, bedside cabinet, OEM, wholesale, feature, size or target market.
- Open verified official pages for products, smart nightstands, wireless charging, LED, safe storage, custom products, OEM/ODM and contact.
- Compare two products by dimensions, buyer features, MOQ, packaging and official URL.
- Save favorite products locally in Chrome.
- Export current product results as CSV or JSON for sourcing records.
- Generate an English RFQ inquiry draft for OEM/ODM and wholesale communication.

## B2B Use Cases

- Furniture importers can quickly shortlist smart nightstands and open the official detail page.
- Hotel project buyers can compare storage, lighting, charging and smart lock options.
- Wholesalers can export product profiles for internal sourcing notes.
- OEM and ODM buyers can prepare structured inquiries before contacting NightstandPlus.
- Marketing teams can publish a practical Chrome extension and GitHub project that naturally references the official website.

## Install

Install the published extension from Chrome Web Store:

[NightstandPlus B2B Product Finder](https://chromewebstore.google.com/detail/nightstandplus-b2b-produc/memjliblkbachacpjknbihejpjbimkna)

## Install Locally

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable `Developer mode`.
4. Click `Load unpacked`.
5. Select this project folder.
6. Click the extension icon and start searching products.

## Test

Run the local smoke test:

```bash
npm run test:smoke
```

Build a Chrome Web Store upload package:

```bash
npm run dist
```

## Project Structure

```text
.
├── icons/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── tests/
├── scripts/
├── store-assets/
├── docs/
├── PRIVACY.md
├── package.json
└── README.md
```

## Store Assets

Generate Chrome Web Store screenshots and promotional images:

```bash
npm run assets:store
```

Generated files:

- `store-assets/01-product-search.png`
- `store-assets/02-official-navigation.png`
- `store-assets/03-product-comparison.png`
- `store-assets/04-export-saved-products.png`
- `store-assets/05-rfq-inquiry-draft.png`
- `store-assets/small-promo-440x280.png`
- `store-assets/marquee-promo-1400x560.png`

Demo video is optional for Chrome Web Store. A scene plan is available in `store-assets/demo-video/README.md`.

## Chrome Web Store Positioning

Recommended category: Productivity.

Store-facing description:

> NightstandPlus B2B Product Finder helps furniture importers, wholesalers and hotel project buyers find nightstand, bedside table, bedside cabinet and OEM/ODM product references, compare product profiles, save sourcing notes, export records and open verified NightstandPlus official website links.

Recommended short description:

> Find nightstand, bedside table and bedside cabinet OEM/wholesale products from NightstandPlus.

Do not submit it as an SEO or backlink tool. The review-facing message should be that this is a practical B2B product discovery and sourcing workflow extension.

## Privacy

The extension uses only the Chrome `storage` permission. Favorites are saved locally on the user's browser. It does not read browser history, inject content scripts, collect personal data, call analytics endpoints or send product searches to a server.
