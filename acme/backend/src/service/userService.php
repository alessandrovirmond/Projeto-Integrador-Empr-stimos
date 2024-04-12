<?php

class   UserService {
    
    public function __construct() {
        
    }
    public function validarEmail($email) {
        
        if (strlen($email) < 3) {
            throw new Exception("O emailk deve ter pelo menos 3 dígitos.");
        }
    
        return true;
    }
    
    function hashSenha($senha) {
        $salt = "2023-2-pis-g3";
    
        $senhaComSalt = $senha . $salt;
    
        $hash = hash('sha256', $senhaComSalt);
    
        return $hash;
    }
    
}
?>