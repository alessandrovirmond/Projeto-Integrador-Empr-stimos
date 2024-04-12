export class Parcela {
    id: number;
    emprestimoId: number; 
    numero: number;
    vencimento: Date;
    valor: number;

    constructor(id: number, emprestimoId: number, numero: number, vencimento: Date, valor: number) {
        this.id = id;
        this.emprestimoId = emprestimoId;
        this.numero = numero;
        this.vencimento = vencimento;
        this.valor = valor;
    }
}

