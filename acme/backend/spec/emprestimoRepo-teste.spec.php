<?php
require_once(__DIR__ . '/../src/repository/emprestimoRepository.php');
require_once(__DIR__ . '/../src/model/emprestimo.php');


describe("EmprestimoRepository", function () {
    it("deve salvar um empréstimo com sucesso retornando true", function () {
        $emprestimoRepository = new EmprestimoRepository();

        $emprestimo = new Emprestimo(1, 3, '2023-10-30 15:30:00', 50.000, 87.000);

        $result = $emprestimoRepository->salvarEmprestimo($emprestimo);

        expect($result)->toBe(true); 
    });

    it("consulta no banco de dados deve retornar empréstimos", function () {
        $emprestimoRepository = new EmprestimoRepository();

        $result = $emprestimoRepository->consultarEmprestimos('2023-10-30T14:30:00','2023-11-30T14:30:00' );

        expect($result)->not->toBe(null); 
    });
});
?>
