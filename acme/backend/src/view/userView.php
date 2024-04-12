<?php
class UserView {

    public function __construct() {
    }


    public function mandarUser($User   ){
        
        if($User){
            header("Access-Control-Allow-Origin: http://localhost:5173");
    
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
            
            header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
            
            header("Access-Control-Allow-Credentials: true");
        
            header("Content-Type: application/json");
        
            header('Content-Type: application/json');
            echo json_encode($User);
            
        } else {
            http_response_code(404); 
            echo json_encode(['mensagem' => 'User nao encontrado']);
        }
    }
    

    public function pegarSenha() {
        $dadosJson = file_get_contents('php://input');
        $dados = json_decode($dadosJson, true);
        $senha = isset($dados['User']['senha']) ? $dados['User']['senha'] : null;
        return $senha;
    }
    
    public function pegarEmail() {
        $dadosJson = file_get_contents('php://input');
        $dados = json_decode($dadosJson, true);
        $email = isset($dados['User']['email']) ? $dados['User']['email'] : null;
        return $email;
    }
    
}
?>
