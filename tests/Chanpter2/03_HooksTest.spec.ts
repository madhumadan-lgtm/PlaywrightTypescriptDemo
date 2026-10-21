import { test, expect } from '@playwright/test';
test.beforeAll(async () => {
    console.log('Before All Tests');

});
test.afterAll(async () => {
    console.log('After All Tests');

});
test.beforeEach(async () => {
    console.log('Before Each Test');
});
test.afterEach(async () => {
    console.log('After Each Test');
});
test('My First Hooks TypeScript test', async ({ page }) => {
    await test.step('Go to YouTube', async () => {
        await page.goto('https://www.facebook.com', { waitUntil: 'domcontentloaded' });
        const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
        if (await acceptCookiesButton.isVisible().catch(() => false)) {
            await acceptCookiesButton.click();
        }
        await page.goto('https://www.facebook.com/');
        await page.getByRole('link', { name: 'Create new account' }).click();

        //await page.getByRole('combobox', { name: 'Select month' }).click();           
        //await page.getByRole('combobox', { name: 'Select month' }).locator('svg').click();

        await page.getByRole('combobox', { name: 'Select month' }).click();
        await expect(page.getByRole('option')).toHaveText([
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December',
        ]);
        await page.getByRole('option', { name: 'April' }).click();
    });

    await page.getByRole('combobox', { name: 'Select year' }).click();
    
    await page.getByRole('option', { name: '1989' }).click();
});