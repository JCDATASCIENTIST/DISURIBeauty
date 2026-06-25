# Design Kit — Claude Design Import

Source: [Claude Design project](https://claude.ai/design/p/019e2c58-29c3-7425-8381-28b935607a9b?file=ui_kits%2Fshopify%2Findex.html)

Imported from `DISURI Beauty Design System` (Downloads) into `claude-design/`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | React prototype: Home, Collection, PDP, Cart |
| `shopify.css` | Storefront component styles (implemented as `assets/disuri-shopify.css`) |
| `colors_and_type.css` | Brand tokens (mapped to `config/settings_schema.json`) |
| `catalog.js` | Product catalog, promo ladder, hero headlines |
| `Screens.jsx` | Screen compositions reference |
| `Nav.jsx` | Header/footer reference |

## Theme mapping

| Design kit | Shopify theme |
|------------|---------------|
| `Nav.jsx` | `sections/header.liquid` |
| `HomeScreen` hero | `sections/hero.liquid` |
| `GiftLadderStrip` | `sections/gift-strip.liquid` |
| `KitProductCard` | `snippets/disuri-product-card.liquid` |
| Science strip | `sections/science-strip.liquid` |
| Bundles (noir) | `sections/featured-bundles.liquid` |
| `PDPScreen` | `sections/product.liquid` |
| `CartScreen` | `sections/cart.liquid` |
| `Footer` | `sections/footer.liquid` |

## Note on MCP

The `claude_design` MCP was not available in Cursor for this session. Design files were imported from the local `DISURI Beauty Design System` folder (same project ID). To re-sync from Claude Design, use `/design-login` in Claude Code or export the handoff bundle from claude.ai/design.
