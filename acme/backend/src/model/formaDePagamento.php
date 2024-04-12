<?php
class FormaDePagamento {
    public $idFormaPagamento;
    public $descricao;
    public $numeroMeses;
    public $juros;

    public function __construct($idFormaPagamento, $descricao, $numeroMeses, $juros) {
        $this->idFormaPagamento = $idFormaPagamento;
        $this->descricao = $descricao;
        $this->numeroMeses = $numeroMeses;
        $this->juros = $juros;
    }
}
?>