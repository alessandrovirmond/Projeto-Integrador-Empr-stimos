
import { describe, expect, it } from 'vitest';
import { ClienteService } from '../src/service/clienteService';
import { Cliente} from '../src/model/cliente';


describe('ClienteService', () => {

  it('deve calcular a idade corretamente', () => {
    const clienteService = new ClienteService();
    const cliente = {
      dataNascimento: new Date('1990-01-01'),
    };
    const idade = clienteService.calcularIdade(cliente.dataNascimento);

    expect(idade).toBe(33);
  });

  it('deve lançar uma exceção ao validar CPF com tamanho incorreto', () => {
    const clienteService = new ClienteService();
    const cliente = {
      cpf: '1234567890',
    };
    let exceptionThrown = false;

    try {
      clienteService.validarCpf(cliente.cpf);
    } catch (e) {
      exceptionThrown = true;
    }

    expect(exceptionThrown).toBe(true);
  });

  it('deve lançar uma exceção ao validar cliente com nome muito curto', () => {
    const clienteService = new ClienteService();
    const cliente =  new Cliente(
      2,
      'Jo',
      '12345678901',
      new Date('1990-01-01'),
       '12345678',
      'jo@example.com',
       'Rua XYZ',
    );
    let exceptionThrown = false;

    try {
      clienteService.validarCliente(cliente);
    } catch (e) {
      exceptionThrown = true;
    }

    expect(exceptionThrown).toBe(true);
  });


});
