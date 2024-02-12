import { test, expect } from 'playwright/test';
test("Login in Demo web shop", async function ({ page }) {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.goto('https://demowebshop.tricentis.com/login');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').fill('Priyankak272013@gmail.com');
    await page.getByLabel('Password:', { exact: true }).click();
    await page.getByLabel('Password:', { exact: true }).fill('Pr12345');
    await page.getByRole('button', { name: 'Log in' }).click();

});