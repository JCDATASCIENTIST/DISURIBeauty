# DISURI Beauty — Theme Rebuild Implementation Guide

Step-by-step playbook for rebuilding the DISURI Beauty Shopify storefront from Skeleton, using the brand design kit.

## Prerequisites

| Tool | Status | Install |
|------|--------|---------|
| Node.js 20+ | Installed | — |
| Shopify CLI | Required | `npm i -g @shopify/cli@latest` |
| Git + GitHub | Installed | — |
| Partner account | Required | [partners.shopify.com](https://partners.shopify.com) |

## Phase 0 — Design kit (complete)

- Design tokens: [design-tokens.md](./design-tokens.md)
- Brand source: [../brand-voice-guidelines.md](../brand-voice-guidelines.md)
- Shopify reference KB: [./shopify-kb/README.md](./shopify-kb/README.md)

Drop Figma exports or webfont files into `../design-kit/` when available.

## Strategy (revised)

**Use the existing live store** (`7874da-0f.myshopify.com`) — push the new theme as **unpublished**. No dev store transfer required.

See [PRD.md](./PRD.md) for acceptance criteria.

## Phase 1 — Store connection (complete)

Shopify CLI is authenticated to `7874da-0f.myshopify.com`. Dev store is optional only.

```bash
npx @shopify/cli@latest theme list --store 7874da-0f.myshopify.com
```

## Phase 2 — Theme scaffold (complete)

Theme repo location:

```
/Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme
```

Initialized from [Shopify Skeleton theme](https://github.com/Shopify/skeleton-theme).

```bash
cd /Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme
git remote remove origin   # optional: point to your own GitHub repo
git remote add origin git@github.com:YOUR_ORG/DISURI-Beauty-Theme.git
```

## Phase 3 — Design tokens in theme

Mapped in:

- `config/settings_schema.json` — merchant-editable colors and fonts
- `snippets/css-variables.liquid` — CSS custom properties
- `assets/disuri-base.css` — component styles
- `config/settings_data.json` — DISURI defaults (Porcelain bg, Crimson accent)

## Phase 4 — Sections built

| Section | File | Homepage |
|---------|------|----------|
| Announcement bar | `sections/announcement-bar.liquid` | Yes |
| Header | `sections/header.liquid` | Group |
| Hero | `sections/hero.liquid` | Yes |
| Featured collection | `sections/featured-collection.liquid` | Yes |
| Queens CTA | `sections/queens-cta.liquid` | Yes |
| Testimonials | `sections/testimonials.liquid` | Yes |
| Newsletter | `sections/newsletter.liquid` | Yes |
| Footer | `sections/footer.liquid` | Group |
| Product | `sections/product.liquid` | PDP |

Snippets: `product-card.liquid`, `button.liquid`

Blocks: `blocks/ingredient-callout.liquid`

## Phase 5 — QA & sign-off (current SDLC step)

See [QA-CHECKLIST.md](./QA-CHECKLIST.md) for manual + automated verification.

```bash
cd /Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme
npx @shopify/cli@4.2.0 theme check
bash scripts/smoke-test.sh https://disuribeauty.com
```

**Exit criteria:** smoke tests pass, Spanish locale walkthrough, stakeholder sign-off, checkout test.

**After sign-off:** tag `v1.0.0-commerce-stable`, run [app-uninstall-walkthrough.md](./app-uninstall-walkthrough.md).

## Phase 5 — Local development & QA (legacy)

```bash
cd /Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme

# Dev store preview (recommended first)
shopify theme dev --store disuri-dev.myshopify.com

# Or live store development theme
shopify theme dev --store YOUR-STORE.myshopify.com

# Lint
shopify theme check
```

Preview checklist:

## Phase 5 — QA in dev store

- [x] `shopify theme check` — 52 files, zero offenses (2026-06-24)
- [x] Homepage template wired with live collections (`skincare`, `bundles`, `new-bestsellers`)
- [x] Templates present: `index`, `product`, `collection`, `cart`, `404`, `search`, `password`
- [x] EN + ES locale files present
- [ ] Visual QA in theme preview (requires admin login): home, collection, PDP, cart, mobile breakpoints

Preview: https://7874da-0f.myshopify.com?preview_theme_id=161833353455

## Phase 6 — Go live

**Theme uploaded unpublished (2026-06-24). Live theme unchanged.**

| | |
|---|---|
| Theme | DISURI Beauty Theme v1 |
| ID | `161833353455` |
| Preview | https://7874da-0f.myshopify.com?preview_theme_id=161833353455 |
| Editor | https://7874da-0f.myshopify.com/admin/themes/161833353455/editor |

Re-push after changes: `./scripts/push-unpublished.sh` (updates theme `161833353455` in place — do **not** use `--unpublished`, which creates duplicates)

**Publish only after preview approval:**

```bash
npx @shopify/cli@latest theme publish --theme 161833353455 --store 7874da-0f.myshopify.com
```

Keep the previous live theme (`DISURI BEAUTY`) as rollback.

## Phase 7 — Remove apps & clean up

See [app-removal-checklist.md](./app-removal-checklist.md).

Because this theme is built fresh from Skeleton, legacy app Liquid snippets do not carry over. Still audit:

1. Settings → Apps and sales channels → uninstall unused apps
2. Online Store → Themes → old themes → delete after 30-day rollback window
3. Settings → Notifications → verify no broken app references
4. Check **Settings → Custom data** for orphaned metafield definitions

## File map

```
DISURI-Beauty-Theme/
├── assets/
│   ├── critical.css
│   └── disuri-base.css          # DISURI component styles
├── blocks/
│   └── ingredient-callout.liquid
├── config/
│   ├── settings_schema.json     # DISURI color/font settings
│   └── settings_data.json       # Default token values
├── layout/theme.liquid
├── locales/
│   ├── en.default.json
│   └── es.json
├── sections/
│   ├── announcement-bar.liquid
│   ├── hero.liquid
│   ├── featured-collection.liquid
│   ├── queens-cta.liquid
│   ├── testimonials.liquid
│   └── newsletter.liquid
├── snippets/
│   ├── css-variables.liquid
│   ├── product-card.liquid
│   └── button.liquid
└── templates/index.json
```

## References

- [Build Shopify themes](https://shopify.dev/docs/storefronts/themes)
- [Create a theme (Skeleton)](https://shopify.dev/docs/storefronts/themes/getting-started/create)
- [Shopify CLI for themes](https://shopify.dev/docs/storefronts/themes/tools/cli)
- [Online Store 2.0](https://shopify.dev/docs/storefronts/themes/os20)
