import { describe, expect, it } from 'vitest';
import { UserService } from '../src/service/userService';

describe('UserService', () => {
  it('deve lançar uma exceção ao validar email com tamanho incorreto', () => {
    const userService = new UserService();
    const cpf = '11'; 
    const senha = '1111111'; 
    let exceptionThrown = false;

    try {
      userService.validarEmail(cpf,senha);
    } catch (e) {
      exceptionThrown = true;
    }

    expect(exceptionThrown).toBe(true);
  });

  it('deve lançar uma exceção ao validar senha com tamanho incorreto', () => {
    const userService = new UserService();
    const cpf = '11111'; 
    const senha = '111'; 
    let exceptionThrown = false;

    try {
      userService.validarEmail(cpf,senha);
    } catch (e) {
      exceptionThrown = true;
    }

    expect(exceptionThrown).toBe(true);
  });


});