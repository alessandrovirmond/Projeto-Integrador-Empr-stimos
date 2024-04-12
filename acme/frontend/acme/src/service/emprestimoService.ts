export class EmprestimoService {


  constructor() {

  }

  verificarSaldo(divida: number, valor: number) {
    const limiteCredito = 50000;
    const saldo = limiteCredito - divida;
    const porcentagemUtilizada = (divida / limiteCredito) * 100;
  
    console.log(saldo);
    console.log(divida);
    if(valor>saldo){
      throw new Error("Esse cliente ja utilizou "+porcentagemUtilizada+"% de seu crédito, seu valor máximo de emprestimo é: " + saldo);
    }
  }

  validarValorEmprestimo(valor: number | null): number {
    if (Number.isNaN(valor) || valor == null) {
      throw new Error("Digite o valor.");
    }
    if (valor < 500 || valor > 50000) {
      throw new Error("O valor tem que ser entre 500 e 50000 reais.");
    }

    return valor;
  }

  validarValorTotalEmprestimo(valor: number | null): number {
    if (valor === null) {
      throw new Error("Erro ao calcular valor total.");
    }

    return valor;
  }

  validarDatas(dataInicial: string, dataFinal: string): void {
    const regexData = /^\d{4}-\d{2}-\d{2}$/;
    console.log(dataFinal);
    const datasValidas = regexData.test(dataInicial) && regexData.test(dataFinal);
    if (!dataInicial || !dataFinal) {
      throw new Error('Informe as datas');
  }
    
    if (!datasValidas) {
      throw new Error('Formato de datas inválido');
    }

    const dataInicialObj = new Date(dataInicial);
    const dataFinalObj = new Date(dataFinal);

    if (dataInicialObj > dataFinalObj) {
      throw new Error('A data inicial não pode ser maior que a data final');
    }
  }

  calcularTotalPeriodo(emprestimos) {
    return emprestimos.reduce((total, emprestimo) => total + parseFloat(emprestimo.valorEmprestimo), 0).toFixed(2);
}

calcularMediaPeriodo(emprestimos) {
    const totalPeriodo = parseFloat(this.calcularTotalPeriodo(emprestimos));

    return (totalPeriodo / emprestimos.length).toFixed(2);
    
}


}