import { test, expect } from '@playwright/test';

test('Consultar email inválido e verificar erro', async ({ page }) => {

  await page.goto('http://localhost:5173/'); 

  await page.fill('#email', 'an');
  await page.fill('#senha', '123456');

  await page.click('#entrar');

  const clienteNome = await page.textContent('#mensagemErro');

  expect(clienteNome).toBe('Error: O email deve conter pelo menos 3 dígitos.');
});
