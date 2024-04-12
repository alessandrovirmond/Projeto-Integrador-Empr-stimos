<?php
class EmprestimoView {

    public function __construct() {
    }

    public function pegarEmprestimo() {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        $clienteId = $data['cliente']['id'];
        $formaPagamentoId = $data['formaPagamento']['idFormaPagamento'];

        $emprestimo = new Emprestimo(
            $clienteId,
            $formaPagamentoId,
            $data['dataHora'],
            $data['valorEmprestimo'],
            $data['valorFinal']
        );

        return $emprestimo;
    }

    public function mandarEmprestimos($emprestimos){

        echo json_encode($emprestimos);

    }

    public function  mandarDivida($resultado){
        echo json_encode($resultado);
    }
}

?>
