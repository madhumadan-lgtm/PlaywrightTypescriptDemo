import {test, expect} from '@playwright/test';
test.describe('Parametrize test', () => {
    const sesarchKeywords = ['Playwright by Testers Talk', 'Playwright API Testing by Testers Talk'];

for (const keyword of sesarchKeywords) {
    test(`Search for ${keyword}`, async ({page}) => {
        console.log(`Searching for: ${keyword}`);
        await test.step('Go to YouTube', async () => {
            await page.goto('https://www.youtube.com', { waitUntil: 'domcontentloaded' });
        });
        const searchBox = page.getByPlaceholder('Search');
        await searchBox.fill(keyword);
        await page.keyboard.press('Enter');
        await page.getByRole('link', { name: keyword }).hover

         
    });
}
});




   
    
 