#!/usr/bin/env node
/**
 * Run Klaviyo abandon stack verification (metrics, flows, flow timing audit).
 * Requires KLAVIYO_API_KEY in .env.local
 */
import { execSync } from 'child_process';
import { join } from 'path';
import { homedir } from 'os';

const script = join(homedir(), '.cursor/skills/klaviyo/scripts/klaviyo-api.mjs');

console.log('=== QA Report ===\n');
execSync(`node "${script}" qa-report`, { stdio: 'inherit' });
console.log('\n=== Flow Audit ===\n');
execSync(`node "${script}" flow-audit`, { stdio: 'inherit' });
