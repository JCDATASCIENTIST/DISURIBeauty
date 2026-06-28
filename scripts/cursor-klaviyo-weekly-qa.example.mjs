#!/usr/bin/env node
/**
 * Example Cursor SDK + Klaviyo bridge for DISURI weekly gift QA.
 * Copy to cursor-klaviyo-weekly-qa.mjs and run with CURSOR_API_KEY set.
 *
 *   node scripts/cursor-klaviyo-weekly-qa.mjs
 */
import { Agent } from '@cursor/sdk';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const KLAVIYO_SCRIPT = join(process.env.HOME, '.cursor/skills/klaviyo/scripts/klaviyo-api.mjs');

const prompt = [
  'DISURI Klaviyo weekly gift read-only QA.',
  `Run: node "${KLAVIYO_SCRIPT}" forms`,
  `Run: node "${KLAVIYO_SCRIPT}" list RbYjU5`,
  'Read DISURI Beauty/theme-rebuild/klaviyo-weekly-gift-build-sheet.md (Section A4 copy).',
  'Summarize: forms found, Master List ok, any API vs playbook gaps.',
  'Do not mutate Klaviyo or Shopify.',
].join('\n');

const result = await Agent.prompt(prompt, {
  apiKey: process.env.CURSOR_API_KEY,
  model: { id: 'composer-2.5' },
  local: { cwd: REPO_ROOT },
});

if (result.status === 'error') {
  console.error('Agent run failed');
  process.exit(2);
}

console.log(result.result);
