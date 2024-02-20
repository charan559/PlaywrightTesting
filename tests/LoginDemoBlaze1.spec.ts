import { expect, test } from "@playwright/test";

test.describe.skip('Login to DemoBlaze', () => {

    test("login", async ({ page }) => {
        await page.goto('https://demoblaze.com/');
        await expect(page.locator("#logout2")).toBeVisible();
    });

    test("logout", async ({ page, context }) => {
        await context.clearCookies();
        await page.goto("https://demoblaze.com/");
        await expect(page.locator("#logout2")).toBeVisible();
    });
});