<?php
require_once './src/controller/userController.php';

header("Access-Control-Allow-Origin: *");
    
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $dadosJson = file_get_contents('php://input');

                $userController = new userController();
                $userController->getuser();

}
