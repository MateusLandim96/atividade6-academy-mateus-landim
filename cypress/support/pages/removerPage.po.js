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
        cy.get("input[autocomplete='off']").type("br landim");
    }


}
export var removePage = new excluirUsuario();