import { expect, test } from '../tests/Fixtures';


test.describe.only('Accessibility testing', () => {

    test("Page Testing for violations", async ({ page, accessiblityBuilder }) => {
        await page.goto("https://commitquality.com/practice-api");
        await page.locator(".back-link").waitFor();
        const axebuilder = await accessiblityBuilder.analyze();
        expect(axebuilder.violations).toEqual([]);
    });

    test("Checking for back link violation", async ({ page, accessiblityBuilder }) => {
        await page.goto("https://commitquality.com/practice-api");
        await page.locator(".back-link").waitFor();
        const axebuilder = await accessiblityBuilder
            .include(".back-link")
            .analyze();
        expect(axebuilder.violations).toEqual([]);
    });

    test("Checking for Tags violation", async ({ page, accessiblityBuilder }) => {
        await page.goto("https://commitquality.com/practice-api");
        await page.locator(".back-link").waitFor();
        const axebuilder = await accessiblityBuilder
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
            .analyze();
        expect(axebuilder.violations).toEqual([]);
    });

    test("Checking with tags violation", async ({ page, accessiblityBuilder }) => {
        await page.goto("https://commitquality.com/practice-api");
        await page.locator(".back-link").waitFor();
        const axebuilder = await accessiblityBuilder
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).
            disableRules(["color-contrast-enhanced", "region", "page-has-heading-one", "landmark-one-main"])
            .analyze();
        expect(axebuilder.violations).toEqual([]);
    });

    test("Displaying test results in json format", async ({ page, accessiblityBuilder }, testInfo) => {
        await page.goto("https://commitquality.com/practice-api");
        const axebuilder = await accessiblityBuilder.analyze();

        await testInfo.attach("accessibility scan reports",{
            body: JSON.stringify(axebuilder, null, 2),
            contentType: "application/json"
        });
        expect(axebuilder.violations).toEqual([]);
    });


});