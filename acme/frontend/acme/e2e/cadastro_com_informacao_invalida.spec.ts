import { test, expect } from '@playwright/test';

test('Cadastro com sucesso', async ({ page }) => {
  await page.goto('http://localhost:5173'); 

  await page.fill('#email', 'ale@dev.com');
  await page.fill('#senha', '123456');

  await page.click('#entrar');
  await page.click('#cadastrohtml');

  await page.fill('#nome', 'Jo');
  await page.fill('#data_nascimento', '10/10/2010');
  await page.fill('#cpf', '12345678900');
  await page.fill('#telefone', '123456789');
  await page.fill('#email', 'john@example.com');
  await page.fill('#endereco', '123 Main St');

  await page.click('#cadastrar');

  const mensagemErro = await page.textContent('#mensagemErro');

  expect(mensagemErro).toBe('Error: O nome deve conter pelo menos 3 caracteres.');
});


