// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { junit } from 'node:test/reporters';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries: 2,
  // Default timeout for each test set to 60 seconds (60,000 ms)
  timeout: 60000, 
  fullyParallel: true,
reporter: [
          ['list'],
            ['html'],
            ['junit', {outputFile: 'results.xml'}],
            ['json', {outputFile: 'results.jason'}]
          ],  
 workers:4,
  expect: {
    timeout: 40 * 2000 // 80,000 ms
  },
  

  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium', // Fixed casing from 'browsername'
    headless: false,
   // viewport: { width: 1920, height: 1200 },
   trace:'on',
    actionTimeout: 0,
    navigationTimeout: 80000,
  },
});