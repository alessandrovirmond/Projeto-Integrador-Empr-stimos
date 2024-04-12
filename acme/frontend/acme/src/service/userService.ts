import { User } from "../model/user";

export class UserService {

    constructor() {

      }

  validarEmail(email: string, senha: string) {
    if (email.length < 3) {
      throw new Error("O email deve conter pelo menos 3 dígitos.");
    }
    if (senha.length < 6) {
      throw new Error("A senha deve conter pelo menos 6 dígitos.");
    }
  }


}
