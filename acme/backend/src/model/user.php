<?php
class User {
    public $id; 
    public $nome;
    public $email;
    public $senha;
    public $admin;

    public function __construct($id, $nome,$email, $senha, $admin) {
        $this->id = $id;
        $this->nome = $nome;
        $this->email = $email;
        $this->senha = $senha;
        $this->admin = $admin;
    }
}

?>