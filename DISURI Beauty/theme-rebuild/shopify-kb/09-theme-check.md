# Theme Check

Source: https://shopify.dev/docs/storefronts/themes/tools/theme-check

Theme Check is a Liquid linter that detects errors and enforces Shopify theme best practices.

## Run locally

```bash
shopify theme check
```

## What it checks

- Syntax errors in Liquid
- Missing templates and required files
- Deprecated tags and filters
- Performance anti-patterns
- Accessibility issues
- Schema validation errors

## Configuration

`.theme-check.yml` in theme root:

```yaml
extends: theme-check:recommended
ignore:
  - node_modules/**
```

## CI integration

Add to GitHub Actions in theme repo:

```yaml
- run: npm install -g @shopify/cli
- run: shopify theme check
```

## DISURI QA gate

Theme must pass `shopify theme check` with zero **errors** before `theme push` to production store.

Reference: https://shopify.dev/docs/storefronts/themes/tools/theme-check/configuration
