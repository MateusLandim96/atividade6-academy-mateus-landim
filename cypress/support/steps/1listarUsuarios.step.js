import { listaPage } from "../pages/listarPage.po"

Given("acessei a página inicial", () => {
	cy.interceptLista();
    listaPage.visitar();
}); 

Given("que acessei a página inicial", () => {
	cy.interceptListaErro();
    listaPage.visitar();
});

Given("acessei a página inicial do sistema", () => {
	cy.interceptListaCheia();
    listaPage.visitar();
});

Given("não há usuários cadastrados na lista", () => {
	
});

Given("acessei a tela principal", () => {
    cy.interceptListaVazia();
    listaPage.visitar();
}) 

When("consulto a lista de usuários", () => {

});

When("clico para visualizar a próxima página", () => {
	listaPage.clicarProximaPagina();
});

When("clico para visualizar a página anterior", () => {
	listaPage.clicarProximaPagina();
    listaPage.clicarPaginaAnterior();
});

Then("visualizo a lista com os usuários cadastrados", () => {
	listaPage.usuariosCadastrados();
    listaPage.paginaAnterior();
    listaPage.proximaPagina();
});

Then("visualizo a opção de cadastrar novo usuário", () => {
	listaPage.mensagemSemUsuariosNaLista();
    listaPage.opcaoDeCadastrarUsuario();
});

Then("visualizo uma mensagem de erro relacionado ao servidor", (tabela) => {
    var mensagemTabela = tabela.rowsHash();
    listaPage.mensagemErroServidor(mensagemTabela.mensagem)
});





