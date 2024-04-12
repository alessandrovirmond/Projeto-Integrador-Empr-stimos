<?php

 header("Access-Control-Allow-Origin: http://localhost:5173");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

session_start();
$isLogado= isset( $_SESSION[ 'logado' ] );
if ( $isLogado) {
    http_response_code(200);
    echo json_encode('É logado'); 
}  
else{   

    http_response_code(401);
    echo json_encode(array('error' => 'Permissão negada'));
}

?>
