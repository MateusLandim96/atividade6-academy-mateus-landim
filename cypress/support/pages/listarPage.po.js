class listaUsuarios {
    listaDeUsuarios = "#listaUsuarios"
    usuarioDaLista = "#userData"
    botaoHome = "a[href='/']"
    
    visitar() {
        cy.visit("");
    }

    clicarHome() {
        cy.get(this.botaoHome).click();   
    }

    usuariosCadastrados() {
        cy.get(this.listaDeUsuarios).should("be.visible")
    }

    proximaPagina() {
        cy.get("#paginacaoProximo").should("be.visible")
    }

    clicarProximaPagina() {
        cy.get("#paginacaoProximo").click()   
    }

    paginaAnterior() {
        cy.get("#paginacaoVoltar").should("be.visible")
    }

    clicarPaginaAnterior() {
        cy.get("#paginacaoVoltar").click();
    }
    mensagemSemUsuariosNaLista() {
        cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should('be.visible')
    }

    opcaoDeCadastrarUsuario() {
        cy.contains("a", "Cadastre um novo usuário")
    }

    mensagemErroServidor(mensagem) {
        cy.contains(mensagem).should('be.visible');
    }


}
export var listaPage = new listaUsuarios();
