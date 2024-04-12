import { getCliente } from './config';
import { ClienteController } from './src/controller/clienteController';
import { UserController } from './src/controller/userController';
import { EmprestimoController } from './src/controller/emprestimoController';
import { FormaController } from './src/controller/formaController';
import { Cliente } from './src/model/cliente';
import { Emprestimo } from './src/model/emprestimo';
import {verificarSession} from './src/service/sessionService'


const cliente = new ClienteController();
const forma = new FormaController();
const user = new UserController();

const cadastrarButton = document.getElementById('cadastrar');
const entrarButton = document.getElementById('entrar');
/* const selectPagamento = document.getElementById('formaPagamento');
const realizarEmprestimo = document.getElementById('realizarEmprestimo');
const inputValorEmprestimo = document.getElementById('valorEmprestimo'); */
const logoutButton = document.getElementById('logout');



if(entrarButton){

  entrarButton.addEventListener('click', async (event) => {
    console.log("QUASE ENTRANDO");
    event.preventDefault();
    await user.logar();
    
  });
}else{
  logoutButton.addEventListener('click', async () => {
    try {
      await user.logout();
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  })
  
}
/* 
window.addEventListener('DOMContentLoaded', async () => {
  console.log("CARREGOU A PAGE");
    try {
        const clienteSession = await sessionService.verificarSession();

        if (clienteSession) {
            if (clienteSession.admin) {
                window.location.href = 'pre-emprestimos.html';
                cliente.setCliente(clienteSession);
            } else {
                window.location.href = 'home.html';
            }

        } else {
            console.log('Nenhum cliente encontrado na sessão.');
        }
    } catch (error) {
        console.error('Erro ao verificar a sessão:', error.message);
    }
}); */



/* document.addEventListener('DOMContentLoaded', () => {
    const cliente = getCliente();

    if (cliente && cliente.admin !== 1) {
        window.location.href = './home.html';
    }
    if (cliente && cliente.admin !== 0) {
        window.location.href = './emprestimo.html';
    }
    }); */

/* cadastrarButton.addEventListener('click', async (event) => {
  console.log("QUASE CADASTRANDO");
  event.preventDefault();
  await cliente.cadastrar();

}); */




