import {test , expect} from '../Fixtures/Ap_test.fixtures';

test('Ap', async({hmepage})=>{
const name = hmepage.getByPlaceholder('Enter Name');
await name.fill('Mayank');
await hmepage.locator('#male').click();
//await page.locator('#sunday').check();
//await expect (await page.locator('#sunday')).toBeChecked();
// Multiple checkbox selections 

const checkbox_locators = [
  hmepage.locator('#sunday'),
  hmepage.locator('#monday'),
  hmepage.locator('#saturday'),
  hmepage.locator('#tuesday')
];

 for(const locator of checkbox_locators){
   await locator.check();
   //await page.waitForTimeout(5000);
 }
 for(const unchk_locators of checkbox_locators){
  await unchk_locators.uncheck();
 }

await hmepage.locator('#country').selectOption('india');
const Selected = await (hmepage.locator('#country').selectOption('india'));
await expect (hmepage.locator('#country')).toHaveValue('india');
const colrs = await hmepage.locator('#colors').selectOption('blue');

await hmepage.pause();
});
