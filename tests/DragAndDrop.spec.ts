import { test } from "@playwright/test";
test("basic test", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
    // DragTo
    await page.getByTestId('small-box')
    .dragTo(page.getByTestId('large-box').first(), {force:true}), {timeout:3000};
});