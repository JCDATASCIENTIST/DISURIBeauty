# Zipify OCU #1 — Complete System Build Sheet (Funnel C)

**Owner:** Claude Code (Zipify admin + Klaviyo tag hook)  
**Companion:** [gift-funnel-vision.md](gift-funnel-vision.md), [zipify-ocu-admin-walkthrough.md](zipify-ocu-admin-walkthrough.md), [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md)  
**Store:** `7874da-0f.myshopify.com` · App: **Zipify OCU** (`ocu-in-checkout-1008`)

**Placement:** Post-purchase only (Funnel C catch-all). **In Checkout OFF.**

---

## Offer summary

| Field | Value |
|-------|-------|
| **Product** | [The Complete DISURI System](https://disuribeauty.com/products/the-complete-disuri-system) |
| **Handle** | `the-complete-disuri-system` |
| **Price** | $101.97 (save $18 vs $119.97 retail) |
| **Position** | Post-purchase OCU #1 — Catch-all funnel (Priority 3) |
| **Accept tag** | `system-buyer` |
| **Decline** | Downsell → Barrier Rescue at 10% off |

---

## Pre-flight checklist

- [ ] **In Checkout funnels:** All paused (see [zipify-ocu-admin-walkthrough.md](zipify-ocu-admin-walkthrough.md))
- [ ] **Theme app embed (global):** DISABLED
- [ ] **Theme cart-drawer embed:** ENABLED
- [ ] **Klaviyo flow** `first-order-25-plus` live
- [ ] Post-purchase upsell enabled in Shopify checkout settings

---

## A. Zipify offer configuration

**Path:** Zipify OCU app → **Post-purchase upsells** → Funnel C (Catch-all)

### A1. Trigger rules

| Rule | Value |
|------|-------|
| Show after | **Order placed** (post-purchase page) |
| Collection | Skincare |
| Minimum order | Skincare subtotal **$25 – $60** |
| Customer | First-time buyer OR tag `first-order-25-plus` |
| Funnel priority | **3** (lowest — Barrier and Firming funnels win first) |

### A2. Exclusion rules

| Exclusion | Reason |
|-----------|--------|
| Line item handle `the-complete-disuri-system` | Already purchased |
| Any bundle handle in order | Already owns bundle |
| Any lip/gloss product | GWP only — never upsell lip |
| Customer tag `system-buyer` | Already accepted OCU |
| Skincare subtotal &gt; $60 | Route to Firming/Barrier funnels instead |

### A3. Product & pricing

| Setting | Value |
|---------|-------|
| Upsell 1 product | The Complete DISURI System |
| Upsell 2 product | `triple-collagen-firming-toner` or `triple-collagen-firming-essence` |
| Downsell product | `the-barrier-rescue-system` at **10% off** (~$60.73) |
| Offer type | **One-click upsell** (no re-enter payment) |
| Upsell 1 discount | None (bundle price reflects $18 savings) |

---

## B. Copy — paste into Zipify fields

**Tone:** Warm authority. No em dashes. No countdown. **No gloss/lip references** (gloss is GWP only).

### Upsell 1 — Headline

```
You started the ritual. Complete all three steps and save $18.
```

### Upsell 1 — Subhead

```
Repair · Hydrate · Firm. Three Korean creams designed to layer, not compete. Save $18 vs buying each step separately.
```

### Upsell 1 — Body bullets

```
• Step 1 (Copper): Ultimate Snail Mucin Cream · 1,000 ppm snail filtrate for barrier resilience
• Step 2 (Midnight): HA + 2% Niacinamide Cream · triple-weight hydration that lasts
• Step 3 (Crimson): Triple Collagen Firming Cream · 3,500 ppm Triple Collagen Complex
• Made in Korea · Ships from Miami in 1–2 business days
• 30-day money-back guarantee
```

### Upsell 1 — Primary CTA

```
Yes, complete my ritual →
```

### Upsell 2 — Headline

```
Add the prep step your cream is missing.
```

### Upsell 2 — Primary CTA

```
Add toner to my order →
```

### Downsell — Headline

```
Try the Barrier Rescue System at 10% off.
```

### Downsell — Subhead

```
Repair + hydrate in two steps. One-time offer for new ritual starters.
```

### Decline link (all offers)

```
No thanks, continue to order confirmation
```

### Compliance line (footer)

```
Helps improve the appearance of firmness, hydration, and barrier resilience with continued use. Cosmetic products, not treatments for medical conditions.
```

**Source:** [`catalog.js`](../design-kit/claude-design/catalog.js) bundle `complete-system`.

---

## C. Visual assets

| Asset | URL / source |
|-------|----------------|
| Hero image | Product featured image from Shopify CDN |
| Alt text | `The Complete DISURI System · 3-step Korean skincare routine` |
| Colors | Background `#F4F2EE`, accent `#B82024`, text `#2A2A2A` (match Claude Design) |

---

## D. Klaviyo integration on accept

See [zipify-ocu-klaviyo-tags-playbook.md](zipify-ocu-klaviyo-tags-playbook.md).

| Accept | Tag |
|--------|-----|
| Upsell 1 Complete System | `system-buyer` |
| Downsell Barrier Rescue | `barrier-buyer` |

---

## E. OCU stack order (full funnel)

```
Order confirmed
  → Funnel A/B/C post-purchase (priority resolves which)
  → OCU #2 Subscription (placeholder — ReCharge deferred)
  → OCU #3 Queens → /pages/cj-affiliate (Phase 4)
```

---

## F. QA script

| Step | Action | Expected |
|------|--------|----------|
| 1 | Add skincare $27–$55 to cart, complete checkout | Order succeeds; no checkout overlay |
| 2 | Post-purchase page loads | Funnel C shows Complete System |
| 3 | Accept upsell 1 | Second charge; Upsell 2 (toner) appears |
| 4 | Decline upsell 1 | Downsell Barrier Rescue at 10% off |
| 5 | Klaviyo profile | Tag `system-buyer` or `barrier-buyer` within 5 min |
| 6 | Repeat with system in cart | Funnel C **hidden** |

Run: `node scripts/zipify-ocu-qa-checklist.mjs`

---

## G. Metrics to track

See [zipify-ocu-baseline-metrics.md](zipify-ocu-baseline-metrics.md).

| Metric | Tool |
|--------|------|
| OCU impression rate | Zipify analytics |
| OCU accept rate | Zipify analytics |
| RPV | Zipify analytics |
| Tag conversion | Klaviyo segments |

**Target benchmark:** Track baseline Week 1; optimize copy Week 2 if accept rate &lt; 10%.
