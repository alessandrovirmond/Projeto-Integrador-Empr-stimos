/* import { test, expect } from '@playwright/test';

test('Realizar emprestimo com valor maior que 50000 e verificar erro', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await page.fill('#email', 'andre@dev');
  await page.fill('#senha', '123456');

  await page.click('#entrar');

  await page.fill('#valorEmprestimo', '50001');

  const erro = await page.textContent('#mensagemErro');

  expect(erro).toContain('O valor tem que ser entre 500 e 50000 reais.');
}); */