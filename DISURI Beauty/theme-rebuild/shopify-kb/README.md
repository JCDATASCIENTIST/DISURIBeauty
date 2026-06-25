# Shopify Themes — DISURI Knowledge Base

Curated reference extracted from [shopify.dev/docs/storefronts/themes](https://shopify.dev/docs/storefronts/themes) for the DISURI Beauty theme rebuild.

## Index

| Doc | File | Use when |
|-----|------|----------|
| Overview | [01-overview.md](./01-overview.md) | Starting theme work |
| Architecture | [02-architecture.md](./02-architecture.md) | Folder structure, templates, sections |
| Online Store 2.0 | [03-online-store-2.md](./03-online-store-2.md) | JSON templates, app blocks |
| Theme blocks | [04-theme-blocks.md](./04-theme-blocks.md) | Building reusable blocks |
| Settings & config | [05-settings-config.md](./05-settings-config.md) | settings_schema, theme settings |
| Shopify CLI | [06-cli.md](./06-cli.md) | dev, push, publish, check |
| Dev stores | [07-dev-stores.md](./07-dev-stores.md) | Sandbox store setup |
| GitHub integration | [08-github.md](./08-github.md) | Version control sync |
| Theme Check | [09-theme-check.md](./09-theme-check.md) | Linting and CI |
| Best practices | [10-best-practices.md](./10-best-practices.md) | Performance, accessibility |
| Ajax APIs | [11-ajax-apis.md](./11-ajax-apis.md) | Cart, section rendering |

## Liquid reference (link only)

The full Liquid API is too large to mirror. Use these live references:

- [Liquid reference](https://shopify.dev/docs/api/liquid)
- [Liquid cheat sheet](https://www.shopify.ca/partners/shopify-cheat-sheet)
- [Liquid code examples](https://shopify.github.io/liquid-code-examples/)

## Quick commands

```bash
shopify theme init disuri-theme          # Clone Skeleton
shopify theme dev                        # Local preview + hot reload
shopify theme check                      # Lint theme
shopify theme push --unpublished         # Upload without publishing
shopify theme publish --theme ID         # Go live
shopify theme list                       # List store themes
```

## Theme folder structure (Skeleton / OS 2.0)

```
theme/
├── assets/          # CSS, JS, images, fonts
├── blocks/          # Theme blocks (reusable in sections)
├── config/          # settings_schema.json, settings_data.json
├── layout/          # theme.liquid, password.liquid
├── locales/         # Translation JSON files
├── sections/        # Sections + section groups
├── snippets/        # Reusable Liquid partials
└── templates/       # JSON templates (OS 2.0)
```

Source: [Theme architecture](https://shopify.dev/docs/storefronts/themes/architecture)
