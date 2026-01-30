
import { test, expect } from '@playwright/test';
const data = require('../test-data/testData.json');

for (const tc of data) {
    test(tc.id, async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/');

        const input = tc.input;
        const expected = tc.expected;

        const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputBox = page.locator(
            'div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
        );

        
        await inputBox.clear();
        await inputBox.fill(input);

        
        await expect(outputBox).toHaveText(expected, { timeout: 10000 });
    });
}

test('Pos_UI_0001', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
    const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

    await inputBox.type('mama budhun vaDHImi', { delay: 200 });

    // Wait for output to not be empty (with timeout)
    await expect(outputBox).not.toBeEmpty({ timeout: 10000 });
});
