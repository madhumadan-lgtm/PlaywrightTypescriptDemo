import { test, expect } from '@playwright/test';

test('My Alert TypeScript test', async ({ page }) => {
  await test.step('Open alerts page and handle the browser dialog', async () => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    });

    page.once('dialog', async dialog => {
      
      console.log(`Dialog message: ${dialog.message()}`);
      console.log(`Dialog type: ${dialog.type()}`);
      await dialog.accept();
    });
 

    await page.getByText('See a sample confirm', { exact: true }).click();
   });

test('My Prompt TypeScript test', async ({ page }) => {
  await test.step('Open alerts page and handle the browser dialog', async () => {
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    });

    page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      console.log(`Dialog type: ${dialog.type()}`);
      await dialog.accept('Playwright ok');
    });
 

    await page.getByText('See a sample prompt', { exact: true }).click();
   });
