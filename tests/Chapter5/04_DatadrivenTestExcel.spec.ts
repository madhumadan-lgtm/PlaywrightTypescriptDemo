import { test, expect } from '@playwright/test';
import path from 'path';
import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath =path.join(__dirname, '../../test-data/qa/test-data.xlsx');
const records = readExcelFile(filePath);

//for (const dataSetKey in testDataTyped) {
for (const record of records) {
   
    test(`My Datadriven by Excel TypeScript test ${record.Skill1}`, async ({ page }) => {
        await test.step('Go to YouTube', async () => {
            await page.goto(`${process.env.youTubeURL}`, { waitUntil: 'domcontentloaded' });

            const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
            if (await acceptCookiesButton.isVisible().catch(() => false)) {
                await acceptCookiesButton.click();
            }
            const searchBox = page.getByPlaceholder('Search');
            await searchBox.fill(record.Skill1);
            await page.keyboard.press('Enter');

            //await page.waitForURL(/search_query=Playwright\+by\+Testers\+Talk/i);

            await expect(page).toHaveTitle(record.Skill1 + " - YouTube");
        });

    });

}
