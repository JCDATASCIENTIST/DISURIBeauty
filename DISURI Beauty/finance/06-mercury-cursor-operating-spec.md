# DISURI Beauty -- Mercury + Cursor Operating System Spec

> **Audit lens:** Accenture (Process and Systems) + McKinsey (Strategic Viability)
>
> **Purpose:** Define the technical architecture for a founder finance operating system that uses Mercury as the financial hub, Shopify as the revenue source, and Cursor/AI as the analysis and automation layer.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     DATA SOURCES                            │
│                                                             │
│   ┌──────────┐    ┌──────────┐    ┌───────────────────┐     │
│   │ Mercury  │    │ Shopify  │    │ Manual Inputs     │     │
│   │ (Bank)   │    │ (Sales)  │    │ (Inventory, Tax)  │     │
│   └────┬─────┘    └────┬─────┘    └────────┬──────────┘     │
│        │               │                   │                │
│        ▼               ▼                   ▼                │
│   CSV Export      CSV Export          Markdown/CSV           │
│        │               │                   │                │
└────────┼───────────────┼───────────────────┼────────────────┘
         │               │                   │
         ▼               ▼                   ▼
┌─────────────────────────────────────────────────────────────┐
│                    CURSOR WORKSPACE                         │
│                                                             │
│   finance/                                                  │
│     source-docs/                                            │
│       mercury/    <── CSV drops here                        │
│       shopify/    <── CSV drops here                        │
│     monthly-closes/   <── Generated outputs                 │
│     *.md              <── Operating documents               │
│                                                             │
│   ┌──────────────────────────────────────────┐              │
│   │         AI ANALYSIS LAYER                │              │
│   │                                          │              │
│   │  Transaction Classifier                  │              │
│   │  Monthly Close Generator                 │              │
│   │  Cash Plan Updater                       │              │
│   │  Tax Reserve Calculator                  │              │
│   │  Anomaly Detector                        │              │
│   │  Compliance Reminder                     │              │
│   └──────────────────────────────────────────┘              │
│                                                             │
│   ┌──────────────────────────────────────────┐              │
│   │         OUTPUTS                          │              │
│   │                                          │              │
│   │  Weekly cash position report             │              │
│   │  Monthly close summary                   │              │
│   │  13-week cash plan (updated)             │              │
│   │  Tax filing reminders + amounts          │              │
│   │  Spending alerts                         │              │
│   │  Decision-support analysis               │              │
│   └──────────────────────────────────────────┘              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Model

### Mercury Transaction Record

When a Mercury CSV is imported, each transaction maps to this structure:

| Field | Source | Example |
|-------|--------|---------|
| date | Mercury CSV | 2025-03-15 |
| description | Mercury CSV | "Shopify Payout" |
| amount | Mercury CSV | 1,250.00 |
| direction | Derived (positive = in, negative = out) | IN / OUT |
| category_code | AI-assigned or manual | SFT |
| category_name | Lookup from code | Software & Tools |
| verified | Manual confirmation | true / false |
| notes | Manual | "Shopify monthly plan" |
| tax_relevant | Derived | true / false |
| owner_transaction | Derived (OCI or ODR) | true / false |

### Shopify Order Record

| Field | Source | Example |
|-------|--------|---------|
| order_number | Shopify CSV | 1042 |
| order_date | Shopify CSV | 2025-03-12 |
| customer | Shopify CSV | "Jane Doe" |
| subtotal | Shopify CSV | 85.00 |
| tax_collected | Shopify CSV | 7.44 |
| shipping_charged | Shopify CSV | 5.00 |
| discount | Shopify CSV | 0.00 |
| total | Shopify CSV | 97.44 |
| payment_status | Shopify CSV | paid |
| fulfillment_status | Shopify CSV | fulfilled |
| shipping_state | Shopify CSV | CA |

### Monthly Summary Record

| Field | Derived From | Example |
|-------|-------------|---------|
| month | Aggregation period | 2025-03 |
| gross_revenue | Sum of Shopify subtotals | 2,500.00 |
| refunds | Sum of Shopify refunds | 150.00 |
| net_revenue | gross - refunds | 2,350.00 |
| cogs | Inventory worksheet | 800.00 |
| gross_profit | net_revenue - cogs | 1,550.00 |
| gross_margin_pct | gross_profit / net_revenue | 65.9% |
| total_opex | Sum of SFT+MKT+PRO+INS+OVR | 1,200.00 |
| net_cash_flow | gross_profit - total_opex | 350.00 |
| mercury_ending_balance | Mercury | 12,500.00 |
| tax_collected | Sum of Shopify tax | 218.75 |
| tax_reserve_balance | Mercury sub-account | 600.00 |
| owner_contributions | Sum of OCI transactions | 0.00 |
| owner_draws | Sum of ODR transactions | 0.00 |
| cumulative_capital | Running total | 150,000.00 |

---

## Mercury Workflow Design

### Mercury Account Structure

| Account | Purpose | Rules |
|---------|---------|-------|
| **Main Checking** | Day-to-day operations | All business spending flows through here |
| **Tax Reserve (Vault)** | Sales tax and estimated tax | DO NOT spend. Transfer tax collected here weekly. Withdraw only for tax payments. |
| **Emergency Reserve (Vault)** | 2 weeks of fixed costs | Fund to $2,500 minimum. Do not touch unless main checking drops below $1,000. |

### Mercury Transaction Tagging Convention

Use Mercury's built-in notes/memo field to tag every transaction:

```
Format: [CATEGORY_CODE] - [Brief description]

Examples:
  [INV] - Packaging order from ULine
  [SFT] - Shopify monthly plan
  [OCI] - Owner contribution for Q2 inventory
  [TAX] - CA sales tax Q1 payment
  [FUL] - USPS shipping labels batch
```

### Mercury Recurring Rules

Set up in Mercury where possible:

| Rule | What It Does | When |
|------|-------------|------|
| Auto-transfer to Tax Reserve | Move X% of each Shopify payout to Tax Reserve vault | On each Shopify payout |
| Balance alert | Notify if Main Checking drops below $3,000 | Automatic |
| Weekly digest | Review Mercury's weekly email summary | Monday |

---

## Cursor AI Workflows

These are the specific tasks that Cursor/Claude should perform when asked. Each workflow has a trigger, input, process, and output.

### Workflow 1: Transaction Classification

**Trigger:** Founder drops a new Mercury CSV export into `source-docs/mercury/`

**Input:** Mercury CSV file

**Process:**
1. Read the CSV file
2. For each transaction, suggest a category code based on the description
3. Flag transactions that cannot be confidently classified
4. Flag any transactions that look like personal spending or owner draws
5. Present the classified list for founder review

**Output:** A classified transaction table in markdown, ready to copy into the diagnostic worksheet

**Prompt pattern for Cursor:**
```
Read the Mercury CSV at finance/source-docs/mercury/[filename].csv.
Classify each transaction using these category codes:
INV, FUL, SFT, MKT, PRO, INS, TAX, OVR, OCI, ODR, PER.
Output a markdown table with columns:
Date, Description, Amount, Suggested Category, Confidence (High/Medium/Low), Notes.
Flag any transaction where confidence is Low or where the amount exceeds $500.
```

### Workflow 2: Monthly Close Generator

**Trigger:** 1st business day of the month

**Input:** Mercury CSV for prior month + Shopify orders CSV for prior month

**Process:**
1. Read both CSV files
2. Aggregate Mercury transactions by category code
3. Aggregate Shopify orders into revenue, refunds, tax collected
4. Calculate all monthly summary metrics
5. Generate the monthly close document

**Output:** A completed monthly close markdown file saved to `finance/monthly-closes/[YYYY-MM]-close.md`

**Prompt pattern for Cursor:**
```
Perform the monthly close for [Month Year].
Read Mercury transactions from finance/source-docs/mercury/[month].csv
Read Shopify orders from finance/source-docs/shopify/[month].csv
Generate the monthly financial summary following the template in
finance/05-finance-operating-rhythm.md (Monthly Financial Summary section).
Save the output to finance/monthly-closes/[YYYY-MM]-close.md.
```

### Workflow 3: Cash Plan Update

**Trigger:** Weekly Monday review

**Input:** Current Mercury balance + last week's actuals

**Process:**
1. Read the current 13-week cash plan
2. Update the current week with actuals
3. Roll the plan forward (add a new week 13)
4. Recalculate projected ending balances
5. Flag any week where projected balance drops below $5,000

**Output:** Updated 13-week cash plan with alerts

### Workflow 4: Tax Reserve Calculator

**Trigger:** After each Shopify payout or monthly

**Input:** Shopify tax report for the period

**Process:**
1. Sum all sales tax collected in the period
2. Compare to current Tax Reserve vault balance in Mercury
3. Calculate the transfer needed to bring the reserve current
4. Remind of next quarterly filing deadline

**Output:** Transfer recommendation + filing reminder

### Workflow 5: Spending Anomaly Detector

**Trigger:** Weekly or when reviewing transactions

**Input:** Mercury transaction history

**Process:**
1. Compare current week/month spending to prior periods by category
2. Flag any category where spending is > 50% above the 3-month average
3. Flag any single transaction > $500 that was not in the cash plan
4. Flag any transaction categorized as PER (personal/unclassified)

**Output:** Anomaly report with specific transactions and recommended actions

### Workflow 6: Compliance Reminder

**Trigger:** Calendar-based (2 weeks before each quarterly deadline)

**Input:** Filing calendar + current filing status

**Process:**
1. Check which quarterly filing is upcoming
2. Verify the tax reserve has sufficient funds
3. Generate a step-by-step filing checklist
4. List the Shopify tax report export needed

**Output:** Filing reminder with checklist and amount due

---

## Implementation Phases

### Phase A: Manual + AI-Assisted (Start Now)

- All workflows are triggered manually by the founder asking Cursor/Claude
- CSV exports are done manually from Mercury and Shopify
- Documents are generated as markdown in this workspace
- The founder reviews, edits, and approves all outputs

### Phase B: Semi-Automated (When Revenue > $1,000/month)

- Explore Mercury API for automated transaction pulls
- Explore Shopify API for automated order/tax data
- Build simple scripts to auto-generate the weekly cash position
- Automate the monthly close template population

### Phase C: Full Operating System (When Revenue > $5,000/month)

- Integrate Mercury and Shopify APIs into a lightweight dashboard
- Automate tax reserve transfers
- Automate compliance reminders via calendar API
- Build a founder dashboard with key metrics updated in near-real-time

---

## Mercury API Reference (For Future Automation)

Mercury provides API access for programmatic transaction retrieval:

- **Base URL:** `https://api.mercury.com/api/v1`
- **Authentication:** API key (available in Mercury settings under Developers)
- **Key endpoints:**
  - `GET /accounts` -- list accounts and balances
  - `GET /account/{id}/transactions` -- list transactions with date filters
- **Rate limits:** Standard API rate limiting applies
- **Documentation:** Available at mercury.com/developers

### Shopify API Reference (For Future Automation)

- **Admin API:** REST and GraphQL available
- **Key resources:** Orders, Transactions, Payouts
- **Authentication:** Custom app with API credentials
- **Reports:** Tax reports available via Analytics API

> **Note:** API integration is Phase B/C work. Do not invest in automation until the manual process is running smoothly and the business has revenue to justify the time investment.

---

## Security and Access Controls

| System | Who Has Access | MFA Enabled? | API Keys Created? |
|--------|---------------|-------------|-------------------|
| Mercury | Founder only | [ ] YES | [ ] YES |
| Shopify | Founder only | [ ] YES | [ ] NO (not needed yet) |
| State tax portal | Founder only | [ ] YES | N/A |
| Cursor workspace | Founder only | N/A | N/A |

**Rules:**
- Never store bank credentials, API keys, or passwords in this workspace
- Never share Mercury CSV exports outside this workspace
- Never commit financial data to a public git repository
- Use `.gitignore` to exclude `source-docs/` from version control

---

## .gitignore Update

Add the following to prevent financial data from being committed:

```
# Financial source documents -- never commit
DISURI Beauty/finance/source-docs/
DISURI Beauty/finance/monthly-closes/

# Sensitive exports
*.csv
```

---

## System Validation Checklist

Before considering the operating system "live," verify:

- [ ] Mercury account structure is set up (Main + Tax Reserve + Emergency Reserve)
- [ ] Mercury transaction tagging convention is being followed
- [ ] Shopify tax collection settings are verified
- [ ] First Mercury CSV has been exported and classified
- [ ] First Shopify orders CSV has been exported
- [ ] 13-week cash plan has been populated with real data
- [ ] Tax filing gap analysis has been completed with real dates and amounts
- [ ] Weekly calendar event is created
- [ ] Monthly calendar event is created
- [ ] Quarterly calendar events are created for tax deadlines
- [ ] The founder has completed one full weekly cycle using the system
