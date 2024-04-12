<?php
class Emprestimo {
    public $idCliente; 
    public $idFormaPagamento;
    public $dataHora;
    public $valorEmprestimo;
    public $valorTotal; 

    public function __construct($cliente, $formaPagamento, $dataHora, $valorEmprestimo, $valorTotal) {
     
        $this->idCliente = $cliente;
        $this->idFormaPagamento = $formaPagamento;
        $this->dataHora = $dataHora;
        $this->valorEmprestimo = $valorEmprestimo;
        $this->valorTotal = $valorTotal;
    }
}
?>