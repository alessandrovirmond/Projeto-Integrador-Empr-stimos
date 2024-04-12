<?php
require_once(__DIR__ . '/../repository/userRepository.php');
require_once(__DIR__ . '/../model/user.php');
require_once(__DIR__ . '/../service/userService.php');
require_once(__DIR__ . '/../view/userView.php');
require_once(__DIR__ . '/../service/criarSessao.php');

class UserController {
    private $userRepository;
    private $userView;
    private $userService;

    public function __construct() {
        $this->userView = new UserView();
        $this->userRepository = new UserRepository();
        $this->userService = new UserService();
    }

    public function getuser() {
    try { 
            $senha = $this->userView->pegarSenha();
            $email = $this->userView->pegarEmail();

            $this->userService->validarEmail($email,$senha);

            $hash = $this->userService->hashSenha($senha);

            $user = $this->userRepository->consultaruser($email, $hash);

            if($user){
                
                criarSessao($user);

                $this->userView->mandaruser($user);
            }

            
        } catch (Exception $e) {
            http_response_code(401);
            echo $e->getMessage();
        }
    }


}



?>
     