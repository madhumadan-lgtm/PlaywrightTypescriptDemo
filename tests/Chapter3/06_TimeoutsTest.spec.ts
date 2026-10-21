import {test, expect} from '@playwright/test';

test('Test Timeout', {tag:['@smoking', '@regression']}, async ({page}) => {
    await test.step('Go to YouTube', async () => {
        await page.goto('https://www.youtube.com', { waitUntil: 'domcontentloaded' });

        const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
        if (await acceptCookiesButton.isVisible().catch(() => false)) {
            await acceptCookiesButton.click();
        }
    });
    const searchBox = page.getByPlaceholder('Search1');
    await searchBox.fill('Playwright by Testers Talk');
    await page.keyboard.press('Enter');

    await page.waitForURL(/search_query=Playwright\+by\+Testers\+Talk/i);
    await expect(page).toHaveTitle(/Playwright by Testers Talk zzzz/i);

});