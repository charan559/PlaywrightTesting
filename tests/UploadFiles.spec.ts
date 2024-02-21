import { test } from "@playwright/test";

test("basic test", async ({ page }) => {
    const filePath = '../';
    await page.goto("https://commitquality.com/practice-file-upload");
    await page.getByTestId('file-input').click();
    await page.getByTestId('file-input').setInputFiles('yaml.txt');
    await page.pause();
    //add an event listner
    page.once("dialog", (dialog) => {
        console.log(dialog.message());
        dialog.accept();
    });
    await page.getByText("Submit").click();
    await page.pause();
});