import { expect, test } from '@playwright/test';

test('Newsletter signin with valid gmail', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    const newsletterVisible = await page.getByText('Newsletter', { exact: true }).isVisible();
    expect(newsletterVisible).toBeTruthy();

    const signInText = await page.getByText('Sign up for our newsletter:').isVisible();
    expect(signInText).toBeTruthy();

    await page.locator('#newsletter-email').click();
    await page.locator('#newsletter-email').fill("priyankak272013@gmail.com");
    await page.getByRole('button', { name: 'Subscribe' }).click();
    // const signInSuccessfull = await page.getByText('Thank you for signing up! A', { exact: false }).isVisible();
    // expect(signInSuccessfull).toBeTruthy();
});
test('Newsletters signin with invalid Gmail', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    const newsletterVisible = await page.getByText('Newsletter', { exact: true }).isVisible();
    expect(newsletterVisible).toBeTruthy();

    const signInText = await page.getByText('Sign up for our newsletter:').isVisible();
    expect(signInText).toBeTruthy();

    await page.locator('#newsletter-email').click();
    await page.locator('#newsletter-email').fill("##########");
    await page.getByRole('button', { name: 'Subscribe' }).click();
    const signinfailed = await page.getByText('Enter valid email').isHidden();
    expect(signinfailed).toBeTruthy();
});