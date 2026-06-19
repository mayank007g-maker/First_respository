import { test, expect } from "@playwright/test";

test("This is very first test case", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await expect(page).toHaveTitle(
    "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
  );
  await page
    .getByRole("searchbox", { name: "Search Amazon.in" })
    .fill("Nike Shoes");
  console.log("Playwright typed");
  // await page.pause();

  //await page.getByRole('button', { name: 'nike shoes for man running' }).click();

  await page
    .locator('[role="rowgroup"] div[role="button"]')
    .filter({ hasText: "nike shoes for man running" })
    .click();

const parentElement = page.getByRole('listitem').filter({
    has: page.locator("h2[class*='a-size-mini']", { hasText: "Campus" })
});

await parentElement.locator('.a-price-whole').first().waitFor();
console.log("Parent element List is: " + await parentElement.count());



const priceElement = await parentElement.locator('.a-price-whole').allInnerTexts()
priceElement.forEach((price) => {  console.log("Price of the product is: " + price);
});   
 // await page.pause();
});