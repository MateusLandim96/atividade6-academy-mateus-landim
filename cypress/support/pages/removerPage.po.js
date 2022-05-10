class excluirUsuario {
    
    clicarEmDeletarUsuario() {
        cy.get("[data-test='userDataDelete']").click();
    };

    modalDeletarUsuario() {
        cy.contains("button", "x").should('be.visible'); 
        cy.contains("p", "Deseja realmente remover este usuário ?").should('be.visible'); 
    };
    
    confirmDeletarUsuario() {
        cy.contains("button", "Confirmar").click();
    };

    buscarUsuario() {
        cy.get("input[placeholder='E-mail ou nome']").type("landim");
    }

    interceptListaRemover() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: [{ 
        
        "id":"5c47c8f0-de8d-4d49-9080-3bd3b6d4df2d",
        "name":"teste",
        "email":"teste@teste.gov",
        "createdAt":"2022-05-09T20:00:54.456Z",
        "updatedAt":"2022-05-09T20:00:54.456Z"},
        
        {"id":"1510e0b1-bca0-4ad0-8ccf-4b304f6e2df6",
        "name":"Raro Academy",
        "email":"loud@rihanna.com",
        "createdAt":"2022-05-08T12:16:14.484Z",
        "updatedAt":"2022-05-08T20:59:34.751Z"}]
        }) 
   
    }





}
export var removePage = new excluirUsuario();