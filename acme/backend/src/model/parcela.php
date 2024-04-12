<?php
class Parcela {
    public $id;
    public $emprestimoId; 
    public $numero; 
    public $vencimento; 
    public $valor; 

    public function __construct($id, $emprestimoId, $numero, $vencimento, $valor) {
        $this->id = $id;
        $this->emprestimoId = $emprestimoId;
        $this->numero = $numero;
        $this->vencimento = $vencimento;
        $this->valor = $valor;
    }
}

?>