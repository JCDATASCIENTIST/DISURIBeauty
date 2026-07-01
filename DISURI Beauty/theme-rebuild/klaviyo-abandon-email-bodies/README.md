# Klaviyo abandon email bodies

Paste into Klaviyo flow templates (DISURI \| Abandoned Checkout / Cart / Post-Purchase).

**Rules:** Skincare-first copy. No em dashes. Appearance-based claims only. Gloss = optional footnote, never hero.

**Klaviyo Liquid:** Substring checks use **`"needle" in field`** — not `field contains "needle"`. Example: `{% if "Toner" in event.Name %}`. One condition per branch; duplicate copy across separate `{% elsif %}` lines instead of `or`.

| File | Flow step |
|------|-----------|
| `checkout-email-1-reminder.html` | Checkout Email 1 (~15m) |
| `checkout-email-2-education.html` | Checkout Email 2 (24h) |
| `checkout-email-3-proof.html` | Checkout Email 3 (48h) |
| `cart-email-1-reminder.html` | Cart Email 1 (~5m) |
| `post-purchase-email-1-thank-you.html` | First Customer Thank You (~3h) |
| `post-purchase-email-2-week-one.html` | Post-purchase Day 3 |
| `post-purchase-email-3-cross-sell.html` | Post-purchase Day 7 |
| `post-purchase-email-4-reorder.html` | Post-purchase Day 30 |
| `browse-abandon-email-1.html` | Browse (if re-enabled later) |

Build sheet: [../klaviyo-abandon-conversion-build-sheet.md](../klaviyo-abandon-conversion-build-sheet.md)  
Admin steps: [../klaviyo-abandon-admin-walkthrough.md](../klaviyo-abandon-admin-walkthrough.md)
