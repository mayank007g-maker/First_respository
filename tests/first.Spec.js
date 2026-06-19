const { test, chromium ,expect} = require('@playwright/test');
const { only } = require('node:test');

test.describe.configure({mode:'parallel'});

test('First test case', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.google.com/");
console.log(await page.title());
// using selectors , it is recommended to use css selectors to locate the element in playwright 
await page.locator('#APjFqb').fill("asics india");
await page.keyboard.press('Enter');
//await page.locator("[data-ved= '0ahUKEwjRuZCn1I6TAxXM7jgGHVRRONkQ4dUDCDg']").click();
});

test ('Second test case', async ({page})=> 
{
  const Search_button = page.locator('#nav-search-submit-button');
 await page.goto("https://www.amazon.in/");
 await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
console.log(await page.title());
const Searchbox = page.locator('#twotabsearchtextbox');
await Searchbox.fill("asics india");
await Search_button.click();
//await page.keyboard.press('Enter');
console.log (await page.url());
//await page.locator('span.hm-icon-label').click();
}
);

test ('Asics Shoes selection & verification', async ({page})=> 
{
  const Search_button = page.locator('#nav-search-submit-button');
 await page.goto("https://www.amazon.in/");
 //await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
//console.log(await page.title());
const Searchbox = page.locator('#twotabsearchtextbox');
await Searchbox.fill("asics india");
await Search_button.click();
//await page.keyboard.press('Enter');
//console.log (await page.url());
console.log(await page.title());
//await page.locator('span.hm-icon-label').click();

}
);