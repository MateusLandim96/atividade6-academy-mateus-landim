Feature: Criar usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente

    Background: Acessar a tela principal
        Given que acessei a tela principal
        And clico para adicionar um novo usuário
    
        Scenario: Deve ser possível cadastrar um usuário
            When informo um nome válido 
            | nome | br landim |
            And informo um email válido
            | email | llandim@hotmail.com |
            Then o usuário é cadastrado exibindo uma mensagem de sucesso

        Scenario: Não deve ser possível cadastrar email com formato inválido
            When informo um nome válido
            | nome | bruno landim |
            And informo um email inválido
            | email | llandimhotmailaba |
            Then é exibida uma mensagem de erro informando que o email é inválido

        Scenario: Não deve ser possível cadastrar usuário com email já existente no sistema
            When informo um nome válido
            | nome | bruno landim |
            And informo um email válido
            | email | llandim@hotmail.com |
            Then a operação é anulada exibindo uma mensagem de erro informando que o email já existe

        Scenario: Não deve ser possível cadastrar um nome com mais de 100 caracteres
            When informo um nome inválido
            | nome | brunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunoP |
            And informo um email válido
            | email | llandim@hotmail.com |
            Then é exibida uma mensagem de erro informando que não é possível cadastrar um nome com mais de 100 caracteres 
            
        Scenario: Não deve ser possível cadastrar um e-mail com mais de 60 caracteres.
            When informo um nome válido
            | nome | bruno landim | 
            And informo um email inválido
            | email | brunobrunobrunobrunobrunobrunobrunobrunobrunobrunobrunobruno@g.com | 
            Then é exibida uma mensagem de erro informando que não é possível cadastrar um email com mais de 60 caracteres

        Scenario: Não deve ser possível cadastrar um usuário com menos de 4 letras
            When informo um nome inválido
            | nome | bru |
            And informo um email válido  
            | email | llandim@hotmail.com |
            Then é exibida mensagem de erro informando que não é possível cadastrar um usuário com menos de 4 letras

            
    