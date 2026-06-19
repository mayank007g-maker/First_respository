import {test,expect} from '../Fixtures/Ap_test.fixtures'

test('dynamic_button', async({hmepage})=>{

await hmepage.getByRole('button',{name:'Start'}).click();

await hmepage.getByRole('button', {name:'stop'}).click();
await hmepage.pause();
});