import { EmprestimoController } from './src/controller/emprestimoController';
import { ClienteController } from './src/controller/clienteController';
import { getCliente } from './config';
import { limpar } from './config';
import {verificarSession} from './src/service/sessionService'
import { UserView } from './src/view/userView';
import { getUser } from './config';

const buttonListar = document.getElementById("ListarEmprestimos");
const buttonDados = document.getElementById("dados");
const logoutButton = document.getElementById("logout");
const userView = new UserView();

document.addEventListener('DOMContentLoaded', async () => {
               
    const logado = await verificarSession();
    console.log(logado);
    if (logado == false) {
      window.location.href = './index.html';
      
  } 

  const user = getUser();
  userView.exibirUser(user.nome, user.admin);
  
  });
  

buttonListar.addEventListener('click', (event) => {
    const emprestimoController = new EmprestimoController();
        
    const dataInicialInput = document.getElementById('dataInicial') as HTMLInputElement;
    const dataFinalInput = document.getElementById('dataFinal') as HTMLInputElement;

    const dataInicial = dataInicialInput.value;
    const dataFinal = dataFinalInput.value;

    emprestimoController.listarEmprestimos(dataInicial, dataFinal);
});

buttonDados.addEventListener('click', (event) => {
    const emprestimoController = new EmprestimoController();
        
    const dataInicialInput = document.getElementById('dataInicial') as HTMLInputElement;
    const dataFinalInput = document.getElementById('dataFinal') as HTMLInputElement;

    const dataInicial = dataInicialInput.value;
    const dataFinal = dataFinalInput.value;

    emprestimoController.exibirDados(dataInicial, dataFinal);
})

/* logoutButton.addEventListener('click',async () => {
    const cliente = new ClienteController();
    try {
        limpar();
        await cliente.logout();

    } catch (error) {
        console.error('Erro no logout:', error);
    }
    }) */

    /* document.addEventListener('DOMContentLoaded', () => {
    const cliente = getCliente();

    if (cliente && cliente.admin !== 1) {
        window.location.href = './home.html';
    }
    if(!cliente){
        window.location.href = './index.html'
    }
    }); */