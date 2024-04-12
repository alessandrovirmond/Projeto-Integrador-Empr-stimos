<?php
function criarSessao($user) {
            try {
                                
                session_start();
                setcookie('sid', 'valor', ['path'=>'/', 'secure'=>true, 'samesite' => 'None']);
                if($user->admin == 1){

                    $_SESSION['admin'] = $user->admin;
                    
                }
                $_SESSION['logado'] = 1;
                

            } catch (Exception $e) {
                throw new Exception("Erro ao abrir a sessão: " . $e->getMessage());
            }
        }
?>