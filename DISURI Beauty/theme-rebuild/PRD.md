# PRD — DISURI Beauty Theme Rebuild

**Status:** Published live (2026-06-24)  
**Store:** `7874da-0f.myshopify.com` (DISURI BEAUTY)  
**Strategy:** Existing store, new theme published; old Dawn theme kept as rollback

## Problem

The live storefront runs on a heavily customized Dawn theme with GemPages, Zipify, and legacy app embeds. Merchants cannot easily maintain the site, and the brand design system (Claude Design Shopify UI kit) is not reflected on the storefront.

## Goal

Launch a clean, brand-native Shopify OS 2.0 theme built from Skeleton + Claude Design kit, replacing page-builder dependency while keeping store-level configuration (products, payments, shipping, email).

## Non-goals

- New Shopify store or store transfer
- Hydrogen / headless storefront (separate branch exists; out of scope)
- Rebuilding GemPages homepage in the new theme
- Publishing without stakeholder preview approval

## Users

| User | Need |
|------|------|
| End consumer | Ingredient-transparent K-beauty shopping, EN/ES |
| Queen / partner | Clear path to partner program (secondary CTA) |
| Founder / ops | Editable sections in theme editor, no page-builder lock-in |

## Design source

- Claude Design: `ui_kits/shopify/index.html` (project `019e2c58-29c3-7425-8381-28b935607a9b`)
- Local kit: `design-kit/claude-design/`
- Brand tokens: `design-tokens.md`, `brand-voice-guidelines.md`

## Theme repo

`/Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme`

## Homepage sections (v1)

1. Hero — editorial, ppm-forward headline
2. Gift strip — free gift + spend ladder
3. Featured collection — 3-up product grid
4. Science strip — 3 ppm stats (Snail, Collagen, HA)
5. Featured bundles — noir background collection
6. Featured collection — rest of ritual (4 products)

## Core templates

| Template | Section |
|----------|---------|
| `index.json` | Homepage composition |
| `product.json` | PDP with ingredient callout |
| `collection.json` | Filter-ready grid |
| `cart.json` | Editorial cart layout |

## Acceptance criteria

- [x] Theme passes `shopify theme check` (zero errors)
- [x] Pushed to live store as **unpublished** theme named `DISURI Beauty Theme v1` (ID: `161833353455`)
- [x] Homepage collections wired: `skincare`, `bundles`, `new-bestsellers`
- [x] Hero CTAs linked to skincare collection + flagship PDP
- [x] Translation bugs fixed (hero eyebrow, collection eyebrows, gift strip)
- [x] Mobile responsive CSS added (768px / 480px breakpoints)
- [x] **Published live** — `DISURI Beauty Theme v1` (ID `161833353455`)
- [ ] Spanish locale tested (`?locale=es`)
- [x] EN + ES locale files present
- [x] Live theme (`DISURI BEAUTY`) unchanged until explicit publish
- [x] App removal checklist documented for post-publish cleanup

## Preview links (2026-06-24)

| Link | URL |
|------|-----|
| Storefront preview | https://7874da-0f.myshopify.com?preview_theme_id=161833353455 |
| Theme editor | https://7874da-0f.myshopify.com/admin/themes/161833353455/editor |

## Rollout

```mermaid
flowchart LR
  dev[theme dev locally] --> push[theme push --unpublished]
  push --> preview[Admin preview]
  preview --> approve[Stakeholder sign-off]
  approve --> publish[theme publish]
  publish --> apps[Uninstall legacy apps]
```

## Risks

| Risk | Mitigation |
|------|------------|
| Accidental publish | Always use `--unpublished`; keep old theme for rollback |
| Empty collection sections | Assign collections in theme editor after push |
| App checkout breakage | Test checkout in preview before publish |
| Bilingual incomplete | Phase 2: wire locale switcher to Shopify Markets |

## References

- [Create a theme](https://shopify.dev/docs/storefronts/themes/getting-started/create)
- [Customize a merchant theme](https://shopify.dev/docs/storefronts/themes/getting-started/customize)
- [theme push](https://shopify.dev/docs/api/shopify-cli/theme/theme-push)
- Implementation: [IMPLEMENTATION.md](./IMPLEMENTATION.md)
