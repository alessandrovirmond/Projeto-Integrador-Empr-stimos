/* import { test, expect } from '@playwright/test';

test('Selecionar forma de pagamento sem valor digitado', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.fill('#email', 'andre@dev');
  await page.fill('#senha', '123456');

  await page.click('#entrar');

  await page.selectOption('#formaPagamento', '6');

  const erro = await page.textContent('#mensagemErro');

  expect(erro).toContain('Preencha o valor de empréstimo');
});
 */
