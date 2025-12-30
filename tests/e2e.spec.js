const { test, expect } = require('@playwright/test');
const path = require('path');

test('homepage has correct title', async ({ page }) => {
  const filePath = path.join(__dirname, '..', 'football.html');
  await page.goto(`file://${filePath}`);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Odum Soccer/);
});
