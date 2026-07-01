# Zipify OCU Admin Walkthrough — Skincare-Only AOV Relaunch

**Store:** `7874da-0f.myshopify.com` (disuribeauty.com)  
**App:** Zipify OCU (`one-click-upsell` / `ocu-in-checkout-1008`)  
**Status:** Relaunch 2026-07-01 — post-purchase + cart drawer only; **In Checkout OFF**

**Companion docs:**
- [zipify-ocu-complete-system-playbook.md](zipify-ocu-complete-system-playbook.md) — Funnel C copy
- [zipify-ocu-klaviyo-tags-playbook.md](zipify-ocu-klaviyo-tags-playbook.md) — Accept tags
- [zipify-ocu-baseline-metrics.md](zipify-ocu-baseline-metrics.md) — Week 1 tracking
- [gift-funnel-vision.md](gift-funnel-vision.md) — Full funnel context

---

## Step 0 — Emergency: disable In Checkout (do first)

Checkout was blocked by Zipify **In Checkout** overlay (`_su_rec` URL param, purple gloss popup).

| Step | Action |
|------|--------|
| 1 | Shopify Admin → **Apps** → **Zipify OCU** |
| 2 | Open **In Checkout** (or **Checkout upsells**) |
| 3 | **Pause or delete** every live in-checkout funnel/offer |
| 4 | Confirm no offers show placement = "In Checkout" with status Live |
| 5 | **Settings → Checkout → Customize** → remove any Zipify checkout extension blocks |
| 6 | Smoke-test: add $27 skincare SKU → checkout → **no overlay**, no `_su_rec` in URL |

**Theme (already applied):** Global OCU app-embed stays **disabled** in theme `#161833353455`. Only cart-drawer embed is re-enabled.

---

## Step 1 — Confirm post-purchase is enabled in Shopify

| Step | Action |
|------|--------|
| 1 | **Settings → Checkout** |
| 2 | Scroll to **Post-purchase page** |
| 3 | Confirm **Zipify OCU** is selected as post-purchase app |
| 4 | Save if changed |

---

## Step 2 — Global funnel rules (all funnels)

Apply these exclusions on **every** post-purchase funnel:

| Rule | Value |
|------|-------|
| Minimum order | Skincare subtotal ≥ **$25** |
| Collection | **Skincare** (must include at least one line) |
| Exclude products in order | `the-complete-disuri-system`, `the-anti-aging-power-duo`, `the-barrier-rescue-system` (if bundle already purchased) |
| Exclude lip/gloss | Any lip product handles (GWP only — never upsell) |
| Exclude customer tags | `system-buyer`, `duo-buyer`, `barrier-buyer`, `subscriber` |
| Offer type | **One-click upsell** (post-purchase) |

**Funnel priority (highest wins):** Barrier (1) → Firming (2) → Catch-all (3)

---

## Step 3 — Funnel A: Barrier path (Priority 1)

**Path:** Zipify OCU → **Funnels** → **Create funnel** → Post-purchase

### Triggers

| Condition | Value |
|-----------|-------|
| Order contains product | `disuri-beauty-ultimate-snail-mucin-cream` **OR** `hyaluronic-acid-intense-hydration-firming-cream` |
| Collection | Skincare |
| Cart value | ≥ $25 |
| Does NOT contain | Any bundle handle |

### Offers

| Slot | Product | Discount | Headline |
|------|---------|----------|----------|
| **Upsell 1** | `the-barrier-rescue-system` ($67.48) | None (built-in $7.50 save) | Complete your repair + hydrate ritual. |
| **Upsell 2** | `triple-collagen-firming-toner` ($27.99) | None | Add the prep step your barrier ritual is missing. |
| **Downsell** | `the-barrier-rescue-system` | **10% off** (~$60.73) | Last chance: save 10% on the Barrier Rescue System. |

**Accept tag (Zipify → Klaviyo or Shopify Flow):** `barrier-buyer`

---

## Step 4 — Funnel B: Firming path (Priority 2)

### Triggers

| Condition | Value |
|-----------|-------|
| Order contains ANY of | `triple-collagen-firming-cream`, `triple-collagen-korean-face-wash`, `triple-collagen-firming-toner`, `triple-collagen-firming-essence`, `triple-collagen-eye-cream-korean-anti-aging` |
| Collection | Skincare |
| Cart value | ≥ $25 |
| Does NOT contain | Any bundle handle |

### Offers

| Slot | Product | Discount | Headline |
|------|---------|----------|----------|
| **Upsell 1** | `the-anti-aging-power-duo` ($76.48) | None (built-in $8.50 save) | Firm + hydrate in two steps. Save $8.50 today. |
| **Upsell 2** | `the-complete-disuri-system` ($101.97) | None | Upgrade to the full 3-step ritual and save $18. |
| **Downsell** | `the-anti-aging-power-duo` | **10% off** (~$68.83) | One-time offer: 10% off the Anti-Aging Power Duo. |

**Accept tag:** `duo-buyer` (Upsell 1) · `system-buyer` (Upsell 2 accept)

---

## Step 5 — Funnel C: Catch-all (Priority 3)

### Triggers

| Condition | Value |
|-----------|-------|
| Collection | Skincare |
| Cart value | **$25 – $60** |
| Does NOT contain | Any bundle handle |

### Offers

See [zipify-ocu-complete-system-playbook.md](zipify-ocu-complete-system-playbook.md) for full copy blocks.

| Slot | Product | Discount | Headline |
|------|---------|----------|----------|
| **Upsell 1** | `the-complete-disuri-system` | None | You started the ritual. Complete all three steps and save $18. |
| **Upsell 2** | `triple-collagen-firming-toner` OR `triple-collagen-firming-essence` | None | Add the prep step your cream is missing. |
| **Downsell** | `the-barrier-rescue-system` | **10% off** | Try the Barrier Rescue System at 10% off. |

**Accept tag:** `system-buyer` (Upsell 1) · `barrier-buyer` (Downsell accept)

---

## Step 6 — Cart drawer funnel (Phase 2)

**Theme:** Cart-drawer app embed **enabled** (global app-embed stays OFF).

**Path:** Zipify OCU → **Cart drawer** (or **Slide cart**) → Create funnel

### Triggers

| Condition | Value |
|-----------|-------|
| Collection subtotal | Skincare **$25 – $75** |
| Does NOT contain | Bundles, lip/gloss products |
| Cart subtotal under $25 | **Do not show** (theme order bump owns toner pitch) |

### Offer logic

| Cart state | Offer product | CTA |
|------------|---------------|-----|
| Skincare $25–$55, no toner in cart | `triple-collagen-firming-toner` | Add this step — one tap, ships with your order |
| Skincare $25–$75, single cream only | `the-barrier-rescue-system` | Complete your duo — repair + hydrate |

**Never in cart drawer:** lip/gloss, `the-complete-disuri-system` (save for post-purchase one-click).

---

## Step 7 — Visual styling

| Setting | Value |
|---------|-------|
| Background | `#F4F2EE` (porcelain) |
| Accent / CTA | `#B82024` (crimson) |
| Text | `#2A2A2A` (charcoal) |
| Match checkout | Zipify → Settings → **Builder Preview Styling** → align with DISURI theme |

---

## Step 8 — Publish checklist

- [ ] All In Checkout funnels paused/deleted
- [ ] Funnel A, B, C published with correct priority
- [ ] Cart drawer funnel published with $25–$75 skincare rule
- [ ] Theme cart-drawer embed ON; global app-embed OFF
- [ ] Post-purchase enabled in Shopify checkout settings
- [ ] Klaviyo accept-tag flows live (see klaviyo tags playbook)
- [ ] Test order completed; post-purchase shows correct funnel
- [ ] Test order refunded; order ID logged in [zipify-ocu-baseline-metrics.md](zipify-ocu-baseline-metrics.md)

---

## Product handle reference

| Product | Handle |
|---------|--------|
| Snail Mucin Cream | `disuri-beauty-ultimate-snail-mucin-cream` |
| HA Cream | `hyaluronic-acid-intense-hydration-firming-cream` |
| Collagen Cream | `triple-collagen-firming-cream` |
| Foam | `triple-collagen-korean-face-wash` |
| Toner | `triple-collagen-firming-toner` |
| Essence | `triple-collagen-firming-essence` |
| Eye Cream | `triple-collagen-eye-cream-korean-anti-aging` |
| Complete System | `the-complete-disuri-system` |
| Anti-Aging Duo | `the-anti-aging-power-duo` |
| Barrier Rescue | `the-barrier-rescue-system` |
