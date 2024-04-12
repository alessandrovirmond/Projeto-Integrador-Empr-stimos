import { Cliente } from './cliente';
import { FormaDePagamento } from './formaDePagamento';

export class Emprestimo {
  cliente: Cliente; 
  formaPagamento: FormaDePagamento; 
  dataHora: Date;
  valorEmprestimo: number;
  valorFinal: number;

  constructor(

    cliente: Cliente,
    formaPagamento: FormaDePagamento,
    dataHora: Date,
    valorEmprestimo: number,
    valorFinal: number
  ) {

    this.cliente = cliente;
    this.formaPagamento = formaPagamento;
    this.dataHora = dataHora;
    this.valorEmprestimo = valorEmprestimo;
    this.valorFinal = valorFinal;
  }
}
