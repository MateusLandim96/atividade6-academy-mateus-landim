Feature: Listar usuários
    Como uma pessoa qualquer
    Desejo consultar todos os usuários cadastrados
    Para ter as informações de todos os usuários

    Scenario: Visualizar a lista com usuários cadastrados
        Given que acessei a tela principal
        When consulto a lista de usuários 
        Then visualizo a lista com os usuários cadastrados

    Scenario: Lista vazia deve exibir uma opção para realizar cadastro de um usuário
        Given que acessei a página inicial
        And não há usuários cadastrados na lista
        When consulto a lista de usuários    
        Then visualizo a opção de cadastrar novo usuário   
    