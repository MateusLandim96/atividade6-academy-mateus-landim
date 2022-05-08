import { registroPage } from "../pages/cadastrarPage.po";

Given("que acessei a tela principal", () => {
    registroPage.visitar();

});

When("clico para adicionar um novo usuário", () => {
    registroPage.botaoNovoUsuario();
});


When("informo um nome válido", (tabela) => {
    var nomeTabela = tabela.rowsHash();
    registroPage.preencherNome(nomeTabela.nome);
});

When("informo um email válido", (tabela) => {
    var emailTabela = tabela.rowsHash();
    registroPage.preencherEmail(emailTabela.email);
});

Then("o usuário é cadastrado exibindo uma mensagem de sucesso", () => {
    registroPage.mockCadastroUsuario();
    registroPage.clicarEmSalvar();
    registroPage.verificarModalCadastroComSucesso();
});


When("informo um email inválido", (tabela) => {
	var emailInvalido = tabela.rowsHash();
    registroPage.preencherEmail(emailInvalido.email);
});

Then("é exibida uma mensagem de erro informando que o email é inválido", () => {
    registroPage.clicarEmSalvar();
    registroPage.formatoEmailInvalido();
});

Then("a operação é anulada exibindo uma mensagem de erro informando que o email já existe", () => {
	registroPage.mockUsuarioJaExistente();
    registroPage.clicarEmSalvar();
    registroPage.mensagemErroUsuarioJaExiste();
});


When("informo um nome inválido", (tabela) => {
	var nomeInvalido = tabela.rowsHash();
    registroPage.preencherNome(nomeInvalido.nome);
});

Then("é exibida uma mensagem de erro informando que não é possível cadastrar um nome com mais de 100 caracteres", () => {
    registroPage.nomeComMaisDe100Caracteres();
});

Then("é exibida uma mensagem de erro informando que não é possível cadastrar um email com mais de 60 caracteres", () => {
	registroPage.clicarEmSalvar();
    registroPage.emailComMaisDe60Caracteres();
});





