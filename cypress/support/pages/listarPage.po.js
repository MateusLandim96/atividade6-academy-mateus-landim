class listaUsuarios {
    listaDeUsuarios = "#listaUsuarios"
    usuarioDaLista = "#userData"
    
    visitar() {
        cy.visit("/");
    }

    usuariosCadastrados() {
        cy.get(this.listaDeUsuarios).should("be.visible")
    }

    proximaPagina() {
        cy.contains("#paginacaoProximo", "Próxima")
    }

    paginaAnterior() {
        cy.contains("#paginacaoVoltar", "Anterior")
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
