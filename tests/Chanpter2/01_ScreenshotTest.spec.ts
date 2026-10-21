import {expect, test} from '@playwright/test';

test('Take a screenshot', async ({page}) => {
    await page.goto('https://www.youtube.com');
    await page.screenshot({ path: './Screenshots/screenshot.png' });
    const searchBox = page.getByPlaceholder('Search');
    await searchBox.screenshot({ path: './Screenshots/searchBox.png' });
    await searchBox.fill('Playwright by Testers Talk');
    await page.keyboard.press('Enter');

    await page.waitForURL(/search_query=Playwright\+by\+Testers\+Talk/i);
    await expect(page).toHaveTitle(/Playwright by Testers Talk/i);
    await expect(page.getByRole('heading', { name: 'Playwright TypeScript by' })).toContainText('Playwright TypeScript by Testers Talk ✅');

    await expect(page.getByRole('heading', { name: 'Playwright by Testers Talk ✅' })).toContainText('Playwright by Testers Talk ✅');
    await page.screenshot({ path: './Screenshots/searchResults.png', fullPage: true });
});