import { UserView } from '../view/userView';
import { User } from '../model/user';
import { UserRepo } from '../repo/userRepo';
import { UserService } from '../service/userService';
import { setUser } from '../../config';
import { limpar } from '../../config';

export class UserController {
  public UserView: UserView;
  public UserRepo: UserRepo;
  public UserService: UserService;
  public static User: User | null;

  constructor() {
    this.UserView = new UserView();
    this.UserRepo = new UserRepo();
    this.UserService = new UserService();
  }

  getUser() {
    return UserController.User;
  }

setUser(User){
  UserController.User = User;
  setUser(User);
}
  
  async logar() {
    try {

        const email = this.UserView.getEmailInput();
        const senha = this.UserView.getSenhaInput();
        this.UserService.validarEmail(email, senha);
        const User = await this.UserRepo.consultarEmail(email,senha);
        if(User){
          
          if(User.admin == 1){
            console.log("login de adm");
            window.location.href = '/emprestimo.html'
            this.setUser(User);
          }else{
            console.log("login de User");
            window.location.href = '/home.html'
            this.setUser(User);

          }
        }else{
          this.UserView.exibirErro("User não encontrado");
        }
        /* const idade = this.UserService.calcularIdade(User.dataNascimento);
        this.UserView.exibirUser(User, idade); */
    } catch (error) {
        console.error('Erro no login:', error);
        this.UserView.exibirErro(error);
        throw error;
    }
}

  async logout(){
    try{

      await this.UserRepo.logout();
      limpar();
      window.location.href = '/index.html'
    }catch(error){

      this.UserView.exibirErro(error);

    }
  }


  }

