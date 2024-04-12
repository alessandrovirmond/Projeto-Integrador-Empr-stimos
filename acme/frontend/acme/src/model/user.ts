export class User {
    id: number;
    nome: string;
    email: string;
    senha: string;
    admin: number;
  
    constructor(
        id: number,
        nome: string,
        email: string,
        senha: string,
        admin: number
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.admin = admin;
    }
  }
  