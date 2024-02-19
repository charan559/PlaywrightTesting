import { test as base } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

export const test = base.extend<{
    accessiblityBuilder: AxeBuilder;
}>({
    accessiblityBuilder: async ({ page }, use) => {
        const accessiblityBuilder = await new AxeBuilder({ page }).withTags([
            "wcag2a",
            "wcag2aa",
            "wcag21a",
            "wcag21aa",
        ]);
        await use(accessiblityBuilder);
    },
});
export const expect = base.expect;