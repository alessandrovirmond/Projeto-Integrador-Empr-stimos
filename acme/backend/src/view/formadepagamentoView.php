<?php
class FormaDePagamentoView {

    public function __construct() {
    }


    public function mandarFormaDePagamento($formaDePagamento){
        if ($formaDePagamento) {
            $formaDePagamento = new FormaDePagamento(
                $formaDePagamento['id'],
                $formaDePagamento['descricao'],
                $formaDePagamento['numero_meses'],
                $formaDePagamento['juros']
            );

            header("Access-Control-Allow-Origin: *");

            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        
            header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
        
            header("Access-Control-Allow-Credentials: true");
        
            header("Content-Type: application/json");
            echo json_encode($formaDePagamento); 
        } else {
            http_response_code(404); 
            echo json_encode(['mensagem' => 'Forma de pagamento nao encontrada']);
        }
    }

    public function pegarFormaDePagamento($formaDePagamento){
        
    }
}
?>
