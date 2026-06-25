#!/usr/bin/env node
/** Storefront audit — writes NDJSON to debug log (session 659020) */
import { appendFileSync } from 'fs';

const LOG = '/Users/joelcastillo/Documents/_1_DISURIBeauty/DISURIBeauty/.cursor/debug-659020.log';
const BASE = 'https://disuribeauty.com';
const SESSION = '659020';

function log(hypothesisId, location, message, data, runId = 'post-fix') {
  const line = JSON.stringify({
    sessionId: SESSION,
    runId,
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now(),
  });
  appendFileSync(LOG, line + '\n');
}

const PATHS = [
  '/',
  '/collections/skincare',
  '/collections/bundles',
  '/collections/all',
  '/pages/gift-of-the-week',
  '/pages/shipping',
  '/pages/about-us',
  '/pages/contact',
  '/pages/faqs',
  '/pages/cj-affiliate',
  '/pages/privacy-policy',
  '/pages/refund-policy',
  '/pages/terms-of-service',
  '/cart',
  '/search?q=toner',
  '/404-test-audit',
  '/products/the-complete-disuri-system',
  '/products/triple-collagen-firming-toner',
  '/blogs/news',
];

const BRAND_VIOLATIONS = [
  { id: 'H-COPY', pattern: /—/g, label: 'em_dash' },
  { id: 'H-COPY', pattern: /best skin journey|Count me in/gi, label: 'old_klaviyo_copy' },
  { id: 'H-COPY', pattern: /\$50|\$100.*gift|free shipping over \$25/gi, label: 'phantom_tier_or_shipping' },
  { id: 'H-COPY', pattern: /last chance|countdown|OMG babe/gi, label: 'hype_language' },
];

const MISSING_SIGNALS = [
  { id: 'H-EMPTY', pattern: /page is being updated|lorem ipsum|coming soon/gi, label: 'placeholder_copy' },
  { id: 'H-EMPTY', pattern: /Liquid error|Could not find asset/gi, label: 'liquid_error' },
  { id: 'H-404', pattern: /404|page not found/gi, label: 'not_found_body' },
];

async function auditUrl(path) {
  const url = BASE + path;
  try {
    const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'DISURI-Audit/1.0' } });
    const html = await res.text();
    const title = (html.match(/<title[^>]*>([^<]*)</i) || [])[1]?.trim() || '';
    const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() || '';
    const hasMain = /id="main-content"|class="shopify-section"/.test(html);
    const sectionCount = (html.match(/class="shopify-section/g) || []).length;
    const violations = [];
    for (const v of BRAND_VIOLATIONS) {
      const m = html.match(v.pattern);
      if (m) violations.push({ label: v.label, sample: m[0].slice(0, 80) });
    }
    for (const v of MISSING_SIGNALS) {
      const m = html.match(v.pattern);
      if (m) violations.push({ label: v.label, sample: m[0].slice(0, 80) });
    }
    const announcement = (html.match(/disuri-announcement[\s\S]*?<a[^>]*>([^<]+)/) || [])[1]?.trim();
    const heroH1 = (html.match(/hero-content[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

    log('H-PAGE', 'audit.mjs:auditUrl', 'page_scan', {
      path,
      status: res.status,
      title,
      h1: h1.slice(0, 120),
      heroH1: heroH1?.slice(0, 120) || null,
      announcement: announcement?.slice(0, 120) || null,
      sectionCount,
      hasMain,
      violations,
      ok: res.status === 200 && violations.length === 0,
    });
    return { path, status: res.status, violations, h1, sectionCount };
  } catch (e) {
    log('H-NET', 'audit.mjs:auditUrl', 'fetch_error', { path, error: String(e.message) });
    return { path, status: 0, violations: [{ label: 'fetch_error' }] };
  }
}

log('H-START', 'audit.mjs', 'audit_begin', { paths: PATHS.length, base: BASE });

const results = [];
for (const p of PATHS) {
  results.push(await auditUrl(p));
}

const broken = results.filter((r) => r.status !== 200);
const withViolations = results.filter((r) => r.violations?.length);
const thin = results.filter((r) => r.sectionCount < 3 && r.status === 200 && !r.path.includes('404'));

log('H-SUMMARY', 'audit.mjs', 'audit_summary', {
  total: results.length,
  broken: broken.map((r) => ({ path: r.path, status: r.status })),
  withViolations: withViolations.map((r) => ({ path: r.path, violations: r.violations })),
  thinPages: thin.map((r) => ({ path: r.path, sections: r.sectionCount, h1: r.h1 })),
});

console.log(JSON.stringify({ broken, withViolations, thin }, null, 2));
