Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Scenario: Deve ser possível atualizar o nome de usuário
        Given que acessei a tela principal
        And clico para ver as informações detalhadas do usuário
        When clico para editar um usuário
        And atualizo o nome para outro nome que seja válido
        | nome     | br landim    |
        | novoNome | bruno landim |
        And confirmo as alterações
        Then o usuário é atualizado com sucesso

    Scenario: Deve ser possível atualizar o email de usuário
        Given que acessei a tela principal
        And clico para ver as informações detalhadas do usuário
        When clico para editar um usuário
        And atualizo o email para outro email que seja válido
        | email     | llandim@hotmail.com    |
        | novoEmail | landim@gmail.com       |
        And confirmo as alterações
        Then o usuário é atualizado com sucesso    