import {test, expect} from '@playwright/test';

test('My Assertions test', async ({page}) => {
    await test.step('Go to YouTube', async () => {
        await page.goto('https://www.youtube.com', { waitUntil: 'domcontentloaded' });

        const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
        if (await acceptCookiesButton.isVisible().catch(() => false)) {
            await acceptCookiesButton.click();
        }
    });
    
    const searchBox = page.getByPlaceholder('Search');
    await expect.soft(searchBox).toBeDisabled();
    
    await expect(page).toHaveURL('https://www.youtube.com/');
    //await expect.soft(page).toHaveTitle(/YouTwdsadasube/);
    await expect(searchBox).toBeEnabled();
});