import fs from 'node:fs/promises';
import path from 'node:path';

import { loadIndexNowUrlsFromSitemap, resolveSitemapPath, sendIndexNowPing } from '@/src/lib/indexnow';
import { siteConfig } from '@/src/lib/siteConfig';

async function main() {
  const root = process.cwd();
  const sitemapPath = resolveSitemapPath(root);
  const urls = await loadIndexNowUrlsFromSitemap(sitemapPath);

  const config = {
    enabled: process.env.INDEXNOW_ENABLED !== 'false',
    key: process.env.INDEXNOW_KEY ?? '',
    host: siteConfig.indexNow.host,
    keyLocation: process.env.INDEXNOW_KEY_LOCATION
  };

  if (!config.key) {
    throw new Error('INDEXNOW_KEY environment variable is required to ping IndexNow.');
  }

  const result = await sendIndexNowPing(urls, config, { retries: 2, retryDelayMs: 3000 });
  if (!result.success) {
    console.error(`IndexNow ping failed (${result.status}): ${result.body}`);
    process.exitCode = 1;
  } else {
    console.log(`IndexNow ping succeeded (${result.status}): ${result.body}`);
  }

  const logDir = path.join(root, 'logs');
  await fs.mkdir(logDir, { recursive: true });
  const logPath = path.join(logDir, 'indexnow.log');
  const timestamp = new Date().toISOString();
  const entry = `${timestamp}\t${result.status}\t${result.success ? 'success' : 'failure'}\t${result.body}\n`;
  await fs.appendFile(logPath, entry, 'utf-8');
}

main().catch((error) => {
  console.error('IndexNow script error:', error);
  process.exitCode = 1;
});
