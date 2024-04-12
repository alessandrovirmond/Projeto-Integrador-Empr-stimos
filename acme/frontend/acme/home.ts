import { ClienteController } from './src/controller/clienteController';
import { ClienteService } from './src/service/clienteService';
import { EmprestimoController } from './src/controller/emprestimoController';
import { FormaController } from './src/controller/formaController';
import { Cliente } from './src/model/cliente';
import { Emprestimo } from './src/model/emprestimo';
import { UserView } from './src/view/userView';
import { getUser } from './config';
import { getCliente } from './config';
import { limpar } from './config';
import {verificarSession} from './src/service/sessionService'

const logoutButton = document.getElementById("logout");
const selectPagamento = document.getElementById('formaPagamento');
const realizarEmprestimo = document.getElementById('realizarEmprestimo');
const inputValorEmprestimo = document.getElementById('valorEmprestimo');
const cpfButton = document.getElementById('consultarCPFButton');
const forma = new FormaController();

const clienteService = new ClienteService();
const userView = new UserView();

inputValorEmprestimo.addEventListener('input', function (event) {
    forma.atualizarValor();
    forma.calcularParcelas();
});


selectPagamento.addEventListener('change', () => {
forma.calcularParcelas();
});

cpfButton.addEventListener('click', (event) => {
    event.preventDefault();
    const cliente = new ClienteController();
    cliente.consultarCPF();
});



realizarEmprestimo.addEventListener('click', async (event) => {
    event.preventDefault();
    const formaPagamento = forma.getFormaDePagamento();
    const valor = forma.getValor();
    const valorTotal = forma.getValorTotal();
    const emprestimo = new EmprestimoController();

    try {
        const cliente = getCliente();
    const exito = await emprestimo.realizarEmprestimo(cliente, formaPagamento, valor, valorTotal);
} catch (error) {
    console.error('Erro ao realizar empréstimo:', error);
}
});


document.addEventListener('DOMContentLoaded', async () => {
       
       const logado = await verificarSession();
       console.log(logado);
       if (logado == false) {
         window.location.href = './index.html';
         
     } 

     const user = getUser();
     userView.exibirUser(user.nome, user.admin);
     
     });
     

