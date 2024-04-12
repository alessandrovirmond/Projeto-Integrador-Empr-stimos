import { describe, expect, it } from 'vitest';
import { ClienteRepo } from '../src/repo/clienteRepo';

describe('ClienteRepo', () => {
  it('deve retornar um cliente ao consultar um CPF válido', async () => {
    const CPF = '12345678901';
    const clienteRepo = new ClienteRepo();
    

    const cliente = await clienteRepo.consultarCPF(CPF);

    expect(cliente).not.toBeNull();

  });

  it('deve retornar erro ao consultar um CPF de nenhum cliente na base', async () => {
    const CPF = '98765432133'; 
    const clienteRepo = new ClienteRepo();
    let exceptionThrown = false;

    try {
      await clienteRepo.consultarCPF(CPF);
    } catch (e) {
      exceptionThrown = true;
    }

    expect(exceptionThrown).toBe(true);


  });

  
});