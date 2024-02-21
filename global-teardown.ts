import { test, expect } from "@playwright/test";


test.skip("Clean up", async ({ page }) => {
    await page.goto("https://commitquality.com/");
    await page.getByTestId("show-more-button").click();
    await page.pause();
    const rows = await page.locator("tbody tr").all;
    for (let index = 0; index < rows.length; index++) {
        await page.getByText("delete").first().click;
    }
    await page.pause();
});
