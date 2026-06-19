import { test, expect } from '@playwright/test';

test('dropdown_test' , async({page , context})=>{
await page.goto("https://testautomationpractice.blogspot.com");
await expect(page).toHaveTitle('Automation Testing Practice');
await page.waitForLoadState('load');
const select_country = await page.locator('#country').selectOption("Australia");
const options = await page.locator('#country option');
console.log(await options.allInnerTexts());

await expect(options).toHaveCount(10);
await page.pause();

});