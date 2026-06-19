import {test , expect} from '../Fixtures/Ap_test.fixtures'

test.skip ('simple_alerts', async({hmepage})=>{
    hmepage.on('dialog', async dialog =>{
     expect(dialog.type()).toContain('alert');
     expect (dialog.message()).toContain('I am an alert box!');
    await dialog.accept();

    })

    await hmepage.locator('#alertBtn').click();
    await hmepage.waitForTimeout(5000);
await hmepage.pause();

});

test.skip ('confirmation_alerts', async({hmepage})=>{
    hmepage.on('dialog', async dialog =>{
     //expect(dialog.type()).toContain('alert');
     expect (dialog.message()).toContain('Press a button!');
    await dialog.accept();

    })

    await hmepage.locator('#confirmBtn').click();
    await hmepage.waitForTimeout(5000);
    await expect(hmepage.locator('.widget-content').locator('#demo')).toHaveText('You pressed OK!');
   // await expect(hmepage.locator('.widget-content')).toHaveText('You pressed OK!');
await hmepage.waitForTimeout(5000);
await hmepage.pause();

});

test ('prompt_alerts', async({hmepage})=>{
    hmepage.on('dialog', async dialog =>{
     expect(dialog.type()).toContain('prompt');
     expect (dialog.message()).toContain('Please enter your name:');
     expect (dialog.defaultValue()).toContain('Harry Potter');
     await dialog.accept('Mayank');
    //await dialog.dismiss();

    })

    await hmepage.locator('#promptBtn').click();
    await hmepage.waitForTimeout(3000);
    await expect(hmepage.locator('.widget-content').locator('#demo')).toHaveText('Hello Mayank! How are you today?');
   // await expect(hmepage.locator('.widget-content').locator('#demo')).toHaveText('User cancelled the prompt.');
   // await expect(hmepage.locator('.widget-content')).toHaveText('You pressed OK!');
    await hmepage.waitForTimeout(5000);
    await hmepage.pause();

});