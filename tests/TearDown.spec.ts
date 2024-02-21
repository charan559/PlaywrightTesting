import { test, expect } from "@playwright/test";
test.skip("basic test", async ({ page }) => {
    await test.step("Navigate", async () => {
        await page.goto("https://commitquality.com/");
    });
    await expect(page.locator(".filter-textbox")).toBeVisible();
});