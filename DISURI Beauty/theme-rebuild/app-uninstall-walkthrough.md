# App Uninstall Walkthrough — DISURI Beauty

**When:** After confirming the new theme works on [disuribeauty.com](https://disuribeauty.com)  
**Time:** ~30–45 minutes (one app at a time, with smoke tests)

## Before you start

1. Open **Settings → Apps and sales channels** and screenshot the full list.
2. Test checkout in **test mode** once (baseline): add product → cart → checkout.
3. Keep this tab open: [Theme rollback](https://7874da-0f.myshopify.com/admin/themes) — old `DISURI BEAUTY` (Dawn) is still available.

---

## Step 0 — Enable Spanish (if not done)

The theme supports EN/ES via locale files. Shopify must publish Spanish:

1. **Settings → Languages**
2. Click **Add language** → **Spanish**
3. Click **Publish** next to Spanish
4. Visit https://disuribeauty.com/?locale=es — hero and UI should switch to Spanish

---

## Round 1 — Safe to remove (page builders)

Remove these first. They powered the old Dawn homepage; the new theme does not use them.

### 1. GemPages

1. Settings → Apps → **GemPages**
2. **Delete app** → confirm
3. Smoke test: homepage loads, no console errors (F12 → Console)

### 2. PageFly

1. Settings → Apps → **PageFly**
2. Delete → confirm
3. Smoke test: homepage, one product page, cart

### 3. Zipify OCU (optional — evaluate first)

Zipify handles checkout upsells. Remove only if you are not using one-click upsells.

1. Settings → Apps → **Zipify** / **OneClickUpsell**
2. Delete → confirm
3. Smoke test: add to cart → checkout (test mode) — confirm no broken upsell step

---

## Round 2 — Evaluate before removing

| App | Remove if… | Keep if… |
|-----|------------|----------|
| **Searchanise** | Native Shopify search is enough | You rely on their filters/facets |
| **Essential Announcement Bar** | Using theme announcement bar | You need app-specific scheduling |
| **Order Value Booster** | Gift strip in theme covers free-shipping messaging | You need dynamic cart bar at checkout |
| **Loox** | Not displaying reviews | Reviews widget is active on PDPs |
| **ReCharge** | No subscriptions | You sell subscription products |
| **Affirm** | No BNPL needed | Pay-over-time messaging required |
| **Appikon Back in Stock** | No waitlist flows | Back-in-stock alerts are active |
| **Stape** | Not using server-side GTM | Analytics pipeline depends on it |

For each app you remove: **Delete → smoke test home + PDP + cart + checkout**.

---

## Round 3 — Post-removal audit

| Check | Where |
|-------|-------|
| Orphaned script errors | Browser console on homepage |
| Checkout extensions | Settings → Checkout → Customize |
| Webhooks | Settings → Notifications → Webhooks — delete dead app URLs |
| Old themes | Online Store → Themes — delete duplicates after 30 days |
| Pixels still firing | Settings → Customer events / Meta / Google |

---

## Rollback

If something breaks after removing an app:

1. **Reinstall** from Shopify App Store
2. Or **publish** old theme: Online Store → Themes → **DISURI BEAUTY** → Publish

---

## Quick reference — apps detected on old live theme

See [app-inventory.md](./app-inventory.md) for the full scan from 2026-06-24.

**Priority removals:** GemPages, PageFly  
**Store-level (may persist after theme change):** Zipify web pixels, Klaviyo, Loox, ReCharge, Affirm, Stape, Google/Meta pixels — keep unless explicitly replacing.
