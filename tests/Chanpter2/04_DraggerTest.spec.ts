import { test, expect } from '@playwright/test';
test('My First Dragger TypeScript test', async ({ page }) => {
    await test.step('Go to function', async () => {
        await page.goto('https://jqueryui.com/droppable/');

    });
     
    const draggable =page.locator('iframe').contentFrame().locator('#draggable');
    const droppable = page.locator('iframe').contentFrame().locator('#droppable');
    await draggable.dragTo(droppable);
    await draggable.click({button:'right'});
    await page.getByRole('link', { name: 'Support' }).first().hover();
    //await page.keyboard.press('Shift+F5');
    await page.reload();
    //page.keyboard.press('F5');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await test.step('Go to function', async () => {
    await page.goto('https://jqueryui.com/datepicker/');
    await page.locator('iframe').contentFrame().locator('#datepicker').click();
    await page.locator('iframe').contentFrame().getByRole('link', { name: '6', exact: true }).click();
    await page.locator('iframe').contentFrame().locator('#datepicker').click();
    await page.locator('iframe').contentFrame().getByTitle('Next').click();
    await page.locator('iframe').contentFrame().getByRole('link', { name: '27' }).click();    
    });
});