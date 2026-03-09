# DISURI Beauty -- Source Document Intake Checklist

> **Purpose:** Collect every document needed to reconstruct the financial baseline, assess tax risk, and stand up the operating finance system. Nothing downstream can be trusted until these inputs are verified.

---

## 1. Sales-Tax Notices and Filing History

| Item | Status | Location / Notes |
|------|--------|------------------|
| State sales-tax registration confirmation | [ ] Collected | |
| Most recent penalty / delinquency notice (screenshot or PDF) | [ ] Collected | |
| All prior quarterly filing confirmations (or lack thereof) | [ ] Collected | |
| Sales-tax rate(s) applicable to DISURI products | [ ] Collected | |
| State tax portal login credentials (for filing reference only) | [ ] Collected | |
| List of states where products have been shipped (nexus exposure) | [ ] Collected | |

**Action required:** Upload the sales-tax screenshot/notice referenced in the planning conversation. This is the highest-priority compliance item.

---

## 2. Mercury Bank Data

| Item | Status | Location / Notes |
|------|--------|------------------|
| Full transaction history CSV export (all time) | [ ] Collected | Mercury > Transactions > Export |
| Current account balance(s) | [ ] Collected | |
| List of linked external accounts or cards | [ ] Collected | |
| Any pending or scheduled transfers | [ ] Collected | |
| Mercury statement PDFs (last 6 months minimum) | [ ] Collected | |

**How to export from Mercury:**
1. Log in to Mercury at mercury.com
2. Go to Transactions
3. Click "Export" in the top right
4. Select "All time" date range
5. Download as CSV
6. Save file as `mercury-transactions-all-time.csv` in this folder

---

## 3. Recurring Expenses and Owner-Funded Purchases

| Item | Status | Location / Notes |
|------|--------|------------------|
| List of all subscriptions and recurring charges (software, tools, services) | [ ] Collected | |
| List of one-time purchases made with personal funds for the business | [ ] Collected | |
| List of one-time purchases made with business funds | [ ] Collected | |
| Credit card statements if a personal card was used for business | [ ] Collected | |
| Any outstanding invoices or payables | [ ] Collected | |
| Insurance policies (general liability, product liability) | [ ] Collected | |

---

## 4. Shopify Sales Data

| Item | Status | Location / Notes |
|------|--------|------------------|
| Shopify orders export (all time) | [ ] Collected | Shopify Admin > Orders > Export |
| Shopify product list with prices | [ ] Collected | |
| Shopify Payments payout history | [ ] Collected | |
| Discount / promo code usage history | [ ] Collected | |
| Refund and return history | [ ] Collected | |
| Shopify plan and app subscription costs | [ ] Collected | |

**How to export from Shopify:**
1. Log in to Shopify Admin
2. Go to Orders > Export
3. Select "All orders" and export as CSV
4. Go to Analytics > Reports > Finances summary for payout data
5. Save files in this folder

---

## 5. Inventory, Packaging, and Cost-of-Goods Data

| Item | Status | Location / Notes |
|------|--------|------------------|
| List of all products with unit costs (raw materials, manufacturing, packaging) | [ ] Collected | |
| Current inventory quantities on hand | [ ] Collected | |
| Inventory purchase receipts or invoices from suppliers | [ ] Collected | |
| Packaging and labeling costs per unit | [ ] Collected | |
| Shipping material costs | [ ] Collected | |
| Warehouse or storage costs (if any) | [ ] Collected | |
| Total spent on initial inventory / production run | [ ] Collected | |

---

## 6. Entity and Legal Documents

| Item | Status | Location / Notes |
|------|--------|------------------|
| LLC operating agreement | [ ] Collected | |
| EIN confirmation letter (IRS) | [ ] Collected | |
| State LLC formation documents | [ ] Collected | |
| Business license(s) | [ ] Collected | |
| Any prior tax returns filed for the LLC (federal or state) | [ ] Collected | |
| Resale certificate (if obtained) | [ ] Collected | |

---

## Collection Priority Order

1. **URGENT:** Sales-tax notice/screenshot -- needed for compliance triage
2. **URGENT:** Mercury full transaction export -- needed for cash baseline
3. **HIGH:** Recurring expense list and personal-funded purchases -- needed for burn analysis
4. **HIGH:** Shopify orders and payouts export -- needed for revenue baseline
5. **MEDIUM:** Inventory and COGS data -- needed for margin analysis
6. **MEDIUM:** Entity and legal documents -- needed for structural review

---

## Where to Save Files

All source documents should be saved in:
```
DISURI Beauty/finance/source-docs/
```

Create subfolders as needed:
```
source-docs/
  mercury/
  shopify/
  tax-notices/
  invoices-receipts/
  legal/
```
