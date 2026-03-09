# DISURI Beauty -- Tax Risk Triage Memo

> **Audit lens:** Accenture (Process and Systems) + Bain (Cash and Performance)
>
> **Purpose:** Identify all outstanding tax obligations, penalties, and filing gaps, then create a clear remediation path and a sustainable compliance workflow.

---

## Current Tax Risk Assessment

### Risk Level: HIGH

**Known issues:**
- Quarterly sales-tax filings have been missed
- Penalties have been assessed
- Filing workflow between Shopify sales data and state tax portal is not established

---

## A. Sales Tax Filing Gap Analysis

### Filing Status by Quarter

| Filing Period | Due Date | Filed? | Amount Owed | Amount Paid | Penalty Assessed | Interest | Status |
|---------------|----------|--------|-------------|-------------|-----------------|----------|--------|
| Q1 [Year] (Jan-Mar) | Apr 30 | YES / NO | $ | $ | $ | $ | |
| Q2 [Year] (Apr-Jun) | Jul 31 | YES / NO | $ | $ | $ | $ | |
| Q3 [Year] (Jul-Sep) | Oct 31 | YES / NO | $ | $ | $ | $ | |
| Q4 [Year] (Oct-Dec) | Jan 31 | YES / NO | $ | $ | $ | $ | |
| Q1 [Year] (Jan-Mar) | Apr 30 | YES / NO | $ | $ | $ | $ | |
| Q2 [Year] (Apr-Jun) | Jul 31 | YES / NO | $ | $ | $ | $ | |
| Q3 [Year] (Jul-Sep) | Oct 31 | YES / NO | $ | $ | $ | $ | |
| Q4 [Year] (Oct-Dec) | Jan 31 | YES / NO | $ | $ | $ | $ | |

> **Instructions:** Fill in from the sales-tax notice/screenshot and any filing records. Mark each quarter's status.

### Total Exposure

| Item | Amount |
|------|--------|
| Total sales tax owed (unfiled periods) | $ |
| Total penalties assessed | $ |
| Total interest accrued | $ |
| **Total tax liability** | **$** |

---

## B. Nexus Analysis

Sales tax must be collected and remitted in states where the business has "nexus" (a tax obligation). For an ecommerce product business, nexus is typically created by:

1. **Physical presence** in a state (your home state if operating from there)
2. **Economic nexus** thresholds (varies by state, typically $100K in sales or 200 transactions)

### Nexus Determination

| State | Physical Presence? | Sales Volume | Transaction Count | Nexus Triggered? | Registered? | Filing Required? |
|-------|-------------------|-------------|-------------------|------------------|-------------|-----------------|
| [Home state] | YES | $ | | YES | YES / NO | YES |
| | NO | $ | | YES / NO | YES / NO | YES / NO |
| | NO | $ | | YES / NO | YES / NO | YES / NO |

> **Action:** For a pre-revenue or very-low-revenue business, nexus is likely limited to the home state. Confirm by reviewing Shopify order destinations.

---

## C. Shopify Sales Tax Collection Audit

Verify that Shopify is configured correctly to collect sales tax:

| Check | Status | Notes |
|-------|--------|-------|
| Sales tax collection is enabled in Shopify | [ ] Verified | |
| Tax rates are correct for the home state | [ ] Verified | |
| Tax is being charged on all taxable products | [ ] Verified | |
| Tax-exempt products (if any) are correctly marked | [ ] Verified | |
| Shopify Tax reporting matches amounts collected | [ ] Verified | |
| Collected tax is visible in Shopify Finance reports | [ ] Verified | |

### How to Verify in Shopify

1. Go to **Settings > Taxes and duties**
2. Confirm the home state is listed with the correct tax rate
3. Go to **Analytics > Reports > Taxes**
4. Export the tax report for each quarter
5. Compare collected amounts to what should have been filed

---

## D. Remediation Plan

### Immediate Actions (This Week)

| # | Action | Deadline | Owner | Status |
|---|--------|----------|-------|--------|
| 1 | Upload sales-tax notice screenshot to `source-docs/tax-notices/` | Immediate | Founder | [ ] |
| 2 | Log in to state tax portal and document all unfiled periods | Immediate | Founder | [ ] |
| 3 | Export Shopify tax reports for every quarter since business opened | Immediate | Founder | [ ] |
| 4 | Calculate total tax collected but not remitted | This week | Founder | [ ] |
| 5 | Calculate total penalties and interest | This week | Founder | [ ] |

### Short-Term Actions (Next 2 Weeks)

| # | Action | Deadline | Owner | Status |
|---|--------|----------|-------|--------|
| 6 | File all delinquent returns with correct amounts | 2 weeks | Founder | [ ] |
| 7 | Pay outstanding tax owed (principal, not penalties yet) | 2 weeks | Founder | [ ] |
| 8 | Request penalty abatement if this is the first offense (many states allow this) | 2 weeks | Founder | [ ] |
| 9 | Set up calendar reminders for future quarterly deadlines | 2 weeks | Founder | [ ] |
| 10 | Verify Shopify tax collection settings are correct going forward | 2 weeks | Founder | [ ] |

### Ongoing (Quarterly)

| # | Action | Frequency | Notes |
|---|--------|-----------|-------|
| 11 | Export Shopify tax report on the 1st of the month after quarter ends | Quarterly | |
| 12 | File state sales-tax return before the deadline | Quarterly | |
| 13 | Set aside collected sales tax in a dedicated Mercury sub-account or reserve | Ongoing | |
| 14 | Reconcile tax collected vs. tax remitted each quarter | Quarterly | |

---

## E. Penalty Abatement Strategy

Most states will abate (forgive) penalties for first-time filers who voluntarily come into compliance. The typical process:

1. **File all delinquent returns** with accurate amounts
2. **Pay all tax owed** (principal amount)
3. **Write a penalty abatement request** citing:
   - First-time offense
   - Voluntary disclosure (you are coming forward, not being audited)
   - Good faith effort to comply going forward
   - Small business / sole proprietor circumstances
4. **Submit the request** through the state tax portal or by mail
5. **Follow up** within 30 days if no response

### Penalty Abatement Letter Template

```
[Date]
[State Tax Authority Name]
[Address]

Re: Penalty Abatement Request
    Account Number: [Your sales tax ID]
    Filing Periods: [List delinquent quarters]

Dear [Tax Authority]:

I am writing to request abatement of penalties assessed on the above-referenced
account for the filing periods listed. I am the sole member of [DISURI Beauty LLC],
a small business that began operations on [date].

As a first-time business owner operating without accounting staff, I failed to
file quarterly sales tax returns on time. I take full responsibility for this
oversight. I have now:

1. Filed all delinquent returns with accurate tax amounts
2. Paid all tax principal owed in full
3. Established a quarterly filing calendar and compliance system to prevent
   future delinquencies

I respectfully request that the penalties totaling $[amount] be abated under
the reasonable cause / first-time abatement provisions. The underlying tax
has been paid in full, and I am committed to timely compliance going forward.

Thank you for your consideration.

Sincerely,
[Your Name]
[DISURI Beauty LLC]
[EIN]
[Contact Information]
```

---

## F. Sales Tax Reserve System

To prevent future delinquencies, establish a tax reserve:

1. **In Mercury, create a separate savings account or use the "Vaults" feature** labeled "Sales Tax Reserve"
2. **Every time a Shopify payout hits Mercury, transfer the sales tax portion** into the reserve
   - Formula: Payout amount x (tax rate / (1 + tax rate)) = approximate tax collected
   - Or use the exact amount from Shopify's tax report
3. **Do not spend from the reserve** for any purpose other than tax payments
4. **Quarterly, transfer from the reserve to pay the sales tax filing**

---

## G. Federal Tax Considerations (Single-Member LLC)

As a single-member LLC, federal income tax is reported on Schedule C of the personal 1040. Key items:

| Item | Status | Notes |
|------|--------|-------|
| EIN obtained | [ ] YES / [ ] NO | Needed for hiring, bank accounts |
| Estimated quarterly income tax payments needed? | [ ] YES / [ ] NO | Only if expecting net profit > $1,000 |
| Schedule C filed for prior tax year(s)? | [ ] YES / [ ] NO | Even if the business had a loss, it should be reported |
| Self-employment tax obligation understood? | [ ] YES / [ ] NO | 15.3% on net self-employment income |
| Business use of home deduction applicable? | [ ] YES / [ ] NO | If operating from home |

> **Note:** If the business has operated at a loss (which is likely given pre-revenue status), reporting the loss on Schedule C may reduce personal income tax owed. Consult a tax professional to confirm.

---

## H. Professional Help Decision

| Question | Answer |
|----------|--------|
| Total tax liability (including penalties) exceeds $5,000? | YES / NO |
| More than 2 states have nexus? | YES / NO |
| Prior-year federal returns did not include Schedule C? | YES / NO |
| Unsure whether sales tax was collected correctly in Shopify? | YES / NO |

**If 2 or more answers are YES:** Engage a CPA or tax professional for the remediation phase. The cost ($500-2,000) is justified to avoid compounding errors.

**If all answers are NO:** Self-remediation using this guide is feasible. File the returns, pay the tax, request abatement, and set up the reserve system.
