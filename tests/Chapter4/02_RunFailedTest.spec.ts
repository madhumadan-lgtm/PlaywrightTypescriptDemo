import {test, expect} from '@playwright/test';

test('Test1', async ({page, browser}) => {
    await test.step('Go to YouTube', async () => {
        await page.goto('https://www.youtube.com', { waitUntil: 'domcontentloaded' });

        const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
        if (await acceptCookiesButton.isVisible().catch(() => false)) {
            await acceptCookiesButton.click();
        }
    });
    const searchBox = page.getByPlaceholder('Search');
    await searchBox.fill('Playwright by Testers Talk');
    await page.keyboard.press('Enter');

    await page.waitForURL(/search_query=Playwright\+by\+Testers\+Talk/i);
    await expect(page).toHaveTitle(/Playwright by Testers Talk/i);
});
test('Test2', async ({page, browser}) => {
    expect(true).toBe(false);
});
test('Test3', async ({page, browser}) => {
    expect(true).toBe(false);
});