# Go Live Runbook — DISURI Beauty Theme

**Status:** Theme v1 **published live** (ID `161833353455`). Previous theme `DISURI BEAUTY` is unpublished (rollback).

## Preview links

- Storefront: https://7874da-0f.myshopify.com?preview_theme_id=161833353455
- Theme editor: https://7874da-0f.myshopify.com/admin/themes/161833353455/editor

## Pre-flight (before publish)

- [x] Theme passes `shopify theme check` with zero errors
- [x] Published to `7874da-0f.myshopify.com` as **DISURI Beauty Theme v1**
- [x] Homepage, collection, product pages verified on live site
- [x] Collections assigned (`skincare`, `bundles`, `new-bestsellers`)
- [ ] Spanish locale tested (`?locale=es`)
- [ ] Stakeholder sign-off on design

## Re-push after local changes

```bash
cd /Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme
bash scripts/push-unpublished.sh
```

Uses theme ID `161833353455` (in-place update). Avoid `--unpublished` on re-push — it creates duplicate themes.

## Publish

When approved:

```bash
npx @shopify/cli@latest theme publish --theme 161833353455 --store 7874da-0f.myshopify.com
```

Or in admin: **Online Store** → **Themes** → **Publish**

## Rollback

Keep the previous live theme (`DISURI BEAUTY`) unpublished for instant rollback:

1. Online Store → Themes
2. Find old theme → **Publish**

## Post-publish

1. Run [app-uninstall-walkthrough.md](./app-uninstall-walkthrough.md) (step-by-step)
2. Enable Spanish: **Settings → Languages → Add Spanish → Publish**
3. Connect GitHub integration (optional): Themes → Add theme → Connect from GitHub
4. Delete old development themes after 30-day rollback window

## Current store themes (as of setup)

| Theme | Role |
|-------|------|
| DISURI BEAUTY | Live (rollback) |
| DISURI BEAUTY — Claude Redesign | Unpublished (previous attempt) |
| Development | Dev preview from CLI |

New theme will be pushed as **DISURI Beauty Theme v1**.
