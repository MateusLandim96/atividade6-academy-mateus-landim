Feature: Remover um usuário
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

        Scenario: Remover um usuário da lista de usuário cadastrados
            Given acessei a página inicial
            And localizo um usuário na lista de usuários cadastrados
            When clico na opção para remover o usuário desejado
            And confirmo que desejo remover o usuário
            Then visualizo a confirmação da exclusão
            | mensagem | Usuário removido! |

        Scenario: Deletar um usuário pesquisando na barra de pesquisa
            Given acessei a página inicial
            When pesquiso o usuário na barra de pesquisa
            And clico na opção para remover o usuário desejado
            And confirmo que desejo remover o usuário
            Then visualizo a confirmação da exclusão
            | mensagem | Usuário removido! |

        
