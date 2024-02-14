import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
});

test.describe('TiTle Verification', () => {
    test('title test case', async ({ page }) => {
        const title = await page.title();
        await expect(title).toBe("Demo Web Shop");
    });

    test('title negative test case', async ({ page }) => {
        const title = await page.title();
        await expect(title).not.toBe("Google");
    });

    test('login title  test case', async ({ page }) => {
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.waitForTimeout(2000);
        const title = await page.title();
        await expect(title).toBe("Demo Web Shop. Login");
    });

    test('login title negative test case', async ({ page }) => {
        await page.getByRole('link', { name: 'Log in' }).click();
        await page.waitForTimeout(2000);
        const title = await page.title();
        await expect(title).not.toBe("Google");
    });

    test('Register title  test case', async ({ page }) => {
        await page.getByRole('link', { name: 'Register' }).click();
        await page.waitForTimeout(2000);
        const title = await page.title();
        await expect(title).toBe("Demo Web Shop. Register");
    });

    test('Register title negative test case', async ({ page }) => {
        await page.getByRole('link', { name: 'Register' }).click();
        await page.waitForTimeout(2000);
        const title = await page.title();
        await expect(title).not.toBe("Google");
    });

    test('cart title  test case', async ({ page }) => {
        await page.getByRole('link', { name: 'Shopping cart (0)' }).click();
        await page.waitForTimeout(2000);
        const title = await page.title();
        await expect(title).toBe("Demo Web Shop. Shopping Cart");
    });

    test('cart title negative test case', async ({ page }) => {
        await page.getByRole('link', { name: 'Shopping cart (0)' }).click();
        await page.waitForTimeout(2000);
        const title = await page.title();
        await expect(title).not.toBe("Google");
    });

    test('wishlist title  test case', async ({ page }) => {
        await page.getByRole('link', { name: 'Wishlist (0)' }).click();
        await page.waitForTimeout(2000);
        const title = await page.title();
        await expect(title).toBe("Demo Web Shop. Wishlist");
    });

    test('wishlist title negative test case', async ({ page }) => {
        await page.getByRole('link', { name: 'Wishlist (0)' }).click();
        await page.waitForTimeout(2000);
        const title = await page.title();
        await expect(title).not.toBe("Google");
    });
});