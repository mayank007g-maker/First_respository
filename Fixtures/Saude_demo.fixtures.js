import{test as base , expect} from '@playwright/test';

export const test = base.extend({
login: async({page},use)=> {
    await page.goto("https://www.saucedemo.com/");
    const username = await page.getByPlaceholder("Username");
await username.fill("standard_user");
const password = await page.getByPlaceholder("Password");
await password.fill("secret_sauce");
await page.locator("#login-button").click();
// execute the use 
await use(page);
// close page
await page.close();
},
});
export { expect };