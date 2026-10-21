import {test, expect} from '@playwright/test';

test('Locators test', async ({page}) => {
    await test.step('Go to GitHub', async () => {
        await page.goto('https://github.com/BakkappaN', { waitUntil: 'domcontentloaded' });
        const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
        if (await acceptCookiesButton.isVisible().catch(() => false)) {
            await acceptCookiesButton.click();
        }

    });
     
    //await page.getByRole('link', { name: 'Sign in' }).click();

    //await page.getByAltText("View BakkappaN's full-sized avatar").click(); 
    await page.getByTestId('repositories').first().click();
    await page.locator('//*[@id="your-repos-filter"]').fill('PlaywrightTypescriptFullcourse');
    await page.locator('#your-repos-filter').fill('any course');
    
    
});