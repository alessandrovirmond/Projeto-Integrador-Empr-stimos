import { test, expect } from '@playwright/test';

test('Login com sucesso e entrar na homne page', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.fill('#email', 'ale@dev.com');
  await page.fill('#senha', '123456');

  await page.click('#entrar');

  await page.waitForNavigation();

  const currentURL = page.url();
  expect(currentURL).toBe('http://localhost:5173/home.html');


});
