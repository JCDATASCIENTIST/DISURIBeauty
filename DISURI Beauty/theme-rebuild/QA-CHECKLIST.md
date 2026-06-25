# QA Checklist — DISURI Beauty Theme v1

**Theme:** `161833353455` · **Store:** disuribeauty.com  
**SDLC phase:** Stabilization & sign-off (post-implementation QA)

Run automated checks first:

```bash
cd /Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme
npx @shopify/cli@4.2.0 theme check
bash scripts/smoke-test.sh https://disuribeauty.com
```

Hard refresh (`Cmd+Shift+R`) before manual browser QA.

## Automated (CI / smoke)

| Check | Command / signal |
|-------|------------------|
| Theme Check zero errors | `theme check` |
| Homepage 200 | smoke-test |
| Collection 10 SKUs + filters | smoke-test |
| Cart drawer + ajax cart page | smoke-test |
| PDP add-to-cart form | smoke-test |
| Product recommendations API | smoke-test |
| ES filter chips | smoke-test |

## Manual commerce journey

| Step | Expected |
|------|----------|
| Collection → filter **collagen cream** | Only Triple Collagen Firming Cream |
| Quick-add from grid | Drawer opens, line item visible, count updates |
| PDP → qty 2 → Add to Bag | Drawer shows qty 2, subtotal correct |
| Cart icon → drawer qty +/- | Updates without page reload |
| View full bag → cart page +/- | Same totals as drawer |
| Checkout button | Reaches Shopify checkout (test mode OK) |
| Search modal → type "snail" | Predictive results, link works |

## Bilingual (ES)

| Step | Expected |
|------|----------|
| Header **ES** or `?locale=es` | UI strings in Spanish |
| Collection filter chips | Localized (e.g. crema de colágeno) |
| PDP eyebrow + compliance | Spanish catalog copy |
| Cart / drawer labels | Spanish |

## Deferred (do not block sign-off)

| Item | When |
|------|------|
| Loox reviews visible | End of Q3 — toggle **Show Loox reviews** |
| ReCharge / Affirm / Zipify | When apps re-enabled in theme editor |
| Self-hosted fonts | Optional perf pass |
| Logo upload | Theme settings → Header |

## Sign-off

- [ ] Founder / stakeholder visual approval (homepage + PDP + mobile)
- [ ] Spanish locale walkthrough complete
- [ ] Checkout test order (or payment test mode)
- [ ] Rollback theme confirmed in admin (`DISURI BEAUTY - ORGINAL COPY`)

## Next SDLC step after QA pass

1. **Tag release** in theme repo (`v1.0.0-commerce-stable`)
2. **Stakeholder sign-off** documented in PRD
3. **Post-publish cleanup:** [app-uninstall-walkthrough.md](./app-uninstall-walkthrough.md)
4. **Q3:** Enable Loox + collect reviews before toggle
5. **Optional:** GitHub Actions smoke-test on push to `main`
