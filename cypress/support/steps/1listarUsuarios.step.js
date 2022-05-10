import { listaPage } from "../pages/listarPage.po"

Given("que acessei a página inicial", () => {
	listaPage.interceptListaVazia();
    listaPage.visitar();
}); 

Given("não há usuários cadastrados na lista", () => {
	
});

Given("que acessei a tela principal", () => {
    listaPage.interceptLista();
    listaPage.visitar();
}) 

When("consulto a lista de usuários", () => {

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
