# GS1 Data Hub: register the 3 bundles (updated 2026-07-03)

> **Superseded note:** this file previously described editing GTIN
> `850066107386` from Barrier Rescue to Glass Skin Starter. On 2026-07-03 we
> confirmed the July 2 import was **never uploaded** — none of the bundle
> GTINs exist in Data Hub yet, so there is nothing to edit. Glass Skin
> Starter gets registered fresh instead. Barrier Rescue never gets created.

## What Shopify already assumes

These GTINs are already live on Shopify as SKU + barcode, so Data Hub must
end up assigning exactly these numbers (they are the next three in the
`0850066107` prefix sequence after `850066107355`):

| GTIN-12 | Product | SKU |
|---|---|---|
| 850066107362 | DISURI Beauty The Complete DISURI System - 3-Step Korean Skincare Routine | DIS-SYS-COMPLETE |
| 850066107379 | DISURI Beauty The Anti-Aging Power Duo - Korean Skincare Set | DIS-SYS-AADUO |
| 850066107386 | DISURI Beauty The Glass Skin Starter - 2-Step Korean Skincare Set | DIS-SYS-GLASS |

## Option A — bulk import (fixes everything at once)

1. Data Hub → Product → **Import** (or Bulk Upload).
2. Upload `gs1-import-corrected.xlsx` (regenerated 2026-07-03: 233 corrected
   descriptions, 92 filled SKUs, plus the 3 bundle rows above).
3. If the importer rejects the file (it may require GS1's own template),
   download their blank template and map columns: GTIN-12, Brand Name
   (DISURI BEAUTY), Product Description, SKU, Packaging Level (Each),
   Is Purchasable (Y), Target Market (US).

## Option B — add the 3 bundles manually (5 min, names fixed later)

1. Data Hub → Product → **Add Product** ("Each" level).
2. Data Hub auto-assigns the next available GTIN. Create the products **in
   this exact order** so the numbers land right:
   1. Complete System → should receive `...362`
   2. Anti-Aging Power Duo → should receive `...379`
   3. Glass Skin Starter → should receive `...386`
3. **Verify each assigned GTIN as you go.** If Data Hub assigns different
   numbers (e.g. the next-available pointer is elsewhere), STOP and report
   the actual numbers — Shopify/KB/master must then be re-synced to match.

## Also while you're in there

Archive the two duplicate GTINs (these DO exist in the account):

- `850066107188` (Triple Collagen Firming Essence duplicate — keeper is `850064676358`)
- `850066107195` (Ultra Plumping Mango duplicate — keeper is `850064676181`)

Search each → open record → set Status to **Archived**. Do NOT touch the
`8500646763xx`/`8500646761xx` keepers.
