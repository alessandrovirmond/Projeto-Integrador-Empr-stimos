# Acme Serviços Financeiros (ASF)
Autor do projeto: Alessandro Terésio de Souza Virmond

## Sobre o Sistema

O Projeto ACME é um sistema de serviços financeiros que permite o cadastro de clientes, realização de empréstimos e geração de relatórios. O sistema requer autenticação, com diferentes níveis de permissões (gerente ou usuário padrão). 

Para acessar a aplicação, siga as etapas abaixo, após a última etapa acesse a URL fornecida no terminal. Faça login com as credenciais de um usuário cadastrado previamente no banco de dados. Apenas um usuário com permissão de gerente terá acesso aos relatórios de empréstimo e todos os clientes têm um limite máximo de crédito de empréstimo de 50.000 reais.

Certifique-se de seguir as configurações abaixo para utilizar a aplicação.

# Guia de Configuração do Projeto e Banco de Dados para o Projeto ACME

Este guia descreve como configurar um servidor local, criar tabelas em um banco de dados e executar a aplicação do Projeto ACME.

## Configuração do Servidor WAMP ou XAMPP

1. Se já não tiver baixado, faça o download e instale o WAMP (Windows, Apache, MySQL, PHP) ou o XAMPP em sua máquina.

2. Inicie o WAMP ou XAMPP para ativar os serviços Apache e MySQL.

3. Verifique se os serviços Apache e MySQL estão em execução.

## Criação das Tabelas no Banco de Dados

1. Abra a interface de administração do MySQL;

2. Faça login com as credenciais padrão (geralmente, o usuário é "root" e a senha está vazia).

3. No painel de administração, crie as seguintes tabelas de banco de dados em um workspace de nome "acme":
   
   Tabela: cliente
   - id int(11) AI PK
   - nome varchar(255)
   - cpf varchar(14)
   - data_nascimento date
   - endereco varchar(50)

   Tabela: usuarios
   - id int(11) AI PK
   - nome varchar(255)
   - cpf varchar(14)
   - email varchar(50)
   - senha varchar(50)
   - endereco varchar(50)

   Tabela: emprestimos
   - id int(11) AI PK
   - idCliente int(11)
   - idFormaPagamento int(11)
   - dataHora datetime
   - valorEmprestimo decimal(10,2)
   - valorTotal decimal(10,2)

   Tabela: formaspagamento
   - id int(11) AI PK
   - numero_meses int(11)
   - juros decimal(5,2)
   - descricao varchar(255)

4. Certifique-se de que as tabelas estejam criadas corretamente e popule a tabela cliente e formaspagamento conforme desejar.

## Execução da Aplicação

1. Copie a pasta do projeto ACME para a pasta "htdocs" no caso do XAMPP ou "www" no caso do WAMP.

2. Navegue até a pasta "frontend/acme" do projeto ACME.

3. Abra o terminal de comando na pasta "frontend/acme" e execute a aplicação frontend com o seguinte comando:

   npm run dev

4. A aplicação frontend estará disponível em uma URL específica que será fornecida no terminal.