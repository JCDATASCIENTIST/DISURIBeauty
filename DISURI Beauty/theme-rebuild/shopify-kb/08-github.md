# GitHub Integration for Themes

Source: https://shopify.dev/docs/storefronts/themes/tools/github

## What it does

- Two-way sync between GitHub branch and Shopify theme
- Admin edits commit back to GitHub automatically
- Enables version control, PR reviews, CI (Theme Check, Lighthouse)

## Setup

1. Install [Shopify GitHub app](https://github.com/apps/shopify-online-store) on your GitHub org/repo
2. Online Store → Themes → **Add theme** → **Connect from GitHub**
3. Select repo and branch
4. Theme syncs on every push to branch

## Branch strategy (recommended)

| Branch | Connected to | Purpose |
|--------|--------------|---------|
| `main` | Published production theme | Stable releases |
| `develop` | Unpublished preview theme | Active development |
| `feature/*` | Temporary dev themes | Feature branches |

## Important constraints

- Only supports standard Shopify theme folder structure
- If using a build pipeline (Sass, etc.), use a deploy branch for compiled output
- Collaborator accounts **cannot** set up GitHub integration — need staff account

## DISURI setup

Theme repo: `/Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme`

After go-live, connect `main` branch to the published DISURI theme for ongoing sync.

Reference: https://shopify.dev/docs/storefronts/themes/best-practices/version-control
