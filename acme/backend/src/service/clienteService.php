<?php

class ClienteService {
    
    public function __construct() {
        
    }

    public function validarCpf($cpf) {
        if (strlen($cpf) !== 11) {
            throw new Exception("O CPF deve ter 11 dígitos.");
        }

        return true;
    }

    public function validarCliente($cliente) {
        try {
            if (empty($cliente->nome) || empty($cliente->cpf) || empty($cliente->dataNascimento) ||
                empty($cliente->telefone) || empty($cliente->email) || empty($cliente->endereco)) {
                throw new Exception("Dados do cliente inválidos.");
            }
    
    
        } catch (Exception $e) {
            throw new Exception("Erro ao validar dados do cliente: " . $e->getMessage());
        }
    }
    
    
}
?>