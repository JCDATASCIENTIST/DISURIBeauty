# Gift Funnel Vision — Brunson Model, DISURI Execution

**Owner:** Joel (strategy) · Claude Code (Klaviyo, OCU, ReCharge, Queens ops) · Cursor (theme, cart, storefront)  
**Status:** Strategy locked · storefront squeeze + $25 front-end **live** · OCU stack **planned**  
**Related:** [weekly-gift-popup-klaviyo-playbook.md](weekly-gift-popup-klaviyo-playbook.md), [gift-of-the-week-landing-page.md](gift-of-the-week-landing-page.md), [hybrid-migration.md](hybrid-migration.md)

---

## One-line thesis

> **Weekly free gift alert → first $25+ skincare order (buyer acquired) → Complete System upsell → subscription → Queens community.**

Inspired by Russell Brunson's **Free Plus Shipping** funnel, adapted for premium K-beauty: the gloss is the hook, **skincare margin** pays for acquisition (not shipping fees alone). No fake scarcity. Real inventory. Honest $25 threshold.

---

## Confirmed decisions (Joel, 2026-06-25)

| Decision | Choice |
|----------|--------|
| **Primary conversion KPI** | **First $25+ order** (Skincare collection subtotal → free lip gloss redeemed) |
| **Secondary KPIs** | Email signup (`weekly-gift-signup`), OCU acceptance rate, subscription attach, Queen applications |
| **OCU stack (post-purchase, in order)** | **1.** The Complete DISURI System → **2.** Subscription (replenishment) → **3.** Queens community |
| **Front-end mechanic** | $25 Skincare → 1 free lip gloss per order (automatic BXGY). **Not** standalone free-plus-shipping on gloss alone. |
| **Weekly rotation** | New shade each week; 175 unlisted lip pool; metafield-driven (`disuri.gift_of_week*`) |

---

## Brunson → DISURI stage map

| Brunson stage | DISURI implementation | Status |
|---------------|----------------------|--------|
| **Squeeze page** | Klaviyo popup + homepage newsletter → email + weekly-gift education | Live (copy aligned) |
| **Front-end offer** | Spend $25 on Skincare → free weekly lip gloss | Live (discount + cart ladder + announcement bar) |
| **Order bump** | Cart/checkout add-on when close to or at $25 (toner, mini, second SKU) | Backlog |
| **One-click upsell #1** | **The Complete DISURI System** (~$101.97) after first qualifying order | Planned |
| **One-click upsell #2** | **Subscription** (ReCharge replenishment on hero SKUs) | Planned (ReCharge deferred) |
| **One-click upsell #3** | **Queens community** (Affiliate / Partner Academy entry) | Planned |
| **Follow-up** | Weekly Thu gift email → repeat loop | Live template `TmyjVj` + rotation runbook |

---

## Full funnel (end-to-end)

```
┌─────────────────────────────────────────────────────────────────┐
│ ACQUIRE — lead + intent                                         │
│  Popup / newsletter → tag: weekly-gift-signup                     │
│  Welcome Email 1 → /pages/gift-of-the-week                      │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│ CONVERT — ★ PRIMARY KPI: first $25+ order ★                     │
│  Gift page → /collections/skincare → skin guide / bundles       │
│  Cart ladder (dynamic shade) → checkout → free gloss applied    │
│  Tag: first-order-25-plus (or gift-redeemed)                    │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│ OCU #1 — Complete System (one-click, no re-enter card)          │
│  Offer: full 3-step ritual; save vs. buying steps separately    │
│  Tag: system-buyer on accept                                    │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│ OCU #2 — Subscription                                           │
│  Offer: replenish core SKU(s) every 30/60/90 days               │
│  ReCharge widget + post-purchase OCU                            │
│  Tag: subscriber                                                │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│ OCU #3 — Queens community                                       │
│  Offer: free Affiliate tier · Partner Academy · no inventory    │
│  Destination: /pages/cj-affiliate (or dedicated Queens apply)   │
│  Tag: queen-prospect → queen-applied on form submit             │
└────────────────────────────┬────────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│ RETAIN — weekly gift email (Thu) → next shade → repeat          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Primary KPI: first $25+ order

### Definition

A **converted buyer** is a customer whose order includes:

1. **≥ $25 subtotal** from the **Skincare** collection (same logic as cart ladder), and  
2. **Free lip gloss** applied via automatic BXGY discount (gift-of-week variant).

### Why this KPI (not email alone)

Email proves interest. **$25+ order** proves the funnel economics Brunson cares about: you acquired a **buyer**, not just a lead. Gloss cost is COGS; skincare margin is the front-end profit engine.

### Measurement

| Tool | How |
|------|-----|
| **Shopify** | Orders report; filter/discount name for BXGY gift discount; line items from Skincare collection |
| **Klaviyo** | Flow trigger: **Placed Order** where order meets $25 skincare rule → tag `first-order-25-plus`; exclude repeat buyers |
| **PostHog / analytics** | Funnel: popup submit → gift page view → add to cart → checkout → purchase with discount |

### Storefront surfaces that drive this KPI (live)

| Surface | Role |
|---------|------|
| `/pages/gift-of-the-week` | Educate mechanic + live counter |
| Announcement bar | Dynamic shade + link to gift page |
| Cart / drawer ladder | Progress to $25; dynamic shade name |
| Welcome Email 1 + weekly Thu email | Shade + AOV helpers (toner clears $25) |
| Skin guide + bundles | Ritual discovery when short of $25 |

---

## OCU stack — spec

Post-purchase upsells run **after** the first $25+ order is placed. Customer should not re-enter payment if using Shopify post-purchase / Zipify OCU (see [app-inventory.md](app-inventory.md)).

### OCU #1 — The Complete DISURI System

| Field | Value |
|-------|-------|
| **Product** | [The Complete DISURI System](https://disuribeauty.com/products/the-complete-disuri-system) (~$101.97) |
| **Audience** | First-time buyers who did **not** already buy the system in front-end cart |
| **Positioning** | "You unlocked this week's gloss. Complete the full 3-step ritual." |
| **Offer frame** | Bundle savings vs. buying cleanser + toner + cream separately; barrier-first science |
| **Decline path** | Continue to OCU #2 (do not hard-stop) |
| **Tag on accept** | `system-buyer` |

**Copy tone:** Warm authority. No countdown. Optional: "Members who start with the full system see [X]" only if substantiated.

### OCU #2 — Subscription

| Field | Value |
|-------|-------|
| **App** | ReCharge (deferred until ready — see AGENTS.md) |
| **SKUs** | Hero replenishment: e.g. Triple Collagen Firming Toner, Complete System, or customer's front-end SKU |
| **Positioning** | "Never run out mid-ritual. Skip or pause anytime." |
| **Cadence** | 30 / 60 / 90 day options per product |
| **Tag on accept** | `subscriber` |

**Theme:** `@app` block on PDP + post-purchase OCU page. See [hybrid-migration.md](hybrid-migration.md).

### OCU #3 — Queens community

| Field | Value |
|-------|-------|
| **Destination** | `/pages/cj-affiliate` (homepage Queens CTA default) |
| **Audience** | Buyers who declined system + subscription, **or** high-engagement customers (optional branch) |
| **Positioning** | Align with `disuri.queens.*` locale copy: free Affiliate tier, Partner Academy, no inventory, no recruitment hype |
| **Tag on view** | `queen-prospect` |
| **Tag on apply** | `queen-applied` |

**Compliance:** Queens funnel is **not** income claims. See `DISURI Beauty/DISURI-Queen-Content-Compliance-Framework.md`.

---

## Klaviyo tag schema (recommended)

| Tag | When |
|-----|------|
| `weekly-gift-signup` | Popup / newsletter submit |
| `first-order-25-plus` | First order meeting $25 skincare + gift discount |
| `gift-redeemed` | Alias or subset if gloss line present (optional) |
| `system-buyer` | OCU #1 accepted |
| `subscriber` | ReCharge active subscription |
| `queen-prospect` | Clicked Queens OCU / CTA |
| `queen-applied` | Completed affiliate application |

Use segments for reporting: **Leads** (signup, no order) · **Buyers** (first-order-25-plus) · **System** · **Subscribe** · **Queens pipeline**.

---

## Order bump (backlog — pre-checkout)

Brunson order bump sits **before** checkout. DISURI candidates:

| Bump | Price band | When to show |
|------|------------|--------------|
| Triple Collagen Firming Toner | $27.99 | Cart $0–$24 skincare (clears threshold in one click) |
| Travel / mini SKU | TBD | At or just above $25 |
| Second gloss shade at discount | TBD | Only if margin allows; not Week-1 priority |

**Owner:** Cursor (cart drawer UI) + Claude Code (offer rules).

---

## Implementation backlog

### Phase 1 — Measure the primary KPI (Claude Code)

- [x] Playbook: [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md)
- [ ] Klaviyo flow: **Placed Order** → conditional tag `first-order-25-plus` (script or Shopify Flow + Klaviyo sync)
- [ ] Dashboard: weekly count of first-order-25-plus vs. weekly-gift-signup (conversion rate)
- [ ] Exclude repeat purchasers from popup (already Smart Sending)

### Phase 2 — OCU #1 Complete System (Claude Code + Zipify or Shopify post-purchase)

- [x] Playbook: [zipify-ocu-complete-system-playbook.md](zipify-ocu-complete-system-playbook.md) (skincare-only copy, no gloss)
- [x] Admin walkthrough: [zipify-ocu-admin-walkthrough.md](zipify-ocu-admin-walkthrough.md) — Funnels A/B/C + cart drawer
- [x] Klaviyo tags: [zipify-ocu-klaviyo-tags-playbook.md](zipify-ocu-klaviyo-tags-playbook.md)
- [x] Baseline metrics: [zipify-ocu-baseline-metrics.md](zipify-ocu-baseline-metrics.md)
- [x] Theme: cart-drawer OCU embed ON; global app-embed OFF (In Checkout blocked checkout)
- [ ] **Joel:** Publish funnels in Zipify admin per walkthrough Step 0–8
- [ ] QA: test order → post-purchase → tag `system-buyer` / `duo-buyer` / `barrier-buyer`

### Phase 3 — OCU #2 Subscription (Claude Code)

- [ ] Enable ReCharge on store
- [ ] Theme: ReCharge `@app` block on PDP ([hybrid-migration.md](hybrid-migration.md))
- [ ] Post-purchase subscription OCU after #1 decline or accept
- [ ] Tag `subscriber` via ReCharge ↔ Klaviyo integration

### Phase 4 — OCU #3 Queens (Claude Code)

- [ ] Post-purchase page or email branch: Queens offer
- [ ] Track `queen-prospect` / `queen-applied`
- [ ] Align copy with Partner Academy onboarding skill

### Phase 5 — Order bump (Cursor)

- [x] Cart drawer bump component when skincare subtotal < $25
- [x] Single-tap add toner (or configured bump SKU) — Theme setting `order_bump_product_handle`

---

## Copy rules (all funnel stages)

- No em dashes. No fake countdown or "last chance."
- No phantom $50/$100 gift tiers. Live mechanic: **$25 Skincare → 1 free gloss**.
- Gloss shade name from metafield (announcement bar + cart ladder already dynamic).
- Queens: empowerment + skills, not MLM income hype.

---

## What we are NOT doing

- **Standalone free gloss + shipping only** as the main funnel (different unit economics; dilutes premium positioning).
- **False scarcity** on the weekly counter (transparency framing only).
- **Recruitment-first Queens pitch** on post-purchase upsells.

---

## Handoff summary

| Layer | Owner | Next action |
|-------|-------|-------------|
| Squeeze + emails | Claude Code | Publish popup; Welcome Email 1; tag schema |
| $25 front-end | Live | Maintain weekly rotation + metafields |
| Primary KPI tracking | Claude Code | Klaviyo `first-order-25-plus` flow |
| OCU 1 → 2 → 3 | Claude Code | Zipify/ReCharge/Queens pages |
| Cart order bump | Cursor | After OCU #1 spec approved |

**Joel's north star:** Every weekly gift signup should be measured by how many become **first $25+ buyers**, then how many accept **System → Subscribe → Queens**.
