import { User } from '../model/user';

export class UserRepo {
  async consultarEmail(email: string,senha: string): Promise<User | null> {

    try {

      const dadosLogin = {
          email: email,
          senha: senha,
      };

      const dados = {
        User: dadosLogin,
      };


      const response = await fetch('http://localhost/2023-2-pis-g3/acme/acme/backend/user.php', {
          method: 'POST',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json'
              
          },
          body: JSON.stringify(dados)
      });

      if (response.ok) {
        console.log(response.json)
        const User = await response.json() as User;
        return User; 
      } else {
        throw new Error("User não encontrado.");
      }

  } catch (error) {
    console.error('Erro no login:', error);
    throw new Error("User não encontrado.")
  }
  }


  async logout(){
    try {
      const response = await fetch('http://localhost/2023-2-pis-g3/acme/acme/backend/logout.php',{
        credentials: 'include',
      });
      const data = await response.json();
  
      console.log(data.mensagem); 
    } catch (error) {
      console.error('Erro durante o logout:', error);
    }
  }




}
