<?php
require_once(__DIR__ . '/../model/cliente.php');

class ClienteRepository {
    private $db;

    public function __construct() {


        try {
         
            
            $this->db = new PDO("mysql:host=localhost;dbname=acme", "root", "");


           
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
           
            die("Erro na conexão com o banco de dados: " . $e->getMessage());
        }
    }


    public function consultarCliente($cpf) {
        try{

        
            $query = "SELECT * FROM clientes WHERE cpf = :cpf";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':cpf', $cpf);
            $stmt->execute();
    
    
        if ($stmt->rowCount() > 0) {
            $dadosCliente = $stmt->fetch(PDO::FETCH_ASSOC);
                
            $cliente = new Cliente(
                $dadosCliente['id'],
                $dadosCliente['nome'],
                $dadosCliente['cpf'],
                new DateTime($dadosCliente['data_nascimento']),
                $dadosCliente['telefone'],
                $dadosCliente['email'],
                $dadosCliente['endereco'],
            );
            
            return $cliente;
        } else {
            return null;
        }
    }catch (Exception $e) {
        throw new Exception("Erro ao consultar cliente: " . $e->getMessage());
    }
    }

    
    public function cadastrarCliente($cliente) {
        try {
            $cpfExistente = $this->verificarCpfExistente($cliente->cpf);
    
            if ($cpfExistente) {
            
                throw new Exception("Já existe um cliente cadastrado com o CPF informado.");
            }
    
            $query = "INSERT INTO clientes (nome, data_nascimento, cpf, telefone, email, endereco ) VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $this->db->prepare($query);
    
            $dataNascimento = $cliente->dataNascimento->format('Y-m-d');
    
            $stmt->bindParam(1, $cliente->nome);
            $stmt->bindParam(2, $dataNascimento);
            $stmt->bindParam(3, $cliente->cpf);
            $stmt->bindParam(4, $cliente->telefone);
            $stmt->bindParam(5, $cliente->email);
            $stmt->bindParam(6, $cliente->endereco);
    
            $stmt->execute();
    
            $cliente->id = $this->db->lastInsertId();
    
            return $cliente;
        } catch (Exception $e) {
            throw $e;
        }
    }
    
    private function verificarCpfExistente($cpf) {
        $query = "SELECT COUNT(*) FROM clientes WHERE cpf = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(1, $cpf);
        $stmt->execute();
    
        $count = $stmt->fetchColumn();
    
        return $count > 0;
    }
    
    
    
}

?>
