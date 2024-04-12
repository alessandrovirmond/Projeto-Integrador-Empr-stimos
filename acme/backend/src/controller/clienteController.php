<?php
require_once(__DIR__ . '/../repository/clienteRepository.php');
require_once(__DIR__ . '/../model/cliente.php');
require_once(__DIR__ . '/../service/clienteService.php');
require_once(__DIR__ . '/../view/clienteView.php');
require_once(__DIR__ . '/../service/criarSessao.php');


class ClienteController {
    private $clienteRepository;
    private $clienteView;
    private $clienteService;

    public function __construct() {
        $this->clienteView = new ClienteView();
        $this->clienteRepository = new ClienteRepository();
        $this->clienteService = new ClienteService();
    }

    public function getCliente($cpf) {
        try { 
                $this->clienteService->validarCpf($cpf);
    
                $cliente = $this->clienteRepository->consultarCliente($cpf);
    
                $this->clienteView->mandarCliente($cliente);
                
            } catch (Exception $e) {
                http_response_code(404);
                echo "Erro: " . $e->getMessage();
            }
        }

    public function postCliente(){
        try { 
            $cliente = $this->clienteView->pegarCliente();

            $this->clienteService->validarCliente($cliente);

            $this->clienteRepository->cadastrarCliente($cliente);

            $this->clienteView->mandarCliente($cliente);
            
        } catch (Exception $e) {
            http_response_code(400);
            echo  $e->getMessage();
        }
    }

}



?>
     