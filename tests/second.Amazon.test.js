const { test, expect } = require('@playwright/test');

test('Amazon_test', async ({ page, context }) => {
  // 1. Navigate to Amazon
  await page.goto("https://www.amazon.in/");
  
  // 2. Validate title
  await expect(page).toHaveTitle(/Online Shopping site in India/);

  // 3. Search for Nike shoes
  const searchbox = page.locator('#twotabsearchtextbox');
  await searchbox.fill("Nike shoes");
  await page.locator('#nav-search-submit-button').click();

  // 4. Locate the specific shoe link
  // Note: Using a regex in the name makes it more flexible
  const select_shoes = page.getByRole('link', { name: /Nike Mens Revolution 8/i }).first();

  // 5. THE CORRECT WAY TO HANDLE NEW TABS:
  // We start the listener AND the click at the same time inside Promise.all
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for the new tab to open
    select_shoes.click()          // Perform the click that opens the tab
  ]);

  // 6. Interact with the new tab
  await newPage.waitForLoadState(); // Ensure the new page is loaded
  console.log("New Page Title: " + await newPage.title());
  console.log("new Url is ",  await newPage.url() );
  console.log(newPage.getByText("Nike Mens Revolution 8"));
  
  // Optional: Verify something on the new page to prove you are there
    //await newPage.getby
  // await expect(newPage.locator('#add-to-cart-button')).toBeVisible();

  await page.pause();
});