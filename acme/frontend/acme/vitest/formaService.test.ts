import { describe, expect, it } from 'vitest';
import { FormaService } from '../src/service/formaService';
import { FormaDePagamento } from '../src/model/formaDePagamento';

describe('FormaService', () => {
  it('deve lançar uma exceção ao validar valor de empréstimo inválido', () => {
    const formaService = new FormaService();
    const valorEmprestimo = 50001;
    let exceptionThrown = false;

    try {
      formaService.validarValorEmprestimo(valorEmprestimo);
    } catch (e) {
      exceptionThrown = true;
    }

    expect(exceptionThrown).toBe(true);
  });

  it('deve retornar as parcelas com juros', () => {
    const formaService = new FormaService();
    const formaPagamento = new FormaDePagamento(5,'5 meses', 5, 120);
    const valorEmprestimo = 1000; 
    const parcelas = formaService.calcularParcelasComJuros(formaPagamento, valorEmprestimo);

    expect(parcelas).not.toBeNull(); 
  });
});
