import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json';
type TestData = {
    "TestDataSet1:": {
        "Skill1": string,
        "Skill2": string
    },
    "TestDataSet2:": {
        "Skill1": string,
        "Skill2": string
    },
}

const testDataTyped = testData as TestData;


//
for (const dataSetKey in testDataTyped) {
    const dataSet = testDataTyped[dataSetKey as keyof TestData];
    test(`My Datadriven by JSON in TypeScript test ${dataSet.Skill1}`, async ({ page }) => {
        await test.step('Go to YouTube', async () => {
            await page.goto(`${process.env.youTubeURL}`, { waitUntil: 'domcontentloaded' });

            const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
            if (await acceptCookiesButton.isVisible().catch(() => false)) {
                await acceptCookiesButton.click();
            }
            const searchBox = page.getByPlaceholder('Search');
            await searchBox.fill(dataSet.Skill1);
            await page.keyboard.press('Enter');

            //await page.waitForURL(/search_query=Playwright\+by\+Testers\+Talk/i);

            await expect(page).toHaveTitle(dataSet.Skill1+" - YouTube");


            
        });

    });

}
