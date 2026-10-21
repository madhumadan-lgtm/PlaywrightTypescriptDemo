import { test, expect } from '@playwright/test';

test('test visual comparison', async ({ page }) => {
  await test.step('Go to GitHub', async () => {
    await page.goto('https://github.com/login');
  });
    await expect(page).toHaveScreenshot('GitHubLoginPage.png');
    const locator = page.getByRole('textbox', { name: 'Username or email address' });
    await expect(locator).toHaveScreenshot('GitHubLoginPage1.png');
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('dummyuser');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');
    await expect(locator).toHaveScreenshot('GitHubLoginPage1.png');
});