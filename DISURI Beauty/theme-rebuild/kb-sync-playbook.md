# KB Sync Playbook

**Scope:** DISURIBeauty ops repo only. KB lives in the `reference/kb` git submodule (`JCDATASCIENTIST/obsidian-vault`).

## Copy pipeline

```
Obsidian vault (reference/kb)
  → scripts/sync-kb.mjs
  → DISURI Beauty/design-kit/claude-design/catalog.js
  → theme disuri-catalog-* snippets (fallbacks)
  → scripts/update-product-descriptions.mjs → Shopify Admin
```

Author in KB. Sync to catalog. Push to Shopify separately.

---

## Submodule setup

**Fresh clone:**

```bash
git clone --recurse-submodules https://github.com/JCDATASCIENTIST/DISURIBeauty.git
```

**Existing clone:**

```bash
git submodule update --init --recursive
```

**Update KB to latest vault commit:**

```bash
git submodule update --remote reference/kb
```

---

## KB markdown spec

Product files: `reference/kb/3-Resources/DISURI-Beauty-Knowledge-Base/6-Product-Library/<Product-Name>.md`

```markdown
---
catalogId: snail
name: "Ultimate Snail Mucin Cream"
price: 34.99
size: "50 g · 1.76 oz"
eyebrow: "Barrier · Bestseller"
---

## Benefit
92% snail secretion filtrate at 1,000 ppm...

## Benefit (ES)
92% de filtrado de caracol...

## Ingredients
92% Snail Secretion Filtrate (1,000 ppm) · ...

## Ingredients (ES)
92% Filtrado de Caracol (1,000 ppm) · ...

## Usage
- Cleanse with Triple Collagen Firming Foam.
- Prep with Triple Collagen Firming Toner.
- Massage cream upward, AM & PM.

## Compliance
Helps improve the appearance of a stronger barrier...
```

**Parser rules:**

| Source | catalog.js field |
|--------|------------------|
| Frontmatter `name`, `price`, `size`, `eyebrow`, `subtitle` | same key |
| `## Benefit` | `benefit` |
| `## Benefit (ES)` | `benefitEs` |
| `## Ingredients` | `ingredients` |
| `## Ingredients (ES)` | `ingredientsEs` |
| `## Usage` (bullet list) | `usage[]` |
| `## Compliance` | `compliance` |
| `## Description` | `description` (bundles only) |

Missing sections are skipped — sync does not blank existing catalog fields.

---

## Sync commands

| Command | Purpose |
|---------|---------|
| `node scripts/sync-kb.mjs --dry-run` | Preview diffs (default) |
| `node scripts/sync-kb.mjs --product snail --dry-run` | One SKU |
| `node scripts/sync-kb.mjs --allow-write` | Patch `catalog.js` |
| `node scripts/sync-kb.mjs --allow-write --verify` | Patch + Shopify verify |
| `node scripts/sync-kb.mjs --scaffold-kb --allow-write` | Bootstrap KB files from catalog |

---

## Full workflow (KB edit → live store)

1. Edit product MD in Obsidian vault; commit + push **obsidian-vault** repo.
2. In DISURIBeauty: `git submodule update --remote reference/kb`
3. `node scripts/sync-kb.mjs --dry-run` — review output
4. `node scripts/sync-kb.mjs --allow-write` — patch catalog.js
5. `node scripts/update-product-descriptions.mjs --dry-run` — preview Shopify HTML
6. Joel confirms → `node scripts/update-product-descriptions.mjs --allow-mutations`
7. If theme liquid fallbacks need updating, push theme repo separately.

---

## Product map (catalogId → KB file)

| catalogId | KB file | Shopify handle |
|-----------|---------|----------------|
| snail | Ultimate-Snail-Mucin-Cream.md | disuri-beauty-ultimate-snail-mucin-cream |
| collagen | Triple-Collagen-Firming-Cream.md | triple-collagen-firming-cream |
| ha | Hyaluronic-Acid-Intense-Hydration-Cream.md | hyaluronic-acid-intense-hydration-firming-cream |
| toner | Triple-Collagen-Firming-Toner.md | triple-collagen-firming-toner |
| foam | Triple-Collagen-Firming-Foam.md | triple-collagen-korean-face-wash |
| eye | Triple-Collagen-Firming-Eye-Cream.md | triple-collagen-eye-cream-korean-anti-aging |
| essence | Triple-Collagen-Firming-Essence.md | triple-collagen-firming-essence |
| `6-Product-Library/Bundle-Complete-DISURI-System.md` | complete-system | the-complete-disuri-system |
| `6-Product-Library/Bundle-Anti-Aging-Power-Duo.md` | anti-aging-duo | the-anti-aging-power-duo |
| `6-Product-Library/Bundle-Barrier-Rescue-System.md` | barrier-rescue | the-barrier-rescue-system |

**Vault format (v2 parser):** reads `## The Product`, `## Ingredient Profile`, `## How to Use` from EN files; merges `.es.md` companions for Spanish fields. Optional `KB_ROOT=/path/to/Obsidian Vault` for local authoring without submodule update.

Map source of truth: `scripts/kb-sync-map.json`

---

## What NOT to do

- Do not duplicate KB markdown into DISURIBeauty outside `reference/kb`
- Do not embed KB copy in theme `.liquid` files
- Do not auto-push Shopify — Joel runs mutations explicitly
- Do not touch **thehub-business** for this workflow

---

## Commit message template

```
chore: sync product copy from KB

- Updated catalog.js from reference/kb @ <short-sha>
- Products: snail, collagen
Source: DISURI-Beauty-Knowledge-Base/6-Product-Library
```

---

## Vault note (2026-07-01)

The obsidian-vault submodule currently has the KB index scaffold (`0-KB-Index.md`) but product files live under `6-Product-Library/` per the sync map. Run `--scaffold-kb --allow-write` once to bootstrap all 10 files from live `catalog.js`, then commit those files in the **obsidian-vault** repo.
