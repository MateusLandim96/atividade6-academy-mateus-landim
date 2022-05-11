class atualizarUsuario {
    
    atualizarInputNome = "input.inputName"
    atualizarInputEmail = "input#userEmail"
    botaoSalvar = "button[type='submit']"

    verDetalhesUsuario() {
        cy.contains("a", "Ver detalhes").click()
    }

    atualizarNomeValido(novoNome) {
        cy.get(this.atualizarInputNome).clear().type(novoNome)
        
    }

    atualizarEmailValido(novoEmail) {
        cy.get(this.atualizarInputEmail).clear().type(novoEmail);
    }

    clicarEditar() {
        cy.contains("Editar").click();
    }

    clicarSalvar() {
        cy.contains("button", "Salvar").click()
    }

    confirmAtualizadoComSucesso() {
        cy.contains("Informações atualizadas com sucesso!").should('be.visible');
        
    }
    

    

}
export var atualizaUserPage =  new atualizarUsuario()
