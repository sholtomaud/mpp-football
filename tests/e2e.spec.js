const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  await page.goto('football.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Odum Soccer/);
});
