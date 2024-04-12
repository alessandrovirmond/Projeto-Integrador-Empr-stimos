<?php
require_once(__DIR__ . '/../src/service/emprestimoService.php');
require_once(__DIR__ . '/../src/model/emprestimo.php');

describe("EmprestimoService", function () {
    it("deve validar empréstimo com sucesso", function () {
        $emprestimoService = new EmprestimoService();
        $emprestimo = new Emprestimo(1, 3, '2023-10-30 15:30:00', 500.000, 870.000);
        $exceptionThrown = false;

        try {
            $emprestimoService->validarEmprestimo($emprestimo);
        } catch (Exception $e) {
            $exceptionThrown = true;
        }

        expect($exceptionThrown)->toBe(false);
    });

    it("deve lançar exceção ao validar empréstimo com campos vazios", function () {
        $emprestimoService = new EmprestimoService();
        $emprestimo = new Emprestimo(1, '', '2023-10-30 15:30:00', 500.000, 870.000);
        $exceptionThrown = false;

        try {
            $emprestimoService->validarEmprestimo($emprestimo);
        } catch (Exception $e) {
            $exceptionThrown = true;
        }

        expect($exceptionThrown)->toBe(true);
    });
});
?>
