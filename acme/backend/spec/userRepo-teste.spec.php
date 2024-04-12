<?php
require_once(__DIR__ . '/../src/repository/userRepository.php');

describe("userRepository", function () {
    
    it("deve retornar o user encontrado", function () {
        $userRepository = new UserRepository();
        $cpf = 'ale@dev.com';
        $senha = 'b8ebc3c1215378de80db559628d74d7202548850b81826ea00dfda4938514c43'; 

        $result = $userRepository->consultaruser($cpf, $senha);

        expect($result)->not->toBe(null);
    });

    it("deve retornar mensagem de user não encontrado", function () {
        $userRepository = new UserRepository();
        $cpf = 'aaaa'; 
        $senha = 'senha';

        $result = $userRepository->consultaruser($cpf, $senha);

        expect($result)->toBe(null);
    });
});
?>