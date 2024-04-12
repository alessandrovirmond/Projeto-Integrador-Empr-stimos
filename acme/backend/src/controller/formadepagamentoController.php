<?php
require_once(__DIR__ . '/../repository/formadepagamentoRepository.php');
require_once(__DIR__ . '/../model/formaDePagamento.php');
require_once(__DIR__ . '/../view/formadepagamentoView.php');
require_once(__DIR__ . '/../service/formaDePagamentoService.php');



class FormaDePagamentoController {
    private $formaDePagamentoRepository;
    private $formaDePagamentoView;
    private $formaDePagamentoService;

    public function __construct() {
        $this->formaDePagamentoRepository = new FormaDePagamentoRepository();
        $this->formaDePagamentoView = new FormaDePagamentoView();
        $this->formaDePagamentoService = new FormaDePagamentoService();
    }

    public function getFormaDePagamento($numero) {
        try {


            $this->formaDePagamentoService->validarForma($numero);

            $formaDePagamento = $this->formaDePagamentoRepository->consultarFormaDePagamento($numero);

            $this->formaDePagamentoView->mandarFormaDePagamento($formaDePagamento);
            
        } catch (Exception $e) {
            echo "Erro: " . $e->getMessage();
        }
    }
}

?>
