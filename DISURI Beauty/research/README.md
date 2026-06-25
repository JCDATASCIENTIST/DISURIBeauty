# DISURI research library (Phase 2 live)

Curated peer-reviewed sources for the **consultant UX** on `/collections/skincare` and homepage skin guide. Ingested via [Consensus MCP](https://mcp.consensus.app/mcp) on 2026-06-25 (Pro tier).

## Status

| Field | Value |
|-------|--------|
| **Approval** | **Synced** — 28 sources approved 2026-06-25 for Phase 2 theme panel |
| **Storefront** | Live via `assets/disuri-research-library.json` + collection filter education panel + homepage skin guide research blocks |
| **Sources** | 28 curated papers across 16 filter handles + 6 ingredients |
| **Compliance** | Appearance-only language; cosmetics disclaimer on all surfaces |

## Files

| File | Purpose |
|------|---------|
| `taxonomy.json` | Filter handle labels (EN/ES) + disclaimer |
| `research-library.json` | Master source list with tags, summaries, Consensus URLs |
| `education-copy.json` | Filter-level intro copy (EN/ES) for collection education panel |
| `../scripts/build-research-asset.mjs` | Compiles ops JSON → theme asset (strips em dashes) |

## Rebuild theme asset

```bash
cd DISURIBeauty
node scripts/build-research-asset.mjs
# writes ../DISURI-Beauty-Theme/assets/disuri-research-library.json
```

Use `--approved-only` after adding new sources that need founder review before sync.

## Theme mapping (Phase 2 — live)

```
?filter=concern-firmness  →  education panel headline/intro  +  up to 3 Consensus sources
```

Rendered by `sections/collection.liquid` + `assets/disuri-collection-filter.js`, and `sections/skin-guide.liquid` + `assets/disuri-skin-guide.js` (homepage concern tabs). All outbound links: `target="_blank" rel="noopener noreferrer"`.
