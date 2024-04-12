import { FormaDePagamento } from "../model/formaDePagamento";
import { Parcela } from "../model/parcela";

export class FormaService {

    public valorTotal: number;


  constructor() {

  }

  getValorTotal() {
    return this.valorTotal;
  }


  validarValorEmprestimo(valorEmprestimo: number) {
    if (valorEmprestimo < 500 || valorEmprestimo > 50000) {
      throw new Error("O valor tem que ser entre 500 e 50000 reais.");
    }
  }

  calcularParcelasComJuros(formaPagamento: FormaDePagamento, valorEmprestimo: number): Parcela[] {
    const parcelas: Parcela[] = [];
    const juros = formaPagamento.juros / 100;
    this.valorTotal = valorEmprestimo * (1 + juros);
    const valorParcelaBase = this.valorTotal / formaPagamento.numeroMeses;
    const diferencaTotal = this.valorTotal - (valorParcelaBase * formaPagamento.numeroMeses);
    let diferencaParcela = diferencaTotal / formaPagamento.numeroMeses;

    const calcularDataVencimento = (numeroParcela: number) => {
      const hoje = new Date();
      const vencimento = new Date(hoje);
      vencimento.setDate(hoje.getDate() + 30 * numeroParcela);
      return vencimento;
    };

    for (let i = 1; i <= formaPagamento.numeroMeses; i++) {
      const vencimento = calcularDataVencimento(i);
      let valorParcela = valorParcelaBase;

      if (diferencaParcela > 0) {
        valorParcela += diferencaParcela;
        diferencaParcela = 0;
      }

      valorParcela = Number(valorParcela.toFixed(2));

      const parcela = new Parcela(i, 1, i, vencimento, valorParcela);
      parcelas.push(parcela);
    }

    return parcelas;
  }
  
}
