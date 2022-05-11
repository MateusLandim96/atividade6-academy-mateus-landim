import { listaPage} from "../pages/listarPage.po"
import {atualizaUserPage} from "../pages/atualizarPage.po"
import { registroPage } from "../pages/cadastrarPage.po";

Given("que acessei a tela principal", () => {
    cy.interceptCadastroComSucesso();
    listaPage.visitar();
    
}); 

Given("clico para ver as informações detalhadas do usuário", () => {
    //cy.interceptAtualizar();
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


When("confirmo as alterações", () => {
    cy.interceptAtualizoComSucesso();
    atualizaUserPage.clicarSalvar()
});

Then("o usuário é atualizado com sucesso", () => {
	atualizaUserPage.confirmAtualizadoComSucesso()
});
