# Zipify OCU #1 — Complete System Build Sheet

**Owner:** Claude Code (Zipify admin + Klaviyo tag hook)  
**Companion:** [gift-funnel-vision.md](gift-funnel-vision.md), [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md)  
**Store:** `7874da-0f.myshopify.com` · App: **Zipify OCU** (`ocu-in-checkout-1008`)

---

## Offer summary

| Field | Value |
|-------|-------|
| **Product** | [The Complete DISURI System](https://disuribeauty.com/products/the-complete-disuri-system) |
| **Handle** | `the-complete-disuri-system` |
| **Price** | $101.97 (save $18 vs $119.97 retail) |
| **Position** | Post-purchase OCU #1 (after first qualifying $25+ GWP order) |
| **Accept tag** | `system-buyer` |
| **Decline** | Continue to OCU #2 slot (subscription placeholder until ReCharge) |

---

## Pre-flight checklist

- [ ] **Theme Editor → App embeds:** Zipify OCU enabled ([checkout-ux-rollout.md](checkout-ux-rollout.md))
- [ ] **Order Value Booster:** Disable false free-shipping messaging on PDPs (admin, not theme)
- [ ] **Klaviyo flow** `first-order-25-plus` live or Shopify Flow tag `skincare-25-plus` active
- [ ] Confirm post-purchase upsell (not cart-drawer only) is enabled in Zipify

---

## A. Zipify offer configuration

**Path:** Zipify OCU app → **Post-purchase upsells** → **Create offer**

### A1. Trigger rules

| Rule | Value |
|------|-------|
| Show after | **Order placed** (post-purchase page) |
| Customer | First-time buyer OR order has tag `skincare-25-plus` OR customer has tag `first-order-25-plus` |
| Minimum order | Skincare subtotal ≥ $25 (match GWP) |
| Discount on front-end | Order must include BXGY gift discount (optional strict mode) |

### A2. Exclusion rules

| Exclusion | Reason |
|-----------|--------|
| Line item handle `the-complete-disuri-system` | Already purchased in cart |
| Customer tag `system-buyer` | Already accepted OCU |
| Product in cart at checkout | System bundle already owned |

### A3. Product & pricing

| Setting | Value |
|---------|-------|
| Upsell product | The Complete DISURI System |
| Offer type | **One-click upsell** (no re-enter payment) |
| Discount | None required (bundle price already reflects $18 savings) |
| Quantity | 1 |

---

## B. Copy — paste into Zipify fields

**Tone:** Warm authority. No em dashes. No countdown. Appearance-only claims.

### Headline

```
You unlocked this week's gloss. Complete the full 3-step ritual.
```

### Subhead

```
Repair · Hydrate · Firm. Three Korean creams designed to layer, not compete. Save $18 vs buying each step separately.
```

### Body bullets

```
• Step 1 (Copper): Ultimate Snail Mucin Cream · 1,000 ppm snail filtrate for barrier resilience
• Step 2 (Midnight): HA + 2% Niacinamide Cream · triple-weight hydration that lasts
• Step 3 (Crimson): Triple Collagen Firming Cream · 3,500 ppm Triple Collagen Complex
• Made in Korea · Ships from Miami in 1–2 business days
• 30-day money-back guarantee
```

### Primary CTA

```
Yes, complete my ritual →
```

### Decline link

```
No thanks, continue to order confirmation
```

### Compliance line (footer)

```
Helps improve the appearance of firmness, hydration, and barrier resilience with continued use. Cosmetic products, not treatments for medical conditions.
```

**Source:** [`catalog.js`](../design-kit/claude-design/catalog.js) bundle `complete-system` (lines 237–277).

---

## C. Visual assets

| Asset | URL / source |
|-------|----------------|
| Hero image | Product featured image from Shopify CDN |
| Alt text | `The Complete DISURI System · 3-step Korean skincare routine` |
| Colors | Background `#F4F2EE`, accent `#B82024`, text `#2A2A2A` (match Claude Design) |

---

## D. Klaviyo integration on accept

When customer accepts OCU:

| Method | Action |
|--------|--------|
| Zipify → Klaviyo integration (if available) | Map accept event → tag `system-buyer` |
| **Fallback:** Klaviyo flow | Trigger: **Placed Order** where order contains `the-complete-disuri-system` AND previous order had `first-order-25-plus` within 10 minutes → tag `system-buyer` |
| Optional email | Branch in Welcome series: "Your ritual is complete" (defer until copy review) |

---

## E. OCU stack order (Zipify funnel)

```
Order confirmed
  → OCU #1 Complete System (this doc)
  → OCU #2 Subscription (placeholder — ReCharge deferred)
  → OCU #3 Queens → /pages/cj-affiliate (Phase 4)
```

Configure **decline path** on OCU #1 to advance to next offer, not hard-stop checkout confirmation.

---

## F. QA script

| Step | Action | Expected |
|------|--------|----------|
| 1 | Add skincare $27+ to cart, complete checkout with test payment | Order succeeds |
| 2 | Post-purchase page loads | OCU #1 shows Complete System |
| 3 | Accept upsell | Second charge succeeds; order updated |
| 4 | Klaviyo profile | Tag `system-buyer` within 5 min |
| 5 | Repeat with system already in cart | OCU #1 **hidden** |
| 6 | Decline upsell | Lands on order confirmation; no error |

**Verify:** Hard refresh not required for OCU (Shopify post-purchase). Document test order IDs in admin notes.

---

## G. Metrics to track

| Metric | Tool |
|--------|------|
| OCU impression rate | Zipify analytics |
| OCU accept rate | Zipify analytics |
| Revenue per qualifying order | Shopify + Zipify |
| `system-buyer` / `first-order-25-plus` ratio | Klaviyo segments |

**Target benchmark:** Track baseline first week; optimize copy in Week 2 if accept rate &lt; 10%.

---

## Handoff to Joel

1. Publish offer in Zipify after QA.
2. Confirm OCU #1 live with one real test order (refund after).
3. Weekly: report accept rate alongside `first-order-25-plus` count.
