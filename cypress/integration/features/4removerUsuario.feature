Feature: Remover um usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

        Scenario: Remover um usuário da lista de usuário cadastrados
            Given acessei a página inicial
            And localizo um usuário na lista de usuários cadastrados
            When clico na opção para remover o usuário desejado
            And confirmo que desejo remover o usuário
            And visualizo a confirmação da exclusão
            | mensagem | Usuário removido! |

        Scenario: Pesquisar por um usuário já removido
            Given acessei a página inicial
            When pesquiso o usuário na barra de pesquisa
            And clico na opção para remover o usuário desejado
            And confirmo que desejo remover o usuário
            And pesquiso pelo usuário que já foi removido na barra de busca
            Then o usuario não é encontrado   
        
