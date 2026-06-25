# Gift of the Week — landing page + live "claimed" counter

**Decisions (user, 2026-06-24):** weekly drop cadence · email weekly (not daily) ·
**transparency framing** for the counter ("X of Y claimed this week"), NOT fake scarcity
(stays consistent with brand voice: no countdown/last-chance language).

**Goal:** a `/pages/gift-of-the-week` landing page (and a homepage teaser block) that shows
the current free gift, the $25-skincare mechanic, and a **real** live progress counter, fed
by actual gift inventory. Drives the weekly Klaviyo email's clicks.

## Architecture — rotation is zero-touch for the theme
The featured gift is driven by **shop metafields** that Claude Code (commerce) updates each
week. The theme just reads them, so the Cursor agent builds the page ONCE.

| Shop metafield (namespace `disuri`) | Type | Purpose |
|---|---|---|
| `gift_of_week` | product_reference | This week's featured gift product |
| `gift_of_week_allocation` | number_integer | "Y" — gifts offered this week (e.g. 99) |
| `gift_of_week_label` | single_line_text | Optional override headline |

Claude Code sets these weekly (+ publishes the shade + repoints the discount). No theme edit
needed to rotate.

## Counter logic (Liquid, no app — works on any plan)
```liquid
{% assign gift = shop.metafields.disuri.gift_of_week.value %}
{% assign allocation = shop.metafields.disuri.gift_of_week_allocation.value | default: 99 %}
{% assign variant = gift.selected_or_first_available_variant %}
{% assign remaining = variant.inventory_quantity %}
{% if remaining < 0 %}{% assign remaining = 0 %}{% endif %}
{% assign claimed = allocation | minus: remaining %}
{% if claimed < 0 %}{% assign claimed = 0 %}{% endif %}
{% assign pct = claimed | times: 100 | divided_by: allocation %}
```
- Display: **"{{ claimed }} of {{ allocation }} gifts claimed this week"** + a progress bar
  (reuse `.gift-ladder-*` styles / Crimson fill `#B82024`, Porcelain track).
- Sold-out state (`remaining <= 0`): "This week's gift is fully claimed — next drop Monday."
- Real because `inventory_quantity` only drops when a paid order includes the free gloss.
- Requires the gift product published to Online Store + inventory tracked (DENY) — already
  true for the featured shade each week.

## Page structure
1. Eyebrow "Gift of the Week" + gift name (Bodoni) + hero image (gift product image).
2. The mechanic, one line: "Spend $25 on skincare → this gloss is yours, free."
3. **Live counter bar** (above).
4. Primary CTA "Shop skincare →" (`/collections/skincare`); secondary "See the gift" (gift PDP).
5. Trust row (Made in Korea · ships from Miami) — reuse existing trust snippet.
6. EN/ES via locale or `request.locale` inline.

## Weekly rotation runbook (Claude Code / commerce — me)
1. Pick next shade from the 175 UNLISTED gift pool.
2. Publish it to Online Store (`publishablePublish`).
3. Repoint the BXGY discount's "gets" item to the new shade (update or recreate
   `DiscountAutomaticNode/1591628660975`).
4. Set shop metafields `gift_of_week` (new product) + `gift_of_week_allocation`.
5. Update the weekly Klaviyo email's featured product/image; send.
6. (Optional) unpublish previous week's shade.

## Build split
- **Cursor agent (theme):** the `/pages/gift-of-the-week` template + section + homepage
  teaser block + the counter Liquid above. Build once; reads metafields.
- **Claude Code (commerce):** define the 3 shop metafields, set Week-1 values (Miami Splash,
  allocation 99), run the weekly rotation, own the Klaviyo email.

## Weekly Klaviyo send runbook (Claude Code / commerce — me)

Klaviyo has NO native recurring campaign; a weekly merchandised drop = clone + update +
schedule each week. Master template = `TmyjVj` ("Weekly Free Gift — Miami Splash").

Each week (same day/time, e.g. Monday 9am ET):

1. Rotate the gift on the commerce side first (see runbook above): publish the shade, repoint
   the discount, update the `disuri.gift_of_week*` metafields.
2. Clone the master template; swap: gift image (Shopify CDN URL), gift name, the "$12.97
   value" line, and the secondary link (gift PDP).
3. Clone the Week-1 campaign (`01KVY05HWXEXE04PCDQRAYN45H`), attach the new template, keep
   audience = Master List (`RbYjU5`) included / Recent Buyers (`SA55Ku`) excluded.
4. Set send_strategy (static datetime or smart_send_time). Use Smart Sending to avoid
   re-hitting recent recipients.
5. Optional mid-week nudge to non-openers if the counter is still low.
6. User reviews + sends (Claude never sends).

**Primary CTA link:** once the Gift-of-the-Week page is LIVE, point the email's main button at
`/pages/gift-of-the-week` (shows the live "X of Y claimed" counter — strong click magnet).
UNTIL the page ships, keep Week-1 pointed at `/collections/skincare` (already correct, works
today). Do NOT link the page before the Cursor agent ships it (avoids a 404).

## Open items
- Weekly allocation number: full stock (99) vs a deliberate weekly cap (e.g. 50) for a
  tighter counter. Recommend starting at the gift's full stock for Week 1.
- Homepage teaser vs dedicated page only — recommend both (teaser links to page).
