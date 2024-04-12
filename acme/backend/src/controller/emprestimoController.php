<?php
require_once(__DIR__ . '/../repository/emprestimoRepository.php');
require_once(__DIR__ . '/../model/emprestimo.php');
require_once(__DIR__ . '/../view/emprestimoView.php');
require_once(__DIR__ . '/../service/emprestimoService.php');


class EmprestimoController {
    private $emprestimoRepository;
    private $emprestimoView;
    private $emprestimoService;

    public function __construct() {
        $this->emprestimoRepository = new EmprestimoRepository();
        $this->emprestimoView = new EmprestimoView();
        $this->emprestimoService = new EmprestimoService();
    }

    public function postEmprestimo() {
        try {
            
            $emprestimo = $this->emprestimoView->pegarEmprestimo();
            
            $this->emprestimoService->validarEmprestimo($emprestimo);

            $this->emprestimoRepository->salvarEmprestimo($emprestimo);

        } catch (Exception $e) {
            echo "Erro ao processar o empréstimo: " . $e->getMessage();
        }
    }

    public function getEmprestimos($dataInicial, $dataFinal) {
        try {
            $this->emprestimoService->validarDatas($dataInicial, $dataFinal);
            
    
            $emprestimos = $this->emprestimoRepository->consultarEmprestimos($dataInicial, $dataFinal);

            $this->emprestimoView->mandarEmprestimos($emprestimos);
        } catch (Exception $e) {
            echo "Erro ao consultar os empréstimos: " . $e->getMessage();
        }
    }

    public function buscarDivida($id){
        try{
            $resultado = $this->emprestimoRepository->consultarDivida($id);
            $this->emprestimoView->mandarDivida($resultado);
        } catch (Exception $e) {
            echo "Erro ao consultar divida: " . $e->getMessage();
        }
    }
}
?>
