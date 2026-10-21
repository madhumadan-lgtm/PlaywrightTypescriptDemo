import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
type TestReords = {
    Skill1: string,
    Skill2: string
}
const records = parse(fs.readFileSync(path.resolve(__dirname, '../../test-data/qa/test-data.csv')), {
    columns: true,
    skip_empty_lines: true
}) as TestReords[];

//for (const dataSetKey in testDataTyped) {
for (const record of records) {
   
    test(`My Datadriven by CSV  TypeScript test ${record.Skill1}`, async ({ page }) => {
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
