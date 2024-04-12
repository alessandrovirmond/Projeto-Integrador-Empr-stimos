import { FormaRepo } from '../src/repo/formaRepo'; 
import { describe, expect, it } from 'vitest';

describe('FormaRepo', () => {
  it('deve retornar uma forma de pagamento válida ao consultar um número de forma de pagamento existente', async () => {
    const formaRepo = new FormaRepo();
    const formaPagamentoNumero = 4; 

    const formaPagamento = await formaRepo.getFormaPagamento(formaPagamentoNumero);

    expect(formaPagamento).not.toBeNull();
  });

  it('deve retornar null ao consultar um número de forma de pagamento inexistente', async () => {
    const formaRepo = new FormaRepo();
    const formaPagamentoNumero = 999; 

    const formaPagamento = await formaRepo.getFormaPagamento(formaPagamentoNumero);

    expect(formaPagamento).toBeNull();
  });

});
