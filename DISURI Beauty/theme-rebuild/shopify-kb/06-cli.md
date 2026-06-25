# Shopify CLI for Themes

Source: https://shopify.dev/docs/storefronts/themes/tools/cli

## Install

```bash
npm i -g @shopify/cli@latest
shopify version
```

## Core commands

| Command | Purpose |
|---------|---------|
| `shopify theme init [name]` | Clone Skeleton theme |
| `shopify theme dev` | Upload dev theme, hot-reload preview URL |
| `shopify theme check` | Run Theme Check linter |
| `shopify theme push` | Upload local files to store |
| `shopify theme push --unpublished` | Upload as new unpublished theme |
| `shopify theme publish --theme ID` | Set theme live |
| `shopify theme pull` | Download remote theme |
| `shopify theme list` | List themes on connected store |
| `shopify theme open` | Open theme in admin or storefront |

## Development workflow

```bash
cd DISURI-Beauty-Theme
shopify theme dev --store disuri-dev.myshopify.com
```

- Opens preview URL (Chrome recommended for hot reload)
- CSS and section changes hot-reload
- Dev theme destroyed on `shopify auth logout`

## Environments

Use `shopify.theme.toml` for multiple store targets:

```toml
[environments.development]
store = "disuri-dev.myshopify.com"

[environments.production]
store = "disuri-beauty.myshopify.com"
```

Run: `shopify theme dev --environment development`

## CI/CD

For automated deploys use Theme Access app + env vars:

- `SHOPIFY_CLI_THEME_TOKEN`
- `SHOPIFY_FLAG_STORE`
- `SHOPIFY_FLAG_FORCE=1`

Reference: https://shopify.dev/docs/storefronts/themes/tools/cli/ci-cd
