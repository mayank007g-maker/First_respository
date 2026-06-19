import { test ,expect} from '../Fixtures/Saude_demo.fixtures.js';


test('sauce_demo', async({login})=> {
//
const title = login.title();
console.log(title);
//validating title //

//await expect(page).tohaveTitle("Swag Labs");

const parent_element_list = login.locator(".inventory_list");
//console.log(parent_element_list);
const child_element_list = parent_element_list.filter({ hasText: "Sauce Labs Backpack" });
//console.log(child_element_list);
//await child_element_list.click();
await login.getByText("Sauce Labs Backpack").click();
// to fetch the price of the product //
const price = await login.locator(".inventory_details_price").innerText();
await expect(login.locator(".inventory_details_price")).toHaveText("$29.99");

console.log("Price is " + price);
await login.getByRole('button', { name: 'Add to cart' }).click();
await login.getByRole('button',({name: 'Back to products'})).click();
await expect(login).toHaveURL("https://www.saucedemo.com/inventory.html");
await login.getByRole('button',({name: 'Open Menu'})).click();

const parent_menu = await login.locator('.bm-item-list');
await parent_menu.click();
//const child_menu = await page.locator('[data-test="about-sidebar-link"]').click();
const about = await login.getByText('About').click();
//await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
await expect (login.getByText('Sauce AI for Test Authoring: Move from intent to execution in minutes.')).toBeVisible();
await login.goBack();
await expect(login.getByText('Products')).toBeVisible();
await expect(login.locator('.title')).toContainText('Products');
//await page.pause();
});