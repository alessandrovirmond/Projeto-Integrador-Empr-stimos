<?php
class Cliente {
    public $id; 
    public $nome;
    public $cpf;
    public $dataNascimento;
    public $telefone;
    public $email;
    public $endereco;


    public function __construct($id, $nome, $cpf, $dataNascimento, $telefone, $email, $endereco ) {
        $this->id = $id;
        $this->nome = $nome;
        $this->cpf = $cpf;
        $this->dataNascimento = $dataNascimento;
        $this->telefone = $telefone;
        $this->email = $email;
        $this->endereco = $endereco;
 
    }
}

?>