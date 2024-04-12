import { ClienteView } from '../view/clienteView';
import { Cliente } from '../model/cliente';
import { ClienteRepo } from '../repo/clienteRepo';
import { ClienteService } from '../service/clienteService';
import { setCliente } from '../../config';

export class ClienteController {
  public ClienteView: ClienteView;
  public clienteRepo: ClienteRepo;
  public clienteService: ClienteService;
  public cliente: Cliente | null;

  constructor() {
    this.ClienteView = new ClienteView();
    this.clienteRepo = new ClienteRepo();
    this.clienteService = new ClienteService();
  }

  getCliente() {
    return this.cliente;
  }

setCliente(cliente){
  this.cliente = cliente;
  setCliente(cliente);
  this.ClienteView.exibirClienteEncontrado(cliente, this.clienteService.calcularIdade(cliente.dataNascimento));
}

async consultarCPF() {
  try {
    const cpf = this.ClienteView.getCPFInput();
    this.clienteService.validarCpf(cpf);
    const cliente = await this.clienteRepo.consultarCPF(cpf);

    if (cliente) {
      setCliente(cliente);
      this.cliente = cliente;
      console.log(cliente.dataNascimento);
      
      const idade = this.clienteService.calcularIdade(cliente.dataNascimento);
      this.ClienteView.exibirClienteEncontrado(cliente, idade);
      this.ClienteView.exibirErro("");
    } else {
      this.cliente = null;
      this.ClienteView.exibirErro("Cliente não encontrado");
    }
  } catch (error) {
    this.ClienteView.exibirErro(error);
   
    throw error; 
  }
  
}


  async cadastrar() {
    try {
      const novoCliente = this.ClienteView.pegarCadastro();

      this.clienteService.validarCliente(novoCliente);
      
     const sucess = await this.clienteRepo.cadastrarNovoCliente(novoCliente);
      if(sucess){
        this.ClienteView.exibirErro("Cadastrado com sucesso!");
        setTimeout(() => {
          this.ClienteView.limparCadastro();
        }, 3000);
      }else{
        this.ClienteView.exibirErro("CPF existente")
      }

    } catch (error) {
      console.error('Erro no cadastro:', error);
      this.ClienteView.exibirErro(error);

      throw error; 
    }
    }
  }

