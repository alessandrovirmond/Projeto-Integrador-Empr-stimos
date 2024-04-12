<?php
require_once(__DIR__ . '/../src/service/formadepagamentoService.php');

describe("FormaDePagamentoService", function () {
    it("deve validar forma de pagamento com sucesso", function () {
        $formaDePagamentoService = new FormaDePagamentoService();
        $numero = 5;
        $exceptionThrown = false;

        try {
            $formaDePagamentoService->validarForma($numero);
        } catch (Exception $e) {
            $exceptionThrown = true;
        }

        expect($exceptionThrown)->toBe(false);
    });

    it("deve lançar exceção ao validar forma de pagamento com número inválido", function () {
        $formaDePagamentoService = new FormaDePagamentoService();
        $numero = 14; 
        $exceptionThrown = false;

        try {
            $formaDePagamentoService->validarForma($numero);
        } catch (Exception $e) {
            $exceptionThrown = true;
        }

        expect($exceptionThrown)->toBe(true);
    });
});
?>
