<?php
require_once(__DIR__ . '/../src/repository/formadepagamentoRepository.php');

describe("FormaDePagamentoRepository", function () {
    it("deve retornar a forma de pagamento encontrada", function () {
        $formaDePagamentoRepository = new FormaDePagamentoRepository();
        $numero = '2';
        $result = $formaDePagamentoRepository->consultarFormaDePagamento($numero);
        $expected = [
            "id" => "2",
            "numero_meses" => "2",
            "juros" => "50.00",
            "descricao" => "2 meses"
        ];

        expect($result)->toEqual($expected);
    });

    it("deve retornar mensagem de forma de pagamento não encontrada", function () {
        $formaDePagamentoRepository = new FormaDePagamentoRepository();
        $numero = '987';

        $result = $formaDePagamentoRepository->consultarFormaDePagamento($numero);

        expect($result)->toBe(null);
    });
});
?>
