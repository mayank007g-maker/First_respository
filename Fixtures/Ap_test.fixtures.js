import {test as base,expect} from '@playwright/test';

export const test = base.extend({
    hmepage: async({page},use)=>{
   await page.goto('https://testautomationpractice.blogspot.com/');
await use(page);
await page.close();
    },
    
});
export {expect};