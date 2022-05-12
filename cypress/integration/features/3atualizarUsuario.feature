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

     Scenario Outline: Não deve ser possível atualizar o email de usuário com um formato inválido
        Given que acessei a tela principal
        And clico para ver as informações detalhadas do usuário
        When clico para editar um usuário
        And atualizo o email para outro com um formato inválido 
        | emailInvalido | <emailInvalido> |
        And confirmo as alterações
        Then o usuário não é atualizado e é exibida uma mensagem de erro
        | mensagem            | Formato de e-mail inválido | 
        Examples:
            | emailInvalido   | Formato de e-mail inválido | 
            | landimgmail.com | Formato de e-mail inválido |      
            | landim@gmail    | Formato de e-mail inválido |
            | @g.com          | Formato de e-mail inválido | 

    Scenario:  Não deve ser possível atualizar o email de usuário para um email já existente    
        Given que acessei a tela principal
        And clico para ver as informações detalhadas do usuário
        When clico para editar um usuário
        And atualizo o email de usuário para um email já existente 
        | emailJaCadastrado | landim@gmail.com |
        And confirmo as alterações feitas
        Then o email do usuário não é atualizado e é exibida uma mensagem de erro informando que o email utilizado já existe

    Scenario: Não deve ser possível atualizar o nome para que tenha mais de 100 caracteres
        Given que acessei a tela principal
        And clico para ver as informações detalhadas do usuário
        When clico para editar um usuário
        And atualizo o nome para outro nome que seja inválido
        | nome     | br landim                                                                                              |
        | novoNome | brunoBrunobrunoBrunobrunoBrunobrunoBrunobrunoBrunobrunoBrunobrunoBrunobrunoBrunobrunoBrunobrunoBrunoaa |
        And confirmo as alterações
        Then o usuário não é atualizado e é exibida uma mensagem de erro
        | mensagem | Informe no máximo 100 caracteres para o nome |

    Scenario: Não deve ser possível atualizar o e-mail para que tenha mais de 60 caracteres   
        Given que acessei a tela principal
        And clico para ver as informações detalhadas do usuário
        When clico para editar um usuário
        And atualizo o email para outro com um formato inválido 
        | email         | llandim@hotmail.com                                                                                                                |
        | emailInvalido | landimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandimlandim@gmail.com |
        And confirmo as alterações
        Then o usuário não é atualizado e é exibida uma mensagem de erro
        | mensagem | Informe no máximo 60 caracteres para o e-mail | 

    Scenario: Deve ser possível voltar para a tela inicial do sistema quando estiver na tela de atualizar usuário
        Given que acessei a tela principal
        And clico para ver as informações detalhadas do usuário    
        When clico no logotipo do site
        Then sistema retorna para a tela inicial