import { FormaView } from '../view/formaView';
import { FormaRepo } from '../repo/formaRepo';
import { FormaDePagamento } from '../model/formaDePagamento';
import { Parcela } from '../model/parcela';
import { FormaService } from '../service/formaService';

export class FormaController {
  private formaView: FormaView;
  private formaRepo: FormaRepo;
  private formaService: FormaService;
  public formaDePagamento: FormaDePagamento;
  public valor: number;
  public valorTotal: number;

  constructor() {
    this.formaView = new FormaView();
    this.formaRepo = new FormaRepo();
    this.formaService = new FormaService();
  }

  getValor() {
    return this.valor;
  }

  getValorTotal() {
    this.valorTotal = this.formaService.getValorTotal();
    return this.valorTotal;
  }

  getFormaDePagamento() {
    return this.formaDePagamento;
  }

  atualizarValor() {
    this.valor = this.formaView.getValue();
  }

  async calcularParcelas() {
    try {
      const formaPagamentoNumero = this.formaView.getOption();
      const valorEmprestimo = this.formaView.getValue();

      if (!valorEmprestimo) {
        this.formaView.exibirErro("Preencha o valor de empréstimo");
        return;
      }

      this.formaService.validarValorEmprestimo(valorEmprestimo);

      this.formaView.exibirErro("");

      this.valor = valorEmprestimo;

      this.formaDePagamento = await this.formaRepo.getFormaPagamento(formaPagamentoNumero);

    const parcelas = this.formaService.calcularParcelasComJuros(this.formaDePagamento, valorEmprestimo);

    this.formaView.mostrarParcelas(parcelas);

    } catch (error) {
      this.formaView.mostrarParcelas([]);
      this.formaView.exibirErro(error.message);
    
    }
  }
}
