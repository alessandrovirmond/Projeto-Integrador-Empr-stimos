import { Emprestimo } from '../model/emprestimo';
import { Chart } from 'chart.js';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';

export class EmprestimoView {
    private mensagemErroElement: HTMLElement | null;
    constructor(){
        this.mensagemErroElement = document.getElementById('mensagemErro');

    }

    exibirErro(mensagem: string) {
        this.mensagemErroElement!.textContent = mensagem;
    }

    mostrarDados(total: number, media: string){
        const totalPeriodoElement = document.getElementById('totalPeriodo');
        const mediaPeriodoElement = document.getElementById('mediaPeriodo');

        totalPeriodoElement.textContent = total.toString();
        mediaPeriodoElement.textContent = media.toString();
    }

    desenharTabela(emprestimos: Emprestimo[]): void {
        const tabelaEmprestimos = document.getElementById('tabelaEmprestimos');
       

        tabelaEmprestimos!.innerHTML = '';

        emprestimos.forEach(emprestimo => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${emprestimo.dataHora}</td>
                <td>${emprestimo.cliente.nome}</td>
                <td>${emprestimo.cliente.cpf}</td>
                <td>${emprestimo.valorEmprestimo}</td>
                <td>${emprestimo.formaPagamento.descricao}</td>
                <td>${emprestimo.valorFinal}</td>
            `;
            tabelaEmprestimos!.appendChild(row);
        });
    }


    desenharGrafico(emprestimos: Emprestimo[]) {
      const dataLabels = [];
      const dataValues = [];
    
      emprestimos.forEach((emprestimo) => {
        const dataHora = new Date(emprestimo.dataHora);
        const dataFormatada = format(dataHora, 'dd/MM/yyyy');
    
        const index = dataLabels.indexOf(dataFormatada);
    
        const valoresEmprestimo = emprestimo.valorEmprestimo.toString().split('.').map(Number);
    
        if (valoresEmprestimo.every(Number.isFinite)) {
          const valorNumerico = valoresEmprestimo.reduce((total, valor) => total + valor, 0);
          const valorFormatado = parseFloat(valorNumerico.toFixed(2));
    
          if (index !== -1) {
            dataValues[index] += valorFormatado;
          } else {
            dataLabels.push(dataFormatada);
            dataValues.push(valorFormatado);
          }
        } else {
          console.error('Valores de empréstimo não são números válidos:', emprestimo.valorEmprestimo);
        }
      });
    
      const canvas = document.getElementById('MyChart') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
    
      Chart.getChart(ctx)?.destroy();
    
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dataLabels,
          datasets: [{
            label: 'Valor Total do Empréstimo',
            data: dataValues,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barThickness: 20,
          }],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Data',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Valor Total do Empréstimo',
              },
            },
          },
        },
      });
    }
    
      
      


}
