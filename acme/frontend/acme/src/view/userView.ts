import { User } from '../model/user';

export class UserView {
  private consultarCPFButton: HTMLElement;
  private cpfInput: HTMLInputElement;
  private  mensagemErroElement: HTMLElement;
  private UserEncontradoElement: HTMLElement;
  private UserNomeElement: HTMLElement;
  private UserAdminElement: HTMLElement;
  private UserCPFElement: HTMLElement;
  private UserDataNascimentoElement: HTMLElement;

  constructor() {

    this.mensagemErroElement = document.getElementById('mensagemErro') as HTMLElement;
    this.UserEncontradoElement = document.getElementById('UserEncontrado') as HTMLElement;
    this.UserNomeElement = document.getElementById('UserName') as HTMLElement;
    this.UserAdminElement = document.getElementById('UserAdmin') as HTMLElement;


  }

  exibirUser(nome: string, admin: number){
    this.UserNomeElement.textContent = "Bem vindo "+ nome;
    if(admin == 1){
      this.UserAdminElement.textContent = "Gerente";
    }else{
      this.UserAdminElement.textContent ="Funcionário";
    }
  }


 getEmailInput(): string {
    const input = document.getElementById('email') as HTMLInputElement;
    return input.value;
  }

  getSenhaInput(): string {
    const input = document.getElementById('senha') as HTMLInputElement;
    return input.value;
  }

   exibirErro(mensagem: string) {
    this.mensagemErroElement.textContent = mensagem;

  }


}
