import { Emprestimo } from "../model/emprestimo";

export class EmprestimoRepo {
    async salvarEmprestimo(emprestimo : Emprestimo) {
      try {
        console.log(emprestimo);
        const emprestimoJSON = JSON.stringify(emprestimo);
        console.log(emprestimoJSON);
        const response = await fetch('http://localhost:/2023-2-pis-g3/acme/acme/backend/emprestimos.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: emprestimoJSON,
        });
  
    
      } catch (error) {
        console.error('Erro ao salvar o empréstimo:', error);
      }
    }

    async getEmprestimos(dataInicial: string, dataFinal: string): Promise<Emprestimo[]> {
      try {
          const url = `http://localhost/2023-2-pis-g3/acme/acme/backend/emprestimos.php?dataInicial=${dataInicial}&dataFinal=${dataFinal}`;
  
          const response = await fetch(url, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          });
  
          if (response.ok) {
              const responseData = await response.json();
              const emprestimos: Emprestimo[] = responseData.map((item: any) => {
                  return new Emprestimo(
                      item.cliente,
                      item.formaPagamento,
                      item.dataHora,
                      item.valorEmprestimo,
                      item.valorFinal
                  );
              });
              return emprestimos;
          } else {
              console.error('Erro ao buscar empréstimos:', response.statusText);
              return [];
          }
      } catch (error) {
          console.error('Erro ao buscar empréstimos:', error);
          return [];
      }
  }
  

    async getDivida(id : number): Promise<number> {
      try {
        console.log(id);
          const url = `http://localhost/2023-2-pis-g3/acme/acme/backend/emprestimos.php?idCliente=${id}`;
          
          const response = await fetch(url, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          if (response.ok) {
            const result = await response.json();

            return result;
          } else {
              console.error('Erro ao buscar divida:', response.statusText);
              return 0;
          }
      } catch (error) {
          console.error('Erro ao buscar divida:', error);
          return null;
      }
  }


  
  }
  