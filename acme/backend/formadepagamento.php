<?php
require_once './src/controller/formadepagamentoController.php';

header("Access-Control-Allow-Origin: *");
    
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

header("Access-Control-Allow-Credentials: true");

$numero = isset($_GET['id']) ? $_GET['id'] : null;

if ($numero) {


    $formaDePagamentoController = new FormaDePagamentoController();

    $formaDePagamentoController->getFormaDePagamento($numero);

} 
