import { test, expect } from '@playwright/test';

test('Loop test2', async ({ page }) => {
    await test.step('Go to GitHub', async () => {
        await page.goto('https://github.com/BakkappaN', { waitUntil: 'domcontentloaded' });
        const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
        if (await acceptCookiesButton.isVisible().catch(() => false)) {
            await acceptCookiesButton.click();
        }

    });
    console.log('Total Repositories: find');

    const repoLinks = await page.locator('span.repo').count();
    console.log('Total Repositories: ' + repoLinks);
    for (let i = 0; i < repoLinks; i++) {
        const repoName = await page.locator('span.repo').nth(i).textContent();
        console.log('Repository ' + (i + 1) + ': ' + repoName?.trim());
        if (repoName?.trim() == 'PlaywrightTypeScriptTutorialFullCourse') {

            console.log('Found the repository: ' + repoName);
            await page.locator('span.repo').nth(i).click();
            break;
        }



    }
    });


    test('Loop test1', async ({ page }) => {
        await test.step('Go to GitHub', async () => {
            await page.goto('https://github.com/BakkappaN', { waitUntil: 'domcontentloaded' });
            const acceptCookiesButton = page.getByRole('button', { name: /accept all|accept/i });
            if (await acceptCookiesButton.isVisible().catch(() => false)) {
                await acceptCookiesButton.click();
            }

        });
        console.log('Total Repositories: find');

        const repoLinks = await page.locator('span.repo').count();
        console.log('Total Repositories: ' + repoLinks);
        for (let i = 0; i < repoLinks; i++) {
            const repoName = await page.locator('span.repo').nth(i).textContent();
            console.log('Repository ' + (i + 1) + ': ' + repoName?.trim());
            if (repoName?.trim() == 'PlaywrightTypeScriptTutorialFullCourse') {

                console.log('Found the repository: ' + repoName);
                await page.locator('span.repo').nth(i).click();
                break;
            }



        }

    });