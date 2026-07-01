# Klaviyo Primary KPI — `first-order-25-plus` Build Sheet

**Owner:** Claude Code (Klaviyo + optional Shopify Flow)  
**Companion:** [gift-funnel-vision.md](gift-funnel-vision.md), [weekly-gift-popup-klaviyo-playbook.md](weekly-gift-popup-klaviyo-playbook.md)  
**Store:** `7874da-0f.myshopify.com` · Klaviyo `company_id=SgaEqb` · Master List `RbYjU5`

---

## Goal

Tag every **first-time buyer** whose order qualifies for the live $25 Skincare GWP so you can report:

`weekly-gift-signup → first-order-25-plus` conversion weekly.

---

## Qualification rule (matches live theme)

Same logic as [`disuri-gift-ladder.liquid`](../../../DISURI-Beauty-Theme/snippets/disuri-gift-ladder.liquid):

1. Customer's **first** placed order (`Placed Order` count = 1)
2. At least one line item from the **Skincare** collection
3. Skincare line subtotal ≥ **$25.00** (2500 cents)
4. BXGY gift discount applied (free weekly lip gloss)

**Live discount node (commerce):** `DiscountAutomaticNode/1591628660975` — repointed each week to the current shade. Confirm current title in Shopify Admin → Discounts before building filters.

---

## A. Klaviyo flow — "First $25 Skincare Order"

**Path:** Klaviyo → **Flows** → **Create flow** → **Create from scratch**

### A1. Trigger

| Setting | Value |
|---------|-------|
| Trigger | **Metric** → **Placed Order** (Shopify integration) |
| Flow name | `First $25 Skincare Order` |
| Status | Draft until QA, then Live |

### A2. Profile filters (before first action)

Add **AND** conditions on the profile at trigger time:

| Filter | Operator | Value |
|--------|----------|-------|
| `Placed Order` (count, all time) | equals | **1** |
| Has tag | does not contain | `first-order-25-plus` |

### A3. Conditional split — order qualifies

**Path A (YES → tag buyer):** Order meets GWP rules  
**Path B (NO → end):** Does not qualify

Use **Trigger filters** on the Placed Order event where possible:

| Filter | How to set in Klaviyo |
|--------|----------------------|
| Skincare subtotal ≥ $25 | **Preferred:** order property `Tags` contains `skincare-25-plus` (set by Shopify Flow below). **Fallback:** sum line items where product is in Skincare collection (if Klaviyo exposes collection membership). |
| Gift discount applied | `$value` discount codes / `$value` discounts contains BXGY discount title, OR order line item price = $0 for gloss variant |
| Gloss redeemed (optional) | Line item SKU or product title contains current shade OR product type = lip gloss at $0 |

If Klaviyo cannot filter on skincare subtotal alone, **require** Shopify Flow tag (Section B).

### A4. Action — Path A only

| Action | Value |
|--------|-------|
| Add profile tag | `first-order-25-plus` |
| Optional second tag | `gift-redeemed` (if gloss line present at $0) |

### A5. Optional follow-up branch

Do **not** send a separate email from this flow (Welcome Email 1 already covers gift education). This flow is **tagging + measurement only**.

---

## B. Shopify Flow fallback (if Klaviyo subtotal filter unavailable)

**Path:** Shopify Admin → **Apps** → **Flow** → Create workflow

| Step | Config |
|------|--------|
| Trigger | **Order paid** |
| Condition 1 | Customer **number of orders** = 1 |
| Condition 2 | For each line item: if product in collection `skincare`, sum `line price` ≥ 25.00 |
| Condition 3 | Order has discount matching BXGY gift discount (title contains "gift" or exact discount name) |
| Action | Add order tag `skincare-25-plus` |
| Action (optional) | Add customer tag `first-order-25-plus` (syncs to Klaviyo via integration) |

Klaviyo flow then filters: **Placed Order** where **Order Tags** contains `skincare-25-plus`.

---

## C. Segments for reporting

### C1. Buyers

| Setting | Value |
|---------|-------|
| Name | `Buyers — first $25+ skincare` |
| Definition | Person has tag `first-order-25-plus` |

### C2. Leads (not yet converted)

| Setting | Value |
|---------|-------|
| Name | `Leads — weekly gift, no purchase` |
| Definition | Person has tag `weekly-gift-signup` AND does NOT have tag `first-order-25-plus` |

### C3. Funnel conversion (optional calculated property)

Weekly manual or dashboard:

```
Conversion % = (new first-order-25-plus this week) / (new weekly-gift-signup this week) × 100
```

---

## D. Dashboard — weekly 2-number view

**Path:** Klaviyo → **Analytics** → **Dashboards** → Create **Gift Funnel KPI**

| Widget | Metric |
|--------|--------|
| Card 1 | Profiles tagged `weekly-gift-signup` (last 7 days) |
| Card 2 | Profiles tagged `first-order-25-plus` (last 7 days) |
| Card 3 | Conversion rate (Card 2 / Card 1) or use segment growth |

Add breakdown by **UTM source** if popup traffic is tagged.

---

## E. QA checklist

| Test | Expected |
|------|----------|
| First order, skincare $20, no discount | No `first-order-25-plus` tag |
| First order, skincare $27, BXGY gloss applied | Tag added once |
| Second order, skincare $30, gloss applied | No duplicate tag (filter: Placed Order count = 1) |
| First order, system bundle only, no skincare collection items | No tag (unless bundle lines count in Skincare collection — verify collection membership) |
| Repeat buyer signs up for popup | Popup tag only; buyer tag only on first qualifying order |

**Test account:** Use Shopify Bogus Gateway or draft order in dev; confirm tag in Klaviyo profile within 5 minutes of order.

---

## F. Tag schema (full funnel)

| Tag | When |
|-----|------|
| `weekly-gift-signup` | Popup / newsletter submit (existing) |
| `first-order-25-plus` | First qualifying GWP order (this doc) |
| `gift-redeemed` | Optional; gloss $0 line on qualifying order |
| `system-buyer` | Zipify OCU Complete System accept — see [zipify-ocu-complete-system-playbook.md](zipify-ocu-complete-system-playbook.md) |
| `duo-buyer` | Zipify OCU Anti-Aging Duo accept — see [zipify-ocu-klaviyo-tags-playbook.md](zipify-ocu-klaviyo-tags-playbook.md) |
| `barrier-buyer` | Zipify OCU Barrier Rescue accept — see [zipify-ocu-klaviyo-tags-playbook.md](zipify-ocu-klaviyo-tags-playbook.md) |

---

## Handoff

After live:

1. Mark flow **Live** in Klaviyo.
2. Note BXGY discount title in this doc (appendix) for future rotation weeks.
3. Share dashboard link with Joel for weekly review.
