# Zipify OCU Baseline Metrics — Week 1

**Store:** disuribeauty.com  
**Relaunch date:** 2026-07-01  
**Scope:** Post-purchase funnels A/B/C + cart drawer (In Checkout OFF)

---

## Week 1 protocol

1. **No A/B tests** — baseline only.
2. Log numbers every **Monday** from Zipify analytics + Shopify orders.
3. Week 2: split-test Upsell 1 headline on Firming funnel (Complete System vs Anti-Aging Duo for collagen buyers).

---

## Primary metrics

| Metric | Source | Week 1 target (Zipify benchmark) | W1 actual | W2 actual |
|--------|--------|----------------------------------|-------------|-----------|
| Post-purchase impression rate | Zipify | — | | |
| Post-purchase take rate (all) | Zipify | 10–16% | | |
| Funnel A take rate (Barrier) | Zipify | Track baseline | | |
| Funnel B take rate (Firming) | Zipify | Track baseline | | |
| Funnel C take rate (Catch-all) | Zipify | Track baseline | | |
| Downsell take rate | Zipify | 5–10% | | |
| Cart drawer impression rate | Zipify | Track baseline | | |
| Cart drawer take rate | Zipify | Track baseline | | |
| Upsell revenue (total) | Zipify | Rising WoW | | |
| RPV (revenue per visitor) | Zipify | Rising WoW | | |

---

## AOV impact

| Metric | Formula | W1 actual |
|--------|---------|-----------|
| Qualified order count | Orders with $25+ skincare + GWP discount | |
| OCU accept count | Zipify accepted offers | |
| Incremental upsell revenue | Sum of OCU charges | |
| AOV lift % | (Upsell revenue / qualified order revenue) × 100 | |

---

## Klaviyo funnel conversion

| Segment | Count (W1) |
|---------|------------|
| `weekly-gift-signup` (new) | |
| `first-order-25-plus` (new) | |
| `system-buyer` (new) | |
| `duo-buyer` (new) | |
| `barrier-buyer` (new) | |

**Conversion:** `first-order-25-plus` → any OCU tag = \_\_\_%

---

## Test order log

Document QA orders here; refund after verification.

| Date | Order ID | Funnel triggered | Path (accept/decline) | Tag verified | Refunded |
|------|----------|------------------|----------------------|--------------|----------|
| 2026-07-01 | — | Automated QA | Checkout URL: no `_su_rec`; Pay now present; global app-embed OFF; cart-drawer ON | Pending Zipify admin publish | — |

### Automated QA (2026-07-01)

| Check | Result |
|-------|--------|
| Theme global OCU app-embed | OFF (correct) |
| Theme cart-drawer OCU embed | ON (pushed live) |
| Checkout URL `_su_rec` | **Absent** (In Checkout not injecting) |
| Checkout Pay now button | Present |
| Zipify funnels A/B/C in admin | **Pending Joel publish** — see [zipify-ocu-admin-walkthrough.md](zipify-ocu-admin-walkthrough.md) |

---

## Week 2 A/B test plan

| Test | Variant A | Variant B | Success metric |
|------|-----------|-----------|----------------|
| Firming Upsell 1 headline | Anti-Aging Power Duo (control) | Complete System headline for collagen buyers | RPV, not CVR alone |

Enable in Zipify → Funnel B → Split test after Week 1 baseline is logged.

---

## Red flags (pause and investigate)

- Checkout URL contains `_su_rec` → In Checkout funnel still live; pause immediately
- Post-purchase take rate &lt; 4% after 50+ impressions → review offer relevance and copy
- Cart drawer shows lip/gloss → fix Zipify product exclusions
- Duplicate toner pitch (order bump + drawer both fire under $25) → tighten drawer trigger to ≥ $25
