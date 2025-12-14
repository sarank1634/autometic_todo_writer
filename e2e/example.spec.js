// @ts-check
import { test, expect } from '@playwright/test';

test('@sanity Example test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await expect(page).toHaveTitle(/TodoMVC/);
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
