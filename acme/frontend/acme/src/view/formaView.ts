import { Parcela } from "../model/parcela";

export class FormaView {
    private inputElement: HTMLInputElement;
    private selectElement: HTMLSelectElement;
    private mensagemErroElement: HTMLElement;
    private parcelasTable: HTMLTableElement;

    constructor() {
        this.inputElement = document.getElementById('valorEmprestimo') as HTMLInputElement;
        this.selectElement = document.getElementById('formaPagamento') as HTMLSelectElement;
        this.mensagemErroElement = document.getElementById('mensagemErro');
        this.parcelasTable = document.getElementById('parcelas') as HTMLTableElement;
    }

    getValue(): number {
        
        const value = parseFloat(this.inputElement.value);
        
        return value;
    }

    getOption(): number {
        const selectedOption = this.selectElement.options[this.selectElement.selectedIndex];
        const selectedValue = parseInt(selectedOption.value);
        return selectedValue;
    }

    exibirErro(mensagem: string) {
        this.mensagemErroElement.textContent = mensagem;
    }

    mostrarParcelas(parcelas: Parcela[]) {
        this.parcelasTable.innerHTML = '';

        if (parcelas && parcelas.length > 0) {
            const tableHeader = document.createElement('thead');
            const headerRow = tableHeader.insertRow(0);
            headerRow.innerHTML = '<th>Número</th><th>Vencimento</th><th>Valor</th>';
            this.parcelasTable.appendChild(tableHeader);

            const tableBody = document.createElement('tbody');
            parcelas.forEach(parcela => {
                const row = tableBody.insertRow(tableBody.rows.length);
                const numeroCell = row.insertCell(0);
                const vencimentoCell = row.insertCell(1);
                const valorCell = row.insertCell(2);

                numeroCell.textContent = parcela.numero.toString();
                vencimentoCell.textContent = new Date(parcela.vencimento).toLocaleDateString('pt-BR');
                valorCell.textContent = `R$ ${parcela.valor.toFixed(2)}`;
            });

            this.parcelasTable.appendChild(tableBody);
        } else {
            this.parcelasTable.textContent = 'Nenhuma parcela disponível.';
        }
    }
}
