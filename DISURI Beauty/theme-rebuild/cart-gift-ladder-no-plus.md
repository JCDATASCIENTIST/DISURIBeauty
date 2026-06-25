# Cart Gift Ladder + Trust — No-Plus Build

**Store:** disuribeauty.com · **Theme:** `#161833353455` · **Plan:** Shopify (not Plus)

## Why this exists

The original [checkout-ux-rollout.md](./checkout-ux-rollout.md) put the gift-ladder +
trust banners in **Phase B**, a Shopify **checkout UI extension**
(`../disuri-checkout-app/`). Editing the checkout step with app blocks requires
**Shopify Plus** (~$2,300/mo). This store is on the **Shopify** plan, so that block
will never appear in the checkout editor.

This doc ports the valuable parts of Phase B **down into the theme (Phase A)**, where
they work on any plan — for **$0/mo**. It is arguably better placement: the spend
ladder belongs in the **cart**, where the customer can still add items, not at
checkout where it's too late.

**What stays as-is:** `disuri-thank-you` app block — Thank-you/Order-status
extensions are available on **all plans**, so that one still works for free.

## Scope

| Piece | Source (Plus block) | New home (theme) | Plan |
|-------|--------------------|------------------|------|
| Gift/spend ladder progress bar | `Checkout.jsx` `giftLadderMessage()` | Cart drawer + cart page | Any ✅ |
| Trust badges (secure / Made in Korea / ships Miami) | `Checkout.jsx` banners | Cart drawer + cart page | Any ✅ |
| Shipping / Returns / Contact links | `Footer.jsx` | Store footer (already present) | Any ✅ |
| Ritual thank-you banner | `disuri-thank-you` app | **Keep the app block** | Any ✅ |

## Ladder logic (ported verbatim from `Checkout.jsx`)

Thresholds drive both the message and the bar. Amounts in store currency (USD).

| Subtotal | Message (next tier) | Bar target |
|----------|--------------------|------------|
| `< $25` | "Add {amount} to unlock free shipping." | $25 |
| `$25–$49.99` | "Add {amount} to unlock 2 free products." | $50 |
| `$50–$99.99` | "Add {amount} to unlock up to $400 in gifts." | $100 |
| `>= $100` | "You've unlocked every gift. Enjoy." | complete |

Single progress bar filling **0 → $100**, with tier markers at **$25 / $50 / $100**.
`amount = nextThreshold - subtotal`, formatted with the shop's money filter.

> ⚠️ **Business dependency — confirm before building.** These are real promises. The
> theme only *displays* them; Shopify must actually *honor* them:
> - **Free shipping at $25** → set in Settings → Shipping (free rate w/ $25 minimum).
> - **2 free products at $50** and **gifts at $100** → require automatic discounts or
>   a gift-with-purchase mechanism. If those aren't configured, either configure them
>   or revise the copy. **Do not advertise unlocks the store won't deliver.**

## Files to add

```
snippets/gift-ladder.liquid     # markup: bar + markers + trust badges (server render from cart)
assets/gift-ladder.js           # live update on cart change (AJAX)
assets/gift-ladder.css          # styles using design tokens (or inline in snippet)
```

Plus edits to:
- **Cart drawer** template/section (Dawn: `snippets/cart-drawer.liquid`) — include snippet.
- **Cart page** section (Dawn: `sections/main-cart-items.liquid` or `cart-footer`) — include snippet.
- `locales/en.default.json` + `locales/es.json` — add ladder/trust strings.

## Rendering approach

**Initial (server):** snippet reads `cart.total_price` (cents) and renders the correct
tier + bar width inline, so it's correct on first paint with no flash.

**Live updates (client):** the cart drawer changes subtotal without a full reload.
`gift-ladder.js` recomputes on cart change. Per
[shopify-kb/11-ajax-apis.md](./shopify-kb/11-ajax-apis.md):
- Subscribe to the theme's existing cart-update signal (Dawn dispatches a
  `PUB_SUB_EVENTS.cartUpdate` / `cart:refresh` event), **or** re-`fetch('/cart.js')`
  after add/qty changes, and re-render the bar + message from `cart.total_price`.
- Thresholds + copy passed in via `data-` attributes on the snippet root so the JS has
  no hardcoded values (keeps it editor-driven — see schema below).

## Editor settings (schema)

Expose on the cart section so thresholds/copy are editable without code:

| Setting | Type | Default |
|---------|------|---------|
| `tier1_threshold` | number | 25 |
| `tier2_threshold` | number | 50 |
| `tier3_threshold` | number | 100 |
| `show_trust_badges` | checkbox | true |
| `gift_title` | text | "Free gift included in every order" |

(Messages themselves come from locale files for EN/ES, not section settings.)

## Locale strings (EN / ES)

Reuse the keys already in `disuri-checkout-app` so copy stays consistent:

```jsonc
// en.default.json
"gift_included": "Free gift included in every order",
"ladder_25": "Add {{ amount }} to unlock free shipping.",
"ladder_50": "Add {{ amount }} to unlock 2 free products.",
"ladder_100": "Add {{ amount }} to unlock up to $400 in gifts.",
"ladder_complete": "You've unlocked every gift. Enjoy.",
"trust_shipping": "Made in Korea · Ships from Miami in 1–2 business days.",
"secure_checkout": "Secure checkout · SSL encrypted · All major cards accepted"
```
ES equivalents already drafted in
`../disuri-checkout-app/extensions/disuri-checkout-trust/locales/es.json` — port them.

## Styling (design tokens)

From [design-tokens.md](./design-tokens.md):
- Bar fill: **Power Crimson** `--color-crimson #b82024`; track: `--color-porcelain #f4f2ee`.
- "Unlocked/complete" state: **Hydration Blue** `--color-hydration-blue #1f3f5c`.
- Text: `--color-charcoal #2a2a2a`; radius `--radius-md 4px`; padding `--space-4`.
- Trust badges: small body text (`--text-sm`), lock/flag icons in `--color-copper`.

## Workflow (safe — never touches live until you approve)

```bash
# 1. Pull the live theme into a local working copy
cd "DISURI Beauty/theme-rebuild"
shopify theme pull --theme 161833353455 --path ./live-theme

# 2. Add snippet/asset/locale edits in ./live-theme

# 3. Push to a NEW unpublished theme (does NOT change the live store)
shopify theme push --unpublished --theme-name "DISURI — gift ladder (preview)" --path ./live-theme

# 4. Preview URL is printed — review cart drawer + /cart in EN and ES

# 5. Only after approval: publish via admin Themes, or `shopify theme push --theme <live id>`
```

## QA checklist

- [ ] Cart empty → ladder hidden (or "add items" state)
- [ ] Subtotal $10 → bar ~40%, "Add $15.00 to unlock free shipping."
- [ ] Subtotal $30 → "Add $20.00 to unlock 2 free products."
- [ ] Subtotal $70 → "Add $30.00 to unlock up to $400 in gifts."
- [ ] Subtotal $120 → "You've unlocked every gift. Enjoy." + complete bar
- [ ] Add item in drawer → bar + message update live (no reload)
- [ ] `/cart` page shows same component
- [ ] ES locale renders Spanish strings
- [ ] Mobile: bar + badges legible, no overflow
- [ ] Free-shipping / gift thresholds match real Settings → Shipping & Discounts config
- [ ] Lighthouse: no layout shift from the bar on load

## Decisions still open

1. **Bar style:** single 0→$100 bar with 3 markers (recommended) vs. per-tier bar that
   resets each tier. Recommend single bar — clearer "up to $400 in gifts" goal.
2. **Trust badges placement:** inside the drawer near checkout button vs. under the
   subtotal. Recommend under subtotal so it's visible before scrolling to checkout.
3. **Are tier 2/3 unlocks (free products / $400 gifts) actually configured** in
   discounts? If not, decide: configure them, or soften copy to what's real.
