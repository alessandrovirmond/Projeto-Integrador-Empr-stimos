/* import { test, expect } from '@playwright/test';

test('Escrever valor e verificar parcelas', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await page.fill('#email', 'ale@dev.com');
  await page.fill('#senha', '123456');

  await page.click('#entrar');

  await page.fill('#valorEmprestimo', '1000');

  await page.waitForSelector('#parcelas');

  const parcelas = await page.textContent('#parcelas');

  expect(parcelas).not.toBeNull();
});
 */