
import { test, expect } from '@playwright/test';
const data = require('../test-data/testData.json');

for(const tc of data){

    test(tc.id, async ({page}) => {
    await page.goto('https://www.swifttranslator.com/');

    const input = tc.input;
    const expected = tc.expected;

    const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
    await inputBox.fill(input);

    const outputBox = page.locator(
        'div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
    );

  
    await expect(outputBox).toHaveText(expected);

    const output = await outputBox.textContent();
    expect(output.trim()).toBe(expected);
    });
}


test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByPlaceholder('Input Your Singlish Text Here.');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.type('mama budhun vaDHImi', { delay: 200 });

  await expect(outputBox).not.toHaveText('');
});
