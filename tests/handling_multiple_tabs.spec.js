import{test,expect} from '@playwright/test';
import { text } from 'node:stream/consumers';

test('handling_tabs' , async ({ browser }) =>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://testautomationpractice.blogspot.com/');
//await page.locator('.widget-content').getByText('New Tab').click();
//await page.getByText('New Tab').click();

const [newPage] =  await Promise.all([context.waitForEvent('page') , page.getByText('New Tab').click()]);
await newPage.waitForLoadState();
console.log(await newPage.url());
await expect (newPage).toHaveTitle('SDET-QA Blog');

await newPage.getByRole('link', { name: 'TypeScript For Playwright & Cypress' }).click();
await page.bringToFront();
await page.pause();
})