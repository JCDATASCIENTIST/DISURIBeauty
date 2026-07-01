# Logo audit — DISURI Beauty (2026-06-29, corrected)

**Source of truth:** Claude Design kit → `Downloads/DISURI Beauty Design System/assets/logos/` (now mirrored in `design-kit/assets/logos/` and theme `assets/disuri-*.png`).

## Variant map (background → file)

| Surface | Background | Kit file | Theme asset | Notes |
|---------|------------|----------|-------------|-------|
| **Header nav** | White `#FFFFFF` | `wordmark-light.png` | `disuri-wordmark-light.png` | Text-only wordmark, transparent PNG, noir type. **28px** tall via CSS. |
| **Footer** | Porcelain `#F4F2EE` | `primary-light.png` | `disuri-primary-light.png` | Stacked icon + DISURI BEAUTY, transparent PNG. **88px** tall via CSS. |
| **Favicon** | Browser chrome | `favicon.png` | `disuri-favicon.png` | Red D mark on neutral field. |
| **Dark bands** (gift strip, science strip, Klaviyo noir header) | Noir `#2A2A2A` | `primary-reverse.png` | `disuri-primary-reverse.png` | White/reversed mark — **never** on white/porcelain. |
| **Icon-only** (app icon, small marks) | Varies | `icon-light.png` / `icon-dark.png` | — | Reserve for future PWA / social. |

## Files you uploaded — do / don't use

| File | Verdict | Why |
|------|---------|-----|
| `wordmark-light.png` (kit) | ✅ Nav | Transparent, noir text — correct on white. |
| `primary-light.png` (kit) | ✅ Footer + light emails | Transparent, full-color stacked logo. |
| `primary-reverse.png` (kit) | ✅ Dark sections / email noir band | White logo for dark backgrounds. |
| `PrimaryLogo_73470` (brand guide) | ⚠️ Backup only | High-res transparent primary; same art as `primary-light`, use kit export for web. |
| `PrimaryLogo_16522` (150×150) | ❌ Too small | Thumbnail only. |
| `StackedName_92460` | ❌ Do not use | Opaque black plate; export appears corrupted / wrong contrast. |
| `White-reversed_21647` | ⚠️ Similar to `primary-reverse` | Opaque black square; prefer kit `primary-reverse.png` (transparent). |
| `Black_83877` / `Grayscale_10792` | ❌ Social / special use only | Solid black squares, not for storefront. |
| **`Logo_1.svg`** (old Dawn) | ❌ Removed | Wrong horizontal mark — was on live header. |
| **`disuri-beauty-skincare-brand.png`** (Shopify Files) | ❌ Removed | Wrong export — white plate, not kit primary. |
| **`disuri-beauty-skincare-brand-footer-logo.png`** | ❌ Never footer | Opaque black background baked in. |

## Live storefront (after fix)

Theme assets load from `/cdn/shop/t/161833353455/assets/` — Theme Editor logo pickers are **cleared** so kit defaults always win unless you override intentionally.

Verify: hard refresh [disuribeauty.com](https://disuribeauty.com) (`Cmd+Shift+R`).

## Klaviyo email masthead URLs

After theme push, use theme CDN (update if theme ID changes):

```
Light email body (porcelain/white):
https://disuribeauty.com/cdn/shop/t/161833353455/assets/disuri-primary-light.png

Dark header band (#2A2A2A):
https://disuribeauty.com/cdn/shop/t/161833353455/assets/disuri-primary-reverse.png
```

Paste block: `theme-rebuild/klaviyo-email-logo-masthead.html`

## Do not use in Theme Editor

Avoid re-uploading old Shopify Files logos via Header/Footer image pickers — that bypasses the kit defaults and reintroduces wrong marks.
