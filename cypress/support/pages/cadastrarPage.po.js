class cadastroPage {
    inputNovoNome = "#name";
    inputNovoEmail = "#email";
    
    botaoVoltar() {
        cy.contains("a", "Voltar").click()
    }

    botaoNovoUsuario() {
        cy.get("a[href='/users/novo']").click()
    }

    clicarEmSalvar() {
        cy.contains("button", "Salvar").click();
    }

    preencherNome(nome) {
        cy.get(this.inputNovoNome).type(nome)
    }

    preencherEmail(email) {
        cy.get(this.inputNovoEmail).type(email);
    }

    verificarModalCadastroComSucesso() {
        cy.contains("Usuário salvo com sucesso!").should('be.visible')
    }

    nomeComMaisDe100Caracteres() {
        cy.contains('span', 'Informe no máximo 100 caracteres para o nome').should('be.visible')
    }

    emailComMaisDe60Caracteres() {
        cy.contains('span', 'Informe no máximo 60 caracteres para o e-mail').should('be.visible')
    }

    formatoEmailInvalido() {
        cy.contains('span', "Formato de e-mail inválido").should('be.visible') 
    }

    nomeComMenosDe4Caracteres() {
        cy.contains('span', 'Informe pelo menos 4 letras para o nome.').should('be.visible');
    }

    mensagemErroUsuarioJaExiste() { 
        cy.contains("div", "Este e-mail já é utilizado por outro usuário").should("be.visible")
        cy.contains("button", "Cancelar").should('be.visible')
        cy.contains("button", "x")
    }
    
}

export var registroPage = new cadastroPage();