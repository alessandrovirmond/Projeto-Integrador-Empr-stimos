<?php

/* header("Access-Control-Allow-Origin: *");

 */

 header("Access-Control-Allow-Origin: http://localhost:5173");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

session_start();
$isAdmin = isset( $_SESSION[ 'admin' ] );
if ( $isAdmin ) {
    http_response_code(200);
    echo json_encode('É admin'); 
}  
else{   

    http_response_code(403);
    echo json_encode(array('error' => 'Permissão negada'));
}

?>
