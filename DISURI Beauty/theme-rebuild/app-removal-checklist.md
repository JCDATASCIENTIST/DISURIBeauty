# App Removal Checklist — DISURI Beauty Live Store

Run this **after** the new theme is published and verified. The fresh Skeleton-based theme does not include legacy app embeds.

## Before you uninstall

1. Export any data you need from each app (reviews, subscriptions, analytics).
2. Note which apps are **required** for operations:
   - Payment provider (Shopify Payments / Stripe)
   - Shipping (Shopify Shipping, Shippo, etc.)
   - Email (Klaviyo, Shopify Email)
   - Compliance (cookie consent, age verification if applicable)
3. Screenshot the current app list for rollback reference.

## Uninstall procedure

For each app to remove:

1. **Settings → Apps and sales channels**
2. Click the app → **Delete app** (or **Uninstall**)
3. Confirm removal
4. Repeat — there is no bulk uninstall in admin

## Post-removal audit

| Check | Where | Action |
|-------|-------|--------|
| Orphaned script tags | Theme code (old themes) | Delete old unpublished themes after rollback window |
| App blocks in theme editor | Online Store → Customize | Should be empty in new theme |
| Checkout extensions | Settings → Checkout | Remove unused checkout UI extensions |
| Webhooks | Settings → Notifications → Webhooks | Delete webhooks pointing to removed apps |
| Metafield definitions | Settings → Custom data | Remove unused app-owned definitions |
| DNS / pixels | Online Store → Preferences | Remove dead tracking pixels |

## Apps commonly safe to remove on theme rebuild

See [app-inventory.md](./app-inventory.md) for a store-specific scan (2026-06-24):

- **GemPages** — `gempages-cro-137`
- **PageFly** — `pagefly-page-builder-292`
- **Zipify OCU** — checkout/cart upsell (evaluate first)

## Apps to keep unless replacing

- Email marketing with active flows (Klaviyo, etc.)
- Subscription apps if you sell subscriptions
- Inventory/ERP sync
- Tax calculation (if not using Shopify Tax)
- Customer accounts / loyalty if actively used

## Verification after cleanup

- [ ] Homepage loads with no console errors
- [ ] Add to cart → checkout completes (test mode)
- [ ] Product pages render without missing app sections
- [ ] Search works
- [ ] Customer account login works (if enabled)
- [ ] Analytics firing (if using GA4/Meta via theme or Shopify pixels)

## Rollback

If an app removal breaks something:

1. Reinstall from Shopify App Store
2. Reconfigure app embed in theme editor if needed
3. Or revert to previous live theme: Online Store → Themes → **DISURI BEAUTY** (original)
