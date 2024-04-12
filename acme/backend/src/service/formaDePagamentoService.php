<?php

class FormaDePagamentoService {

    public function __construct() {

    }
    
    public function validarForma($numero) {
        if (!is_numeric($numero) || $numero < 1 || $numero > 12) {
            throw new Exception("Número de forma de pagamento inválido. Deve estar no intervalo de 1 a 12.");
        }
    }
}

?>
