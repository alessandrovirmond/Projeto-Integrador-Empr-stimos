<?php
require_once './src/controller/userController.php';

/* header("Access-Control-Allow-Origin: *");
 */

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
   header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
   header("Access-Control-Allow-Credentials: true");
   header('Content-Type: application/json');


    exit;
}




if ($_SERVER['REQUEST_METHOD'] === 'POST') {


                $userController = new userController();
                $userController->getuser();

}
?>
