import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
});

test.describe('SearchBox Verification', () => {
    test('Verify search-box with valid items', async ({ page }) => {
        //search Box
        await page.locator('#small-searchterms').click();
        await page.locator('#small-searchterms').fill('Smartphone');
        await page.getByRole('button', { name: 'Search' }).click();
        const textMessage = await page.getByText('No products were found that').isVisible();
        expect(textMessage).toBeFalsy();
    });

    test('Verify search-box with Invalid items', async ({ page }) => {
        //search Box
        await page.locator('#small-searchterms').click();
        await page.locator('#small-searchterms').fill('iphone123');
        await page.getByRole('button', { name: 'Search' }).click();
        const textMessage = await page.getByText('No products were found that').isVisible();
        expect(textMessage).toBeTruthy();
    });
});