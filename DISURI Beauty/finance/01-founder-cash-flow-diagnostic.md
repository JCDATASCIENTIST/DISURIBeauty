# DISURI Beauty -- Founder Cash-Flow Diagnostic

> **Audit lens:** Bain (Cash and Performance) + McKinsey (Strategic Viability)
>
> **Purpose:** Reconstruct the complete picture of founder capital, spending, and runway so that every future decision starts from an accurate baseline.

---

## A. Founder Capital Reconstruction

### Total Founder Investment

| Date | Source | Amount | Classification | Notes |
|------|--------|--------|----------------|-------|
| [Initial] | Personal funds (real estate proceeds) | $150,000.00 | Owner Contribution | Original capitalization |
| | | | | |
| | | | | |
| **TOTAL** | | **$150,000.00** | | |

> **Instructions:** Add every transfer from personal accounts to the business account. Each row must have a date, source, amount, and classification. Pull dates from Mercury transaction history.

### Capital Classification Rules

- **Owner Contribution:** Cash transferred from personal accounts to business accounts for business use. This is equity, not a loan.
- **Owner Reimbursement:** Business paying the owner back for a specific, documented business expense paid with personal funds.
- **Owner Draw / Distribution:** Cash taken from the business for personal use. Must be tracked separately.
- **Personal Leakage:** Business funds spent on non-business items. Must be identified and reclassified.

---

## B. Spending Category Breakdown

Classify every Mercury transaction into one of these categories. If a transaction does not fit, flag it for review.

### Category Definitions

| Category | Code | What It Includes |
|----------|------|------------------|
| Inventory & Production | INV | Raw materials, manufacturing, packaging, labeling |
| Fulfillment & Shipping | FUL | Shipping supplies, postage, 3PL fees |
| Software & Tools | SFT | Shopify, Mercury, domain, email, design tools, subscriptions |
| Marketing & Advertising | MKT | Paid ads, influencer payments, PR, content creation |
| Professional Services | PRO | Accountant, lawyer, consultant, bookkeeper |
| Insurance | INS | General liability, product liability |
| Tax Payments | TAX | Sales tax remitted, estimated income tax, penalties |
| Operating Overhead | OVR | Office supplies, storage, miscellaneous business costs |
| Owner Contribution (IN) | OCI | Personal money transferred into business |
| Owner Draw (OUT) | ODR | Business money transferred to personal |
| Personal / Unclassified | PER | Non-business or unidentifiable spending -- must be resolved |

### Transaction Classification Worksheet

| Date | Description | Amount | Category Code | Verified? | Notes |
|------|-------------|--------|---------------|-----------|-------|
| | | | | [ ] | |
| | | | | [ ] | |
| | | | | [ ] | |

> **Instructions:** Export Mercury CSV. For each transaction, assign a category code. Flag anything uncertain as PER and resolve during monthly close.

---

## C. Monthly Burn Analysis

### Monthly Spend Summary Template

| Month | INV | FUL | SFT | MKT | PRO | INS | TAX | OVR | ODR | PER | TOTAL OUT | Revenue In | Net Cash Flow |
|-------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----------|------------|---------------|
| [M1] | | | | | | | | | | | | | |
| [M2] | | | | | | | | | | | | | |
| [M3] | | | | | | | | | | | | | |
| [M4] | | | | | | | | | | | | | |
| [M5] | | | | | | | | | | | | | |
| [M6] | | | | | | | | | | | | | |

### Key Metrics to Calculate

| Metric | Formula | Value |
|--------|---------|-------|
| Average monthly burn | Total spending / number of months operating | $ |
| Fixed monthly costs | Sum of recurring charges (SFT + INS + storage) | $ |
| Variable monthly costs | Total burn minus fixed costs | $ |
| Current cash balance | Mercury balance as of today | $ |
| Remaining runway (months) | Current cash balance / average monthly burn | months |
| Total founder capital invested | Sum of all OCI transactions | $ |
| Total revenue earned | Sum of all Shopify payouts received | $ |
| Founder capital efficiency | Total revenue / total capital invested | % |

---

## D. Cash Position Snapshot (Fill In Today)

| Item | Amount | Source |
|------|--------|--------|
| Mercury checking balance | $ | Mercury dashboard |
| Mercury savings balance (if any) | $ | Mercury dashboard |
| Pending Shopify payouts | $ | Shopify Payments |
| Outstanding payables (bills due) | $ | Manual list |
| Sales-tax liability (estimated owed) | $ | Tax notice / calculation |
| Inventory on hand (at cost) | $ | Inventory worksheet |
| **Net liquid position** | **$** | Balance minus payables minus tax owed |

---

## E. Bain Diagnostic: Where Did the $150,000 Go?

This section traces the original investment to its current state. Fill in after classifying all transactions.

```
$150,000 Original Investment
    |
    |-- $ _______ Inventory & Production (still on hand or sold)
    |-- $ _______ Fulfillment & Shipping
    |-- $ _______ Software & Tools
    |-- $ _______ Marketing & Advertising
    |-- $ _______ Professional Services
    |-- $ _______ Insurance
    |-- $ _______ Tax Payments & Penalties
    |-- $ _______ Operating Overhead
    |-- $ _______ Owner Draws / Personal
    |-- $ _______ Unclassified / Leakage
    |
    = $ _______ Remaining Cash (Mercury balance)
    + $ _______ Inventory at Cost (still sellable)
    ------------------------------------------
    = $ _______ Total Accounted For
    = $ _______ Unaccounted Gap (should be $0)
```

---

## F. McKinsey Diagnostic: Structural Overbuild Assessment

Answer each question after completing the spending breakdown:

1. **Was the initial $150,000 proportional to the business stage?**
   - What percentage went to inventory vs. operating infrastructure?
   - Could the same launch have been achieved with 50% less capital?

2. **Is there excess inventory relative to sales velocity?**
   - Months of inventory on hand = (inventory at cost) / (monthly COGS from orders)
   - If > 12 months of inventory, the business is structurally overbought

3. **Are there ongoing costs that presume a revenue level the business has not reached?**
   - List any subscription, tool, or service that would only be justified at >$5K/month revenue

4. **One-time vs. ongoing cost separation:**

| Category | One-Time Setup Cost | Ongoing Monthly Cost |
|----------|--------------------|--------------------|
| Inventory | $ | $ |
| Branding / Design | $ | $ |
| Website / Shopify | $ | $ |
| Legal / Formation | $ | $ |
| Marketing | $ | $ |
| Other | $ | $ |

---

## G. Decision Gates

Based on the diagnostic, the business falls into one of three states:

### State 1: Viable -- Continue with Controls
- Runway > 6 months
- Clear path to first meaningful revenue
- Burn is manageable and mostly variable
- **Action:** Implement operating system, reduce discretionary spend, push for revenue

### State 2: At Risk -- Restructure Spending
- Runway 2-6 months
- Revenue is minimal or zero
- Fixed costs are too high for the business stage
- **Action:** Cut all non-essential spending, pause marketing until unit economics are proven, focus exclusively on selling existing inventory

### State 3: Critical -- Reduce Scope
- Runway < 2 months
- No revenue traction
- Continuing to invest personal funds is unsustainable
- **Action:** Liquidate excess inventory, cancel all non-essential subscriptions, stop new investment until a clear revenue model is validated

> **After filling in all sections above, determine which state applies and proceed accordingly.**
