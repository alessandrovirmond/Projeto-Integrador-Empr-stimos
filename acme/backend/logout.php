<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE, HEAD, PATCH");
header("Access-Control-Allow-Headers: Content-Type, *");
header("Access-Control-Allow-Credentials: true");
header("Vary: Origin");

session_start();

session_unset();
session_destroy();
setcookie('sid', '', time() - 3600, '/');

echo json_encode(['mensagem' => 'Logout bem-sucedido']);

?>
