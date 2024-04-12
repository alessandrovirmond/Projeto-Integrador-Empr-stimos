export class FormaDePagamento {
    idFormaPagamento: number;
    descricao: string;
    numeroMeses: number;
    juros: number;
  
    constructor(
      idFormaPagamento: number,
      descricao: string,
      numeroMeses: number,
      juros: number
    ) {
      this.idFormaPagamento = idFormaPagamento;
      this.descricao = descricao;
      this.numeroMeses = numeroMeses;
      this.juros = juros;
    }
  }
  