<?php

class EmprestimoRepository {
    private $db;

    public function __construct() {
        try {
            $this->db = new PDO("mysql:host=localhost;dbname=acme", "root", "");

            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Erro na conexão com o banco de dados: " . $e->getMessage());
        }
    }

    public function salvarEmprestimo($emprestimo){
        try {
            $idCliente = $emprestimo->idCliente;
            $idFormaPagamento = $emprestimo->idFormaPagamento;
            $dataHora = $emprestimo->dataHora;
            $valorEmprestimo = $emprestimo->valorEmprestimo;
            $valorTotal = $emprestimo->valorTotal;


       
            $query = "INSERT INTO emprestimos (idCliente, idFormaPagamento, dataHora, valorEmprestimo, valorTotal) VALUES (:idCliente, :idFormaPagamento, NOW(), :valorEmprestimo, :valorTotal)";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':idCliente', $idCliente);
            $stmt->bindParam(':idFormaPagamento', $idFormaPagamento);
            $stmt->bindParam(':valorEmprestimo', $valorEmprestimo);
            $stmt->bindParam(':valorTotal', $valorTotal);

            if ($stmt->execute()) {
                return true; 
            } else {
                return false;
            }
        } catch (PDOException $e) {
            
            return false;
        }
    }

    public function consultarDivida($idCliente) {
        try {
            $query = "SELECT SUM(valorEmprestimo) as totalDivida FROM emprestimos WHERE idCliente = :idCliente";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':idCliente', $idCliente);
            $stmt->execute();
    
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
    
            return $resultado['totalDivida'] ?? 0; 
        } catch (Exception $e) {
            throw new Exception("Erro ao consultar a dívida: " . $e->getMessage());
        }
    }
    
    

    public function consultarEmprestimos($dataInicial, $dataFinal) {
        try {
            $query = "SELECT e.*, c.*, f.* 
                FROM emprestimos e
                JOIN clientes c ON e.idCliente = c.id
                JOIN formasPagamento f ON e.idFormaPagamento = f.id
                WHERE e.dataHora BETWEEN :dataInicial AND :dataFinal
                ORDER BY e.id DESC";
    
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':dataInicial', $dataInicial);
            $stmt->bindParam(':dataFinal', $dataFinal);
            $stmt->execute();
    
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            $emprestimos = [];
            foreach ($result as $row) {
                $cliente = [
                    'id' => $row['idCliente'],
                    'nome' => $row['nome'],
                    'cpf' => $row['cpf'],
                    'telefone' => $row['telefone'],
                    'endereco' => $row['endereco'],
                    'senha' => null,
                    'dataNascimento' => $row['data_nascimento'],
                ];
    
                $formaPagamento = [
                    'idFormaPagamento' => $row['idFormaPagamento'],
                    'descricao' => $row['descricao'],
                    'numeroMeses' => $row['numero_meses'],
                    'juros' => $row['juros'],
                ];
    
                $emprestimo = [
                    'cliente' => $cliente,
                    'formaPagamento' => $formaPagamento,
                    'dataHora' => $row['dataHora'],
                    'valorEmprestimo' => $row['valorEmprestimo'],
                    'valorFinal' => $row['valorTotal'],
                ];
    
                $emprestimos[] = $emprestimo;
            }
    
            return $emprestimos;
    
        } catch (PDOException $e) {
            http_response_code(500); 
            return json_encode(['erro' => 'Erro ao consultar empréstimos']);
        }
    }
    
    
}


?>
