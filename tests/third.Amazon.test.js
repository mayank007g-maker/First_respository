import {test,expect} from '@playwright/test';

test('Amazon_test2', async ({page,context}) => {
await page.goto("https://www.amazon.in/");
console.log(await page.title());
await page.waitForLoadState('load');
const all_menu_items = await page.getByRole('button',{name: "Open All Categories Menu"});
//await page.locator('#nav-hamburger-menu').press('enter');
//await all_menu_items.waitFor({state:'visible'});
await all_menu_items.click();

//const shopbycategory = await page.getByRole('heading',{level:2, name: 'Shop by Category'});
//all_menu_items.selectOption('Mobiles, Computers');
//await expect (page).toHaveTitle("")
//const category = await page.getByLabel("Shop by Category");
await expect (page.getByText ("Shop by Category")).toBeVisible();
await page.getByRole('button', { name: 'TV, Appliances, Electronics'}).click();
//await page.getByRole('button', { name: 'Mobiles, Computers' }).click();
//const top_menu = await page.locator('#nav-xshop-container').click();
//await page.getByRole('List', {name: 'Electronics'}).click();
console.log(await page.title());
await page.evaluate(() => window.scrollTo(0, 0));
//const electronics_menu = await page.locator('.subnav-ul');
await expect (page).toHaveTitle('Buy Electronic Products Online with Up to 60% OFF at Amazon.in');
const top_menu2 = await page.locator('#nav-subnav div');

//expect (page).toHaveTitle('')
await top_menu2.filter({hasText: 'TV & Home Entertainment'}).hover();
await page.getByRole('link', { name: 'Sony', exact: true }).click();
const sony_TV = await page.getByLabel('Sony 108 cm (43 inches) BRAVIA 2M2 Series 4K Ultra HD Smart LED Google TV K-43S22BM2');
await sony_TV.click();
console.log(await page.locator('#apex_offerDisplay_desktop').textContent());
console.log(await page.locator('#desktop_qualifiedBuyBox').innerText());
await page.getByRole('button', { name: 'EMI options' }).click();
const debit_card_emi = await page.getByRole('tab',{'name': 'Debit Card EMI'});
debit_card_emi.click();
console.log(await debit_card_emi.innerText());
//const price_details = console.log(page.locator('.a-section a-spacing-none aok-align-center aok-relative apex-core-price-identifier').first().filter({has : page.locator('.aok-offscreen').textContent()}));
await page.pause();
});
 
