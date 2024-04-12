import { Console } from 'console';
import { Cliente } from '../model/cliente';
import { Emprestimo } from '../model/emprestimo';
import { FormaDePagamento } from '../model/formaDePagamento';
import { EmprestimoRepo } from '../repo/emprestimoRepo';
import { EmprestimoService } from '../service/emprestimoService';
import { EmprestimoView } from '../view/emprestimoView';
import { verificarPermissao } from '../service/verificarPermissao';


export class EmprestimoController{
    private emprestimoRepo: EmprestimoRepo; 
    private emprestimoView: EmprestimoView;
    private emprestimoService: EmprestimoService;
  
    constructor() {
      this.emprestimoRepo = new EmprestimoRepo();
      this.emprestimoView = new EmprestimoView();
      this.emprestimoService = new EmprestimoService();
    }
    
    async realizarEmprestimo(cliente: Cliente, formaPagamento: FormaDePagamento, valor: number, valorTotal: number): Promise<number> {
      try {
        if (!cliente) {
          this.emprestimoView.exibirErro("Identifique o cliente antes de realizar o empréstimo");
          return 0; 
        }
        console.log(valor);

        const divida = await this.emprestimoRepo.getDivida(cliente.id);

        this.emprestimoService.validarValorEmprestimo(valor);
        console.log(divida);
        this.emprestimoService.verificarSaldo(divida, valor);

        this.emprestimoService.validarValorTotalEmprestimo(valorTotal);
    
    
        const emprestimo = new Emprestimo(cliente, formaPagamento, new Date(), valor, valorTotal);
    
        await this.emprestimoRepo.salvarEmprestimo(emprestimo);

        this.emprestimoView.exibirErro("Sucesso ao salvar empréstimo!");
        return 1; 
      } catch (error) {
        this.emprestimoView.exibirErro("Falha ao salvar empréstimo: " + error.message);
        return 0; 
      }
    }

    
    async exibirDados(dataInicial: string, dataFinal: string) {
      try {
        const permissao =  await verificarPermissao();
        if(permissao){

          console.log(permissao);
          
          this.emprestimoService.validarDatas(dataInicial, dataFinal)

          const emprestimos: Emprestimo[] = await this.emprestimoRepo.getEmprestimos(dataInicial, dataFinal);


          this.emprestimoView.desenharTabela(emprestimos);

          this.emprestimoView.exibirErro("");
        }else{
          this.emprestimoView.exibirErro("Usuário sem permissão");
         }
      } catch (error) {
        this.emprestimoView.exibirErro(error);
          console.error('Erro ao listar empréstimos:', error);
      }
  }
    

    async listarEmprestimos(dataInicial: string, dataFinal: string) {
      try {
        this.emprestimoService.validarDatas(dataInicial, dataFinal)

          const permissao = await verificarPermissao();
        if(permissao){


          const emprestimos: Emprestimo[] = await this.emprestimoRepo.getEmprestimos(dataInicial, dataFinal);

          this.emprestimoView.desenharGrafico(emprestimos);

          const totalPeriodo = this.emprestimoService.calcularTotalPeriodo(emprestimos);

          const mediaPeriodo = this.emprestimoService.calcularMediaPeriodo(emprestimos);

          this.emprestimoView.mostrarDados(totalPeriodo, mediaPeriodo);
          this.emprestimoView.exibirErro("");

        }else{
          this.emprestimoView.exibirErro("Usuário sem permissão");
      }
      } catch (error) {
        this.emprestimoView.exibirErro(error);
          console.error('Erro ao listar empréstimos:', error);
      }
  }


 calcularTotalPeriodo(emprestimos) {
    return emprestimos.reduce((total, emprestimo) => total + emprestimo.valorFinal, 0);
}

 calcularMediaPeriodo(emprestimos) {
    const totalPeriodo = this.calcularTotalPeriodo(emprestimos);
    return totalPeriodo / emprestimos.length;
}

  
  }

