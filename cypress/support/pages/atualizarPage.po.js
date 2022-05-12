class atualizarUsuario {
    
    atualizarInputNome = "input.inputName"
    atualizarInputEmail = "input#userEmail"
    botaoSalvar = "button[type='submit']"

    verDetalhesUsuario() {
        cy.contains("a", "Ver detalhes").click()
    };

    atualizarNomeValido(novoNome) {
        cy.get(this.atualizarInputNome).clear().type(novoNome)
        
    };

    atualizarEmailValido(novoEmail) {
        cy.get(this.atualizarInputEmail).clear().type(novoEmail);
    };

    atualizarEmailInvalido(emailInvalido) {
        cy.get(this.atualizarInputEmail).clear().type(emailInvalido)
    };

    atualizarEmailExistente(emailJaCadastrado) {
        cy.get(this.atualizarInputEmail).clear().type(emailJaCadastrado)
    };

    atualizarParaNomeInvalido(novoNome) {
        cy.get(this.atualizarInputNome).clear().type(novoNome)
    };
        

    clicarEditar() {
        cy.contains("Editar").click();
    };

    clicarSalvar() {
        cy.contains("button", "Salvar").click()
    };

    confirmAtualizadoComSucesso() {
        cy.contains("Informações atualizadas com sucesso!").should('be.visible');
        
    };
    
    mensagemDeErroAoAtualizar(mensagem) {
        cy.contains(mensagem).should('be.visible')
    }; 

    mensagemErroUsuarioJaCadastrado() {
        cy.contains('Este e-mail já é utilizado por outro usuário.').should('be.visible')
    };

    

};
export var atualizaUserPage =  new atualizarUsuario();
