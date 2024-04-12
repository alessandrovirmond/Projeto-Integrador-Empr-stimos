import { describe, expect, it } from 'vitest';
import { EmprestimoService } from '../src/service/emprestimoService';

describe('EmprestimoService', () => {
  it('deve lançar uma exceção ao validar valor de empréstimo inválido', () => {
    const emprestimoService = new EmprestimoService();
    const valor = null; 
    let excecao = false;

    try {
      emprestimoService.validarValorEmprestimo(valor);
    } catch (e) {
      excecao = true;
    }

    expect(excecao).toBe(true);
  });

  it('deve validar o valor total do empréstimo corretamente', () => {
    const emprestimoService = new EmprestimoService();
    const valor = 1000; 
    const valorTotal = emprestimoService.validarValorTotalEmprestimo(valor);

    expect(valorTotal).toBe(1000);
  });
});
