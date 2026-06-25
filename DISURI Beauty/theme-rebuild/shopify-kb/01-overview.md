# Build Shopify Themes — Overview

Source: https://shopify.dev/docs/storefronts/themes

Shopify themes are built with **Liquid**, HTML, CSS, JavaScript, and JSON. They shape the online store experience for merchants and customers.

## Getting started paths

1. **New theme** — Start from [Skeleton](https://shopify.dev/docs/storefronts/themes/getting-started/create): `shopify theme init`
2. **Customize existing** — Pull merchant theme: `shopify theme pull`, then `shopify theme dev`

## Core building blocks

| Building block | Purpose |
|----------------|---------|
| Templates | Define which sections appear on each page type |
| Sections | Modular page regions merchants edit in theme editor |
| Blocks | Sub-components within sections (settings + Liquid) |
| Snippets | Reusable Liquid partials (not directly editable by merchants) |
| Assets | Static CSS, JS, fonts, images |
| Config | Global theme settings schema + saved values |
| Locales | Translation strings |

## Key technologies

- **Liquid** — Templating language for dynamic storefront content
- **JSON templates** — Online Store 2.0 template format linking sections
- **Theme blocks** — Blocks in `/blocks` folder, nestable up to 8 levels
- **Section rendering API** — AJAX partial page updates
- **Metafields** — Custom data on products, collections, shop

## Tools

| Tool | Purpose |
|------|---------|
| [Shopify CLI](https://shopify.dev/docs/storefronts/themes/tools/cli) | Init, dev preview, push, publish, check |
| [GitHub integration](https://shopify.dev/docs/storefronts/themes/tools/github) | Two-way sync with Git repos |
| [Theme Check](https://shopify.dev/docs/storefronts/themes/tools/theme-check) | Lint Liquid and enforce best practices |
| [Dev stores](https://shopify.dev/docs/storefronts/themes/tools/development-stores) | Free sandbox stores for development |

## DISURI application

We use Skeleton as the base, map brand tokens to `settings_schema.json`, build custom sections for hero/collection/Queens CTA, and deploy via CLI to dev store first, then live store unpublished.
