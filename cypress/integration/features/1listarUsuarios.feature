Feature: Listar usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Scenario: Visualizar a lista com usuários cadastrados
        Given acessei a página inicial
        When consulto a lista de usuários 
        Then visualizo a lista com os usuários cadastrados

    Scenario: Lista vazia deve exibir uma opção para realizar cadastro de um usuário
        Given acessei a tela principal
        And não há usuários cadastrados na lista
        When consulto a lista de usuários    
        Then visualizo a opção de cadastrar novo usuário  

    Scenario: Erro no servidor ao consultar uma lista
        Given que acessei a página inicial
        When consulto a lista de usuários
        Then visualizo uma mensagem de erro relacionado ao servidor
        | mensagem | Não foi possível consultar os usuários cadastrados. |       
    