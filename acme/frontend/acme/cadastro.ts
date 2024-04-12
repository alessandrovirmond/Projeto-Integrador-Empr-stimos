import {verificarSession} from './src/service/sessionService'
import { UserView } from './src/view/userView';
import { getUser } from './config';
import { ClienteController } from './src/controller/clienteController';
        


        const cliente = new ClienteController();
        const cadastrarButton = document.getElementById('cadastrar');
        const userView = new UserView();

        cadastrarButton!.addEventListener('click', async (event) => {
        console.log("QUASE CADASTRANDO");
        event.preventDefault();
        await cliente.cadastrar();

});

document.addEventListener('DOMContentLoaded', async () => {
               
               const logado = await verificarSession();
               console.log(logado);
               if (logado == false) {
                 window.location.href = './index.html';
                 
             } 
           
             const user = getUser();
             userView.exibirUser(user!.nome, user!.admin);
             
             });
             
