import { FormaDePagamento } from '../model/formaDePagamento';

export class FormaRepo {
    async getFormaPagamento(formaPagamentoNumero: number): Promise<FormaDePagamento | null> {
        try {


            const response = await fetch(`http://localhost/2023-2-pis-g3/acme/acme/backend/formadepagamento.php?id=${formaPagamentoNumero}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const formaPagamento = await response.json();
                return formaPagamento as FormaDePagamento;
            } else {

                return null;
            }
        } catch (error) {
            console.error('Erro ao obter forma de pagamento:', error);
            return null;
        }
    }
}
