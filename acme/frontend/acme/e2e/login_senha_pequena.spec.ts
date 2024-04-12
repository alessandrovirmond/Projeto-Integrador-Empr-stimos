import { test, expect } from '@playwright/test';

test('Consultar senha inválida e verificar erro', async ({ page }) => {

  await page.goto('http://localhost:5173/'); 

  await page.fill('#email', 'ale@dev.com');
  await page.fill('#senha', '123');

  await page.click('#entrar');

  const clienteNome = await page.textContent('#mensagemErro');

  expect(clienteNome).toBe('Error: A senha deve conter pelo menos 6 dígitos.');
});
