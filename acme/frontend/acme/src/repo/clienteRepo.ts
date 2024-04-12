import { Cliente } from '../model/cliente';

export class ClienteRepo {

  async cadastrarNovoCliente(cliente: Cliente) {
    try {

      const dados = {
        operacao: 'cadastro',
        cliente: cliente,
      };

      const response = await fetch('http://localhost/2023-2-pis-g3/acme/acme/backend/clientes.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });

      if (response.status == 200) {
        return true;
      }
      
      return false;

    } catch (error) {
      throw new Error(`Erro na requisição: ${error}`);
    }
  }

  async consultarCPF(cpf: string): Promise<Cliente | null> {


    try {
      const response = await fetch(`http://localhost/2023-2-pis-g3/acme/acme/backend/clientes.php?cpf=${cpf}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });


      if (response.ok) {
        const cliente = await response.json() as Cliente;
        return cliente; 
      } else {
        throw ("Nenhum cliente encontrado");
      }
    } catch (error) {
      console.error('Erro ao consultar CPF no serviço:', error);
      throw ("Nenhum cliente encontrado");
    }
  }



}
