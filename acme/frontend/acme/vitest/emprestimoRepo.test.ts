import { describe, expect, it } from 'vitest';
import { EmprestimoService } from '../src/service/emprestimoService';
import { Emprestimo } from '../src/model/emprestimo';
import { Cliente } from '../src/model/cliente';
import { FormaDePagamento } from '../src/model/formaDePagamento';

describe('EmprestimoService', () => {
  it('deve lançar uma exceção ao validar valor de empréstimo inválido', () => {
    const emprestimoService = new EmprestimoService();
    const valor = null;
    let excecaoLancada = false;

    try {
      emprestimoService.validarValorEmprestimo(valor);
    } catch (e) {
      excecaoLancada = true;
    }

    expect(excecaoLancada).toBe(true);
  });

  it('deve validar o valor total do empréstimo corretamente', () => {
    const emprestimoService = new EmprestimoService();
    const valor = 1000;
    const valorTotal = emprestimoService.validarValorTotalEmprestimo(valor);

    expect(valorTotal).toBe(1000);
  });

  it('deve calcular o total do período corretamente', () => {
    const emprestimoService = new EmprestimoService();
    const emprestimos = [
      new Emprestimo(
        new Cliente(1, 'Cliente1', '12345678900', new Date(), '123456789', 'cliente1@example.com', 'Endereço1', 'senha1', 0),
        new FormaDePagamento(1, 'Descrição1', 12, 0.05),
        new Date('2023-01-01'),
        500,
        525
      ),
    ];

    const totalPeriodo = emprestimoService.calcularTotalPeriodo(emprestimos);

    expect(totalPeriodo).toBe('500.00');
  });

  it('deve calcular a média do período corretamente', () => {
    const emprestimoService = new EmprestimoService();
    const emprestimos = [
      new Emprestimo(
        new Cliente(1, 'Cliente1', '12345678900', new Date(), '123456789', 'cliente1@example.com', 'Endereço1', 'senha1', 0),
        new FormaDePagamento(1, 'Descrição1', 12, 0.05),
        new Date('2023-01-01'),
        500,
        525
      ),new Emprestimo(
        new Cliente(1, 'Cliente1', '12345678900', new Date(), '123456789', 'cliente1@example.com', 'Endereço1', 'senha1', 0),
        new FormaDePagamento(1, 'Descrição1', 12, 0.05),
        new Date('2023-01-01'),
        500,
        525
      ),
    ];

    const mediaPeriodo = emprestimoService.calcularMediaPeriodo(emprestimos);

    expect(mediaPeriodo).toBe('500.00');
  });

  it('deve lançar uma exceção ao validar datas inválidas', () => {
    const emprestimoService = new EmprestimoService();
    const dataInicial = '2023-01-01';
    const dataFinal = 'invalida';
    let excecaoLancada = false;

    try {
      emprestimoService.validarDatas(dataInicial, dataFinal);
    } catch (e) {
      excecaoLancada = true;
    }

    expect(excecaoLancada).toBe(true);
  });

  it('deve lançar uma exceção ao verificar saldo com valor acima do máximo', () => {
    const emprestimoService = new EmprestimoService();
    const divida = 10000;
    const valor = 60000;
    let excecaoLancada = false;

    try {
      emprestimoService.verificarSaldo(divida, valor);
    } catch (e) {
      excecaoLancada = true;
    }

    expect(excecaoLancada).toBe(true);
  });
});