<?php
class ClienteView {

    public function __construct() {
    }


    public function mandarCliente($cliente){
        
        if($cliente){
            header("Access-Control-Allow-Origin: *");
    
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
            
            header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
            
            header("Access-Control-Allow-Credentials: true");
        
            header("Content-Type: application/json");
        
            header('Content-Type: application/json');
            echo json_encode($cliente);
            
        } else {
            http_response_code(404); 
            echo json_encode(['mensagem' => 'Cliente nao encontrado']);
        }
    }

    public function pegarCliente() {
        try {
            $dadosJson = file_get_contents('php://input');
            $dados = json_decode($dadosJson, true);
    
            if (
                !array_key_exists('cliente', $dados) ||
                !array_key_exists('nome', $dados['cliente']) ||
                !array_key_exists('cpf', $dados['cliente']) ||
                !array_key_exists('dataNascimento', $dados['cliente']) ||
                !array_key_exists('telefone', $dados['cliente']) ||
                !array_key_exists('email', $dados['cliente']) ||
                !array_key_exists('endereco', $dados['cliente'])
            ) {
                throw new Exception("Dados do cliente incompletos.");
            }
    
            $dataNascimento = new DateTime($dados['cliente']['dataNascimento']);    
            $cliente = new Cliente(
                null,
                $dados['cliente']['nome'],
                $dados['cliente']['cpf'],
                $dataNascimento,
                $dados['cliente']['telefone'],
                $dados['cliente']['email'],
                $dados['cliente']['endereco'],
            );
    
            return $cliente;
    
        } catch (Exception $e) {
            http_response_code(401);
            throw new Exception("Erro ao obter dados do cliente: " . $e->getMessage());
        }
    }
    
}
?>
