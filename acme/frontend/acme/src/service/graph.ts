import 'chart.js/chart-bar';
import Chart from 'chart.js/auto';


export function desenharGrafico(emprestimos) {
  const dataLabels = [];
  const dataValues = [];

  emprestimos.forEach((emprestimo) => {
    const dataLabel = emprestimo.dataHora.toISOString().split('T')[0];
    const index = dataLabels.indexOf(dataLabel);

    if (index !== -1) {
      dataValues[index] += emprestimo.valorEmprestimo;
    } else {
      dataLabels.push(dataLabel);
      dataValues.push(emprestimo.valorEmprestimo);
    }
  });

  const canvas = document.getElementById('MyChart') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  

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
      }],
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'DD/MM/YYYY',
            },
          },
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

