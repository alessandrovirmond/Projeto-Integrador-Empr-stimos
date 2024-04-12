import { Cliente } from '../model/cliente';

export class ClienteView {
  private consultarCPFButton: HTMLElement;
  private cpfInput: HTMLInputElement;
  private mensagemErroElement: HTMLElement | null;
  private clienteEncontradoElement: HTMLElement;
  private clienteNomeElement: HTMLElement;
  private clienteDataNascimentoElement: HTMLElement;
  private clienteCpfElement: HTMLElement;  
  private clienteTelefoneElement: HTMLElement;  
  private clienteEmailElement: HTMLElement;  
  private clienteEnderecoElement: HTMLElement;  


  constructor() {

    this.mensagemErroElement = document.getElementById('mensagemErro');
    this.clienteEncontradoElement = document.getElementById('clienteEncontrado') as HTMLElement;
    this.clienteNomeElement = document.getElementById('clienteNome') as HTMLElement;
    this.clienteNomeElement = document.getElementById('clienteNome');
    this.clienteCpfElement = document.getElementById('clienteCpf');
    this.clienteDataNascimentoElement = document.getElementById('clienteDataNascimento');
    this.clienteTelefoneElement = document.getElementById('clienteTelefone');
    this.clienteEmailElement = document.getElementById('clienteEmail');
    this.clienteEnderecoElement = document.getElementById('clienteEndereco');

  }

  exibirClienteEncontrado(cliente, idade) {
    this.clienteNomeElement.textContent = `Nome: ${cliente.nome}`;
    this.clienteCpfElement.textContent = `CPF: ${cliente.cpf}`;
/*     this.clienteDataNascimentoElement.textContent = `Idade: ${idade}`;
 */    this.clienteTelefoneElement.textContent = `Telefone: ${cliente.telefone}`;
    this.clienteEmailElement.textContent = `Email: ${cliente.email}`;
    this.clienteEnderecoElement.textContent = `Endereço: ${cliente.endereco}`;
  }
  
  

pegarCadastro() {
  const nomeInput = document.getElementById('nome') as HTMLInputElement;
  const dataNascimentoInput = document.getElementById('data_nascimento') as HTMLInputElement;
  const cpfInput = document.getElementById('cpf') as HTMLInputElement;
  const telefoneInput = document.getElementById('telefone') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const enderecoInput = document.getElementById('endereco') as HTMLInputElement;

  const nome = nomeInput ? nomeInput.value : '';
  const dataNascimentoString = dataNascimentoInput ? dataNascimentoInput.value : '';
  const cpf = cpfInput ? cpfInput.value : '';
  const telefone = telefoneInput ? telefoneInput.value : '';
  const email = emailInput ? emailInput.value : '';
  const endereco = enderecoInput ? enderecoInput.value : '';

  const dataNascimento = this.parseDataNascimento(dataNascimentoString);
  const cliente = new Cliente(null, nome, cpf, new Date(dataNascimento), telefone, email, endereco);
  return cliente;
}

limparCadastro() {
  const nomeInput = document.getElementById('nome') as HTMLInputElement;
  const dataNascimentoInput = document.getElementById('data_nascimento') as HTMLInputElement;
  const cpfInput = document.getElementById('cpf') as HTMLInputElement;
  const telefoneInput = document.getElementById('telefone') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const enderecoInput = document.getElementById('endereco') as HTMLInputElement;
  const senhaInput = document.getElementById('senha') as HTMLInputElement;

  if (nomeInput) nomeInput.value = '';
  if (dataNascimentoInput) dataNascimentoInput.value = '';
  if (cpfInput) cpfInput.value = '';
  if (telefoneInput) telefoneInput.value = '';
  if (emailInput) emailInput.value = '';
  if (enderecoInput) enderecoInput.value = '';
  if (senhaInput) senhaInput.value = '';

  this.mensagemErroElement.textContent = '';

}





getCPFInput(): string {
  const input = document.getElementById('cpfInput') as HTMLInputElement;
  return input.value;
}

calcularIdade(data: Date): number {
  const dataAtual = new Date();
  const dataNascimento = new Date(data);

  const diff = dataAtual.getTime() - dataNascimento.getTime();
  const idade = new Date(diff);

  return Math.abs(idade.getUTCFullYear() - 1970);
}


parseDataNascimento(dataNascimentoString: string): Date {
  const [day, month, year] = dataNascimentoString.split('/').map(Number);

  const dataNascimento = new Date(year, month - 1, day);
  return dataNascimento;
}

   exibirErro(mensagem: string) {
    this.mensagemErroElement.textContent = mensagem;

  }


}
