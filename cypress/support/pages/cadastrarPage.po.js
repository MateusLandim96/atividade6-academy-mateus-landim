class cadastroPage {
    inputNovoNome = "#name";
    inputNovoEmail = "#email";

    visitar() {
        cy.visit("");
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

    mensagemErroUsuarioJaExiste() {
        cy.wait(1000)
        cy.contains("div", "Este e-mail já é utilizado por outro usuário").should("be.visible")
        cy.contains("button", "Cancelar").should('be.visible')
        cy.contains("button", "x")
    }
    
    mockCadastroUsuario() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        body: { 
        "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
        "name": "br landim", 
        "email": "llandim@hotmail.com", 
        "updatedAt": "2022-05-08T03:45:04.379Z", 
        "createdAt": "2022-05-08T03:45:04.379Z" } 
    })
    }

    mockUsuarioJaExistente() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 422,
        body: { "error":"User already exists." } 
    })
    }

}

export var registroPage = new cadastroPage();