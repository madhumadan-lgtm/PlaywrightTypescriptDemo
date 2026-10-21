import {test, expect} from '@playwright/test';

test('Test Browser context session', {tag:['@smoking', '@regression']}, async ({page, browser}) => {
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
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await test.step('Go to YouTube', async () => {
        await page2.goto('https://www.youtube.com', { waitUntil: 'domcontentloaded' });

        const acceptCookiesButton = page2.getByRole('button', { name: /accept all|accept/i });
        if (await acceptCookiesButton.isVisible().catch(() => false)) {
            await acceptCookiesButton.click();
        }
    });
    const searchBoxpage2 = page2.getByPlaceholder('Search');
    await searchBoxpage2.fill('Playwright by Testers Talk');
    await page2.keyboard.press('Enter');

    await page2.waitForURL(/search_query=Playwright\+by\+Testers\+Talk/i);
    const newTab = await context2.newPage();
    await newTab.goto('https://www.youtube.com', { waitUntil: 'domcontentloaded' });

        const acceptCookiesButton = newTab.getByRole('button', { name: /accept all|accept/i });
        if (await acceptCookiesButton.isVisible().catch(() => false)) {
            await acceptCookiesButton.click();
        }
});