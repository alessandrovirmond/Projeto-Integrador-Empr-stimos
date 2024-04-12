<?php
require_once './src/controller/emprestimoController.php'; 
require_once './src/model/emprestimo.php'; 


header("Access-Control-Allow-Origin: *");
    
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if( isset($_GET['dataInicial']) && isset($_GET['dataInicial'])){

        $dataInicial = isset($_GET['dataInicial']) ? $_GET['dataInicial'] : null;
        $dataFinal = isset($_GET['dataFinal']) ? $_GET['dataFinal'] : null;
    
        $emprestimoController = new EmprestimoController();
        $emprestimoController->getEmprestimos($dataInicial, $dataFinal);
    }else if(isset($_GET['idCliente'])){

        $idCliente = isset($_GET['idCliente']) ? $_GET['idCliente'] : null;
        
        $emprestimoController = new EmprestimoController($idCliente);
        $emprestimoController->buscarDivida($idCliente);
    }else{
        throw new Error("Método nao permitido");
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {


    $emprestimoController = new EmprestimoController(); 
    
    $emprestimoController->postEmprestimo();
}
?>
