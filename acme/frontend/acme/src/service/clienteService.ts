import { Cliente } from "../model/cliente";

export class ClienteService {

    constructor() {

      }


  calcularIdade(dataNascimento: Date): number {
    const dataAtual = new Date();
    const dataNascimentoDate = new Date(dataNascimento);

    const diff = dataAtual.getTime() - dataNascimentoDate.getTime();
    const idade = new Date(diff);


    return Math.abs(idade.getUTCFullYear() - 1970);
  }
  
  validarCpf(cpf: string) {
    if (cpf.length !== 11) {
      throw new Error("O CPF deve conter 11 dígitos.");
    }
  }


  validarCliente(cliente: Cliente) {

    if (cliente.nome.length < 3) {
      throw new Error('O nome deve conter pelo menos 3 caracteres.');
    }

    if (cliente.cpf.length != 11  ) {
      throw new Error('O CPF deve conter 11 caracteres.');
    }

    if (cliente.telefone.length < 8) {
      throw new Error('O telefone deve conter pelo menos 8 caracteres.');
    }

    if (cliente.email.length < 3) {
      throw new Error('O email deve conter pelo menos 3 caracteres.');
    }

    if (cliente.endereco.length < 3) {
      throw new Error('O endereço deve conter pelo menos 3 caracteres.');
    }

    const dataNascimentoRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const dataNascimentoString = cliente.dataNascimento.toLocaleDateString('pt-BR');

    if (!dataNascimentoRegex.test(dataNascimentoString) || !this.isValidDate(dataNascimentoString)) {
      throw new Error('A data de nascimento deve estar no formato dd/mm/aaaa.');
    }
  }

  private isValidDate(dateString: string): boolean {
    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    return !isNaN(date.getTime());
  }


}
