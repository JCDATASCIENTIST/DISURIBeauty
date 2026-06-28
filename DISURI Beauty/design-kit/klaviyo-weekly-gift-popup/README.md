# Klaviyo Weekly Gift Popup — Figma / Klaviyo design spec

Pixel-perfect reference for the live Klaviyo popup. Matches [`klaviyo-weekly-gift-build-sheet.md`](../../theme-rebuild/klaviyo-weekly-gift-build-sheet.md).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Three artboards: desktop signup, desktop success, mobile signup |

## Tokens (Claude Design)

| Token | Hex | Use |
|-------|-----|-----|
| Porcelain | `#F4F2EE` | Modal background |
| Crimson | `#B82024` | Primary button |
| Noir | `#2A2A2A` | Headline |
| Body | `#5C5C5C` | Body copy |
| Eyebrow | `#6B6B6B` | Eyebrow + trust line |
| Overlay | `rgba(0,0,0,0.4)` | Backdrop |

**Fonts:** Bodoni Moda (headline), Cabin (UI/body) — same Google Font substitutes as Klaviyo.

**This week's gift image:** Forbidden Red lip gloss (600px CDN URL in HTML).

## Import to Figma

1. Open `index.html` in Chrome (file:// or local server).
2. In Figma: create a file → **Plugins → Import html.to.design** or use Figma MCP `generate_figma_design` with a local URL once a target file exists.
3. Or screenshot each artboard at 2× and place as reference frames.

## Klaviyo admin

Paste copy from build sheet Section A4/A5. Upload gift image from HTML `src` URL into Klaviyo's image block.
