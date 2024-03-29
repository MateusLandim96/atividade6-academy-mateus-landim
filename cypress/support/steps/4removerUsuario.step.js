import { listaPage} from "../pages/listarPage.po"
import { removePage } from "../pages/removerPage.po";


Given("acessei a página inicial", () => {
    cy.viewport(1024, 768)
	listaPage.interceptLista();
	listaPage.visitar();
})    

Given("localizo um usuário na lista de usuários cadastrados", () => {
	
});

When("pesquiso o usuário na barra de pesquisa", () => {
	cy.interceptBusca();
	removePage.buscarUsuario();	
});


When("clico na opção para remover o usuário desejado", () => {
	removePage.clicarEmDeletarUsuario();
});

When("confirmo que desejo remover o usuário", () => {
	removePage.confirmDeletarUsuario();
});

Then("visualizo a confirmação da exclusão", (tabela) => {
	var usuarioExcluido = tabela.rowsHash();
	removePage.modalDeletarUsuario(usuarioExcluido.mensagem);
});
