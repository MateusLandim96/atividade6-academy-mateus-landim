import { listaPage} from "../pages/listarPage.po"
import {atualizaUserPage} from "../pages/atualizarPage.po"


Given("que acessei a tela principal", () => {
    cy.interceptCadastroComSucesso();
    listaPage.visitar();
    
}); 

Given("clico para ver as informações detalhadas do usuário", () => {
    cy.interceptLista();
    cy.interceptAtualizar();
    atualizaUserPage.verDetalhesUsuario();
    
});

When("clico para editar um usuário", () => {
	atualizaUserPage.clicarEditar()
});

When("atualizo o nome para outro nome que seja válido", (tabela) => {
    var atualizarNomeTabela = tabela.rowsHash();  
    atualizaUserPage.atualizarNomeValido(atualizarNomeTabela.novoNome)
});

When("atualizo o email para outro email que seja válido", (tabela) => {
    var atualizarEmailTabela = tabela.rowsHash();
    atualizaUserPage.atualizarEmailValido(atualizarEmailTabela.novoEmail)
});

When("atualizo o nome para outro nome que seja inválido", (tabela) => {
	var nomeInvalido = tabela.rowsHash()
    atualizaUserPage.atualizarParaNomeInvalido(nomeInvalido.novoNome)
});

When("atualizo o email para outro com um formato inválido", (tabela) => {
	var invalidoEmail = tabela.rowsHash()
    atualizaUserPage.atualizarEmailInvalido(invalidoEmail.emailInvalido)
});

When("confirmo as alterações", () => {
    cy.interceptAtualizoComSucesso();
    atualizaUserPage.clicarSalvar()
});

When("confirmo as alterações feitas", () => {
    cy.interceptAtualizoComSucesso();
    cy.interceptAtualizarParaEmailExistente();
    atualizaUserPage.clicarSalvar()
});


When("atualizo o email de usuário para um email já existente", (tabela) => {
	var emailExistente = tabela.rowsHash();
    atualizaUserPage.atualizarEmailExistente(emailExistente.emailJaCadastrado)
});


When("clico no logotipo do site", () => {
	listaPage.clicarHome();
});

Then("sistema retorna para a tela inicial", () => {
	listaPage.paginaAnterior();
    listaPage.proximaPagina();
});


Then("o usuário é atualizado com sucesso", () => {
	atualizaUserPage.confirmAtualizadoComSucesso()
});


Then("o usuário não é atualizado e é exibida uma mensagem de erro", (tabela) => {
    var mensagemEmailInvalido = tabela.rowsHash();
    atualizaUserPage.mensagemDeErroAoAtualizar(mensagemEmailInvalido.mensagem)
});


Then("o email do usuário não é atualizado e é exibida uma mensagem de erro informando que o email utilizado já existe", () => {
	 atualizaUserPage.mensagemErroUsuarioJaCadastrado();

});


