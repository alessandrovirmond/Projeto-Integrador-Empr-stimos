<?php
class EmprestimoService {
    
    public function __construct() {

    }

    public function validarEmprestimo($emprestimo) {
        if (empty($emprestimo->idCliente)) {
            throw new Exception("Campo 'clienteId' não pode estar vazio.");
        }
        if (empty($emprestimo->idFormaPagamento)) {
            throw new Exception("Campo 'formaPagamentoId' não pode estar vazio.");
        }
        if (empty($emprestimo->dataHora)) {
            throw new Exception("Campo 'dataHora' não pode estar vazio.");
        }
        if (empty($emprestimo->valorEmprestimo)) {
            throw new Exception("Campo 'valorEmprestimo' não pode estar vazio.");
        }
        if (empty($emprestimo->valorTotal)) {
            throw new Exception("Campo 'valorFinal' não pode estar vazio.");
        }
    }

public function validarDatas($dataInicial, $dataFinal) {

    if (empty($dataInicial) || empty($dataFinal)) {
        throw new Exception("Datas não podem ser vazias");
    }

    if (!$this->validarFormatoData($dataInicial) || !$this->validarFormatoData($dataFinal)) {
        throw new Exception("Formato de datas inválido");
    }

    if (!$this->dataEhValida($dataInicial) || !$this->dataEhValida($dataFinal)) {
        throw new Exception("Datas inválidas");
    }

}

private function validarFormatoData($data) {
    $dateTime = DateTime::createFromFormat('Y-m-d', $data);
    return $dateTime && $dateTime->format('Y-m-d') === $data;
}

private function dataEhValida($data) {
    $timestamp = strtotime($data);
    return $timestamp !== false && $timestamp > 0;
}

}
?>