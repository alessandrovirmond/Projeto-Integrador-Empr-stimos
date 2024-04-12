<?php
require_once(__DIR__ . '/../model/user.php');

class UserRepository {
    private $db;

    public function __construct() {


        try {            
            $this->db = new PDO("mysql:host=localhost;dbname=acme", "root", "");
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
           
            die("Erro na conexão com o banco de dados: " . $e->getMessage());
        }
    }


    public function consultarUser($email, $senha) {
        try{
        
        $query = "SELECT * FROM usuarios WHERE email = :email AND senha = :senha";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':senha', $senha); 
        $stmt->execute();
    
        if ($stmt->rowCount() > 0) {
            $dadosUser = $stmt->fetch(PDO::FETCH_ASSOC);
    
            $User = new User(
                $dadosUser['id'],
                $dadosUser['nome'],
                $dadosUser['email'],
                $dadosUser['senha'],
                $dadosUser['gerente']
            );

            return $User;
        } else {
            return null;
        }
    }catch (Exception $e) {
        throw new Exception("Erro ao consultar User: " . $e->getMessage());
    }
    }
    
    
}

?>
