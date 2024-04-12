<?php
require_once './src/controller/ClienteController.php';

/* header("Access-Control-Allow-Origin: *");
 */


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, HEAD, PATCH");
    header("Access-Control-Allow-Headers: Content-Type, *");
    header("Access-Control-Allow-Credentials: true");
    header("Vary: Origin");
    exit;
}

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, HEAD, PATCH");
header("Access-Control-Allow-Headers: Content-Type, *");
header("Access-Control-Allow-Credentials: true");
header("Vary: Origin");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $clienteController = new ClienteController();
            $clienteController->postCliente();

     

    }
    

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $cpf = isset($_GET['cpf']) ? $_GET['cpf'] : null;

    if ($cpf) {
        
        $clienteController = new ClienteController();
        
        $clienteController->getCliente($cpf);
    
    }else{

        http_response_code(405); 
        echo json_encode(['mensagem' => 'Método não permitido']);
    }
}
?>
