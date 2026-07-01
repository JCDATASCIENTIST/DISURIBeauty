# Zipify OCU → Klaviyo Accept Tags

**Owner:** Claude Code (Klaviyo)  
**Store:** `7874da-0f.myshopify.com` · Klaviyo `company_id=SgaEqb`  
**Companion:** [zipify-ocu-admin-walkthrough.md](zipify-ocu-admin-walkthrough.md), [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md)

---

## Tag schema

| Tag | When applied | Source |
|-----|--------------|--------|
| `system-buyer` | Accepted Complete System (Upsell 1 Catch-all, or Upsell 2 Firming path) | Zipify accept OR Klaviyo flow |
| `duo-buyer` | Accepted Anti-Aging Power Duo | Zipify accept OR Klaviyo flow |
| `barrier-buyer` | Accepted Barrier Rescue System (Upsell 1 or Downsell) | Zipify accept OR Klaviyo flow |
| `first-order-25-plus` | First $25+ skincare GWP order (prerequisite) | Existing KPI flow |

---

## Method A — Zipify native Klaviyo integration (preferred)

If Zipify OCU → **Integrations** → **Klaviyo** is available:

| Zipify event | Klaviyo tag |
|--------------|-------------|
| Upsell accepted — Complete System funnel | `system-buyer` |
| Upsell accepted — Anti-Aging Duo funnel | `duo-buyer` |
| Upsell accepted — Barrier Rescue funnel | `barrier-buyer` |

Map each funnel's accept event separately. Test with one Bogus Gateway order per funnel.

---

## Method B — Klaviyo flows (fallback)

Create three flows. Each triggers on **Placed Order** where the upsell line appears on a **second charge** within 10 minutes of the initial order.

### Flow 1 — `OCU System Buyer`

| Setting | Value |
|---------|-------|
| Trigger | **Placed Order** |
| Filter | Order contains line with product handle `the-complete-disuri-system` |
| Filter | Customer does NOT already have tag `system-buyer` |
| Filter | Previous order within last 15 minutes (same session upsell) OR order note contains `OCU` |
| Action | Add tag `system-buyer` |

### Flow 2 — `OCU Duo Buyer`

| Setting | Value |
|---------|-------|
| Trigger | **Placed Order** |
| Filter | Order contains `the-anti-aging-power-duo` |
| Filter | Customer does NOT already have tag `duo-buyer` |
| Action | Add tag `duo-buyer` |

### Flow 3 — `OCU Barrier Buyer`

| Setting | Value |
|---------|-------|
| Trigger | **Placed Order** |
| Filter | Order contains `the-barrier-rescue-system` |
| Filter | Customer does NOT already have tag `barrier-buyer` |
| Filter | Customer already has tag `first-order-25-plus` (qualified buyer) |
| Action | Add tag `barrier-buyer` |

**Important:** Exclude initial front-end orders that already included a bundle in cart (check order line count and timing).

---

## Segments for reporting

| Segment name | Definition |
|--------------|------------|
| `Buyers — system upgrade` | Has tag `system-buyer` |
| `Buyers — duo upgrade` | Has tag `duo-buyer` |
| `Buyers — barrier upgrade` | Has tag `barrier-buyer` |
| `Buyers — any OCU accept` | Has any of system/duo/barrier-buyer |
| `Buyers — qualified, no OCU` | Has `first-order-25-plus`, none of OCU tags |

---

## QA

| Test | Expected tag |
|------|--------------|
| Accept Complete System post-purchase | `system-buyer` within 5 min |
| Accept Anti-Aging Duo post-purchase | `duo-buyer` within 5 min |
| Accept Barrier Rescue downsell | `barrier-buyer` within 5 min |
| Decline all offers | No new OCU tags |
| Bundle already in initial cart | No post-purchase; no OCU tags |

Run verification: `node scripts/zipify-ocu-qa-checklist.mjs` from `DISURIBeauty` repo.
