<?php

require_once 'vendor/autoload.php';
use \phputil\router\Router;
use function phputil\cors\cors; 

$app = new Router();

$app->use( cors() );

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, HEAD, PATCH");
    header("Access-Control-Allow-Headers: Content-Type, *");
    header("Access-Control-Allow-Credentials: true");
    header("Vary: Origin");
    exit;
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, HEAD, PATCH");
header("Access-Control-Allow-Headers: Content-Type, *");
header("Access-Control-Allow-Credentials: true");
header("Vary: Origin");

$app->post('/login', function(  ) {
    $userController = new userController();
    $userController->getuser();
});


$app->listen();
