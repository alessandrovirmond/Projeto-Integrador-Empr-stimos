<?php

class FormaDePagamentoRepository {
    private $db;

    public function __construct() {
        try {
            $this->db = new PDO("mysql:host=localhost;dbname=acme", "root", "");
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Erro na conexão com o banco de dados: " . $e->getMessage());
        }
    }

    public function consultarFormaDePagamento($numero) {
        $query = "SELECT * FROM formaspagamento WHERE numero_meses = :numero";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':numero', $numero, PDO::PARAM_INT);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $formaDePagamento = $stmt->fetch(PDO::FETCH_ASSOC);
            return $formaDePagamento;
        } else {
            return null; 
        }
    }
}

?>
