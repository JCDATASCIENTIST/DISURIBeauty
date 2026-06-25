# Hybrid Migration — Old Dawn Theme → DISURI Beauty Theme v1

**Strategy A (approved):** Keep v1 as foundation; port commerce behavior from `DISURI BEAUTY - ORGINAL COPY` (#146685460719).

## Feature audit

| Capability | Old Dawn theme | v1 before Phase 1 | v1 after Phase 1 |
|------------|----------------|---------------------|------------------|
| Cart drawer | Dawn `<cart-drawer>` + sections API | Custom `disuri-cart.js` | Pub/sub events + single-request section refresh |
| Ajax add to cart | `product-form.js` | PDP form intercept | PDP + quick-add + `DisuriCart.addItem()` |
| Quick add (collection) | Dawn modal + fetch PDP | Link to PDP only | One-click add for single-variant SKUs |
| Subscriptions (ReCharge) | Zipify/ReCharge snippets | Not wired | `@app` block slot in buy box |
| Upsells (Zipify OCU) | Layout footer scripts | Not in theme | Re-enable via Theme Editor app embed |
| Search / filters | Searchanise + Dawn facets | Curated JS filters | Curated filters (Phase 1) |
| Reviews (Loox) | App embed | Not enabled | Enable in Theme Editor |
| BNPL (Affirm) | App embed | Not enabled | Enable in Theme Editor |
| Product recommendations | Dawn section | None | `product-recommendations` on PDP |
| GemPages / Zipify PDPs | Many templates | Removed (intentional) | Do not port |
| Tracking (VWO, StackAdapt) | Hard-coded in `theme.liquid` | Clean header | Keep in GTM/Stape, not theme |

## Phase 1 shipped in code

- `assets/disuri-pubsub.js` — Dawn-compatible `cart-update` / `cart-error` events
- `assets/disuri-cart.js` — `window.DisuriCart`, section rendering on add, pub/sub publish
- `snippets/disuri-product-card.liquid` — quick-add button (single-variant, in-stock)
- `sections/product.liquid` — `@app` blocks rendered above Add to Bag (ReCharge, Affirm, etc.)
- `sections/product-recommendations.liquid` + `templates/product.json`

## Admin steps — re-enable app embeds

1. Open [Theme editor](https://7874da-0f.myshopify.com/admin/themes/161833353455/editor)
2. **Theme settings → App embeds** (or wrench icon → App embeds)
3. Turn on embeds you still pay for:

| App | Embed | Where it shows |
|-----|-------|----------------|
| **ReCharge** | Subscription widget | PDP buy box (also add block on Product section) |
| **Loox** | Reviews / star rating | PDP + collection (optional) |
| **Affirm** | Pay-over-time messaging | PDP price area |
| **Zipify OCU** | Cart / checkout upsell | Cart drawer + checkout |
| **Klaviyo** | Sign-up / back in stock | Footer / PDP |
| **Searchanise** | Search (optional) | Header — or keep native predictive search |

4. On any **Product** template page in the editor → **Add block** → choose **ReCharge** (or other app) → drag above/below buy button if needed.

## Phase 2 (in progress)

- [x] Cart page ajax qty updates (match drawer)
- [x] Localized collection filter chips (EN/ES)
- [x] PDP quantity selector
- [x] Compare-at pricing on cards + PDP
- [x] Cart drawer continue shopping link
- [x] Loox star slots on product cards (off until theme setting enabled — launch end of Q3)
- [x] Spanish catalog eyebrows + compliance footnotes
- [x] PDP variant price updates + sold out state
- [x] Product card sold out / choose options states
- [x] Product recommendations async load (Section Rendering API)
- [x] Cart error toast (aria-live)
- [x] Automated smoke test script (`scripts/smoke-test.sh`)
- [ ] Loox PDP widget visible when setting enabled (embed already in theme editor — launch end of Q3)
- [ ] Subscription price display on collection cards (ReCharge — when enabled)
- Optional: port Dawn pickup availability if needed

## Do not port

- GemPages sections (`gp-section-*`, `product.gem-*`)
- Zipify page-builder templates (`product.zipifypages-*`)
- Searchanise + Dawn facets together (pick one search stack)
- VWO / ad pixels in Liquid (use Stape/GTM)

## Rollback

Publish **DISURI BEAUTY - ORGINAL COPY** (#146685460719) from Admin → Themes if needed.
