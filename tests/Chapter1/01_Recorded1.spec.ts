import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('Go to GitHub', async () => {
    await page.goto('https://github.com/');
  });
  await test.step('Click on Sign in', async () => {
  await page.getByRole('link', { name: 'Sign in' }).click();
  });
  await test.step('Enter username and password', async () => {
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('dummyuser');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('pass1234');
  });
  await test.step('Click on Sign in button and verify error message', async () => {
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });
  await test.step('Verify error message', async () => {
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });
});