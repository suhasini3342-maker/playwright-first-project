
import { test, expect } from '@playwright/test';

test('Open YouTube website', async ({ page }) => {
  await page.goto('https://www.youtube.com');
  await page.screenshot({path:'screenshots/homepage.png',fullPage:true});

  await expect(page).toHaveTitle(/YouTube/i);

  console.log('YouTube opened successfully');
});
