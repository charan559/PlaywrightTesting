import { test, expect } from 'playwright/test';
import randomGmail from './CommonFunctionality';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
});

test.describe('Newsletter Verification', () => {

  test("Register in Demo web shop", async function ({ page }) {
    await page.getByRole('link', { name: 'Register' }).click();
    await page.goto('https://demowebshop.tricentis.com/register');
    await page.getByLabel('Male', { exact: true }).check();
    await page.getByLabel('First name:').click();
    await page.getByLabel('First name:').fill('Priyanka');
    await page.getByLabel('Last name:').click();
    await page.getByLabel('Last name:').fill('kumari');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').fill(randomGmail);
    await page.getByLabel('Password:', { exact: true }).click();
    await page.getByLabel('Password:', { exact: true }).fill('Pr12345');
    await page.getByLabel('Confirm password:').click();
    await page.getByLabel('Confirm password:').fill('Pr12345');
    await page.getByRole('button', { name: 'Register' }).click();
    await page.goto('https://demowebshop.tricentis.com/registerresult/1');
    await page.getByRole('button', { name: 'Continue' }).click();
  });
  
});