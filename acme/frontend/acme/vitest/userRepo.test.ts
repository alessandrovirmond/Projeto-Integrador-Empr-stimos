import { describe, expect, it } from 'vitest';
import { UserRepo } from '../src/repo/userRepo';

describe('UserRepo', () => {
  it('deve retornar um User ao consultar um email válido', async () => {
    const email = 'ale@dev.com';
    const senha = '123456';
    const userRepo = new UserRepo();
    

    const user = await userRepo.consultarEmail(email, senha);

    expect(user).not.toBeNull();

  });

  it('deve retornar erro ao consultar um email de nenhum User na base', async () => {
    const email = 'aaaaaaa'; 
    const senha = '98765432133'; 
    const userRepo = new UserRepo();
    let exceptionThrown = false;

    try {
      await userRepo.consultarEmail(email,senha);
    } catch (e) {
      exceptionThrown = true;
    }

    expect(exceptionThrown).toBe(true);


  });

  
});