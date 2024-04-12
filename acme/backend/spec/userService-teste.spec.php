<?php
require_once(__DIR__ . '/../src/service/userService.php');

describe("userService", function () {
    it("deve validar Email com sucesso", function () {
        $userService = new UserService();
        $Email = "anndre@dev";
        $senha = "123456";
        $result = $userService->validarEmail($Email,$senha);
        expect($result)->toBe(true);
    });

    it("deve lançar exceção ao validar Email com número incorreto de dígitos", function () {
        $userService = new UserService();
        $Email = "an"; 
        $senha = "123456";

        $exceptionThrown = false;

        try {
            $userService->validarEmail($Email,$ $senha);
        } catch (Exception $e) {
            $exceptionThrown = true;
        }

        expect($exceptionThrown)->toBe(true);
    });

    it("deve lançar exceção ao validar senha com número incorreto de dígitos", function () {
        $userService = new UserService();
        $Email = "andre@dev"; 
        $senha = "123";

        $exceptionThrown = false;

        try {
            $userService->validarEmail($Email,$ $senha);
        } catch (Exception $e) {
            $exceptionThrown = true;
        }

        expect($exceptionThrown)->toBe(true);
    });
});
?>
