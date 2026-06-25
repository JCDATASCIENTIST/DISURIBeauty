# App Inventory — DISURI Beauty Live Store

Scanned from live storefront HTML (`disuribeauty.com`, 2026-06-24).  
**Theme is now live.** Remove legacy apps when ready — the new theme no longer loads GemPages/PageFly assets on the storefront.

## Safe to remove (page builders / legacy theme tooling)

| App | Evidence on live site | Notes |
|-----|----------------------|-------|
| **GemPages** | `gempages-cro-137` extension assets | Page builder tied to old Dawn theme |
| **PageFly** | `pagefly-page-builder-292` (many assets) | Page builder — new theme replaces homepage |
| **Zipify OCU** | `ocu-in-checkout-1008`, `zipify-cart-drawer.js` | Upsell / cart drawer — evaluate if still needed post-launch |

## Evaluate before removing

| App | Evidence | Keep if… |
|-----|----------|----------|
| **Searchanise** | `searchanise-23` | You rely on their search/filter UX (native search may suffice) |
| **Essential Announcement Bar** | `essential-announcement-bar-113` | Rebuild announcement in theme or keep app |
| **Order Value Booster (free shipping bar)** | `order-value-booster-272` | Gift strip in new theme covers messaging; verify checkout bar |
| **Loox** | Referenced in page | Active review collection / widgets in use |
| **ReCharge** | Referenced in page | Selling subscriptions |
| **Affirm** | `affirm-pay-over-time-messaging-9` | BNPL messaging required |
| **Appikon Back in Stock** | `appikon-back-in-stock-19` | Waitlist flows active |
| **Stape (server-side tracking)** | `stape-remix-46` | GTM/server-side analytics in use |

## Uninstall steps

1. **Settings → Apps and sales channels**
2. Uninstall one app at a time (no bulk API)
3. After each removal, smoke-test: home, PDP, cart, checkout (test mode)
4. See [app-removal-checklist.md](./app-removal-checklist.md) for post-removal audit

## New theme impact

The Skeleton-based theme does **not** embed GemPages, PageFly, or Zipify snippets. Those apps only affect the **current live theme** until uninstalled store-wide (checkout extensions may persist).
