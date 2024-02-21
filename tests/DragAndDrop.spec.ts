import { test } from "@playwright/test";

test("drag and drop", async ({ page }) => {
    await page.goto("https://commitquality.com/practice-drag-and-drop");
    // DragTo
    await page.getByTestId('small-box')
    .dragTo(page.getByTestId('large-box').first(), {force:true}), {timeout:3000};
});