export class Cliente {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: Date;
  telefone: string;
  email: string;
  endereco: string;

  constructor(
      id: number,
      nome: string,
      cpf: string,
      dataNascimento: Date,
      telefone: string,
      email: string,
      endereco: string,
  ) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.telefone = telefone;
      this.email = email;
      this.endereco = endereco;

  }
}
