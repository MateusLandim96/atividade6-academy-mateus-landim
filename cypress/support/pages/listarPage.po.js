class listaUsuarios {
    listaDeUsuarios = "#listaUsuarios"
    usuarioDaLista = "#userData"
    
    visitar() {
        cy.visit("");
    }

    interceptLista() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: [{ 
        "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
        "name": "br landim", 
        "email": "llandim@hotmail.com", 
        "updatedAt": "2022-05-08T03:45:04.379Z", 
        "createdAt": "2022-05-08T03:45:04.379Z",  }] 
    
    });
    }

    interceptListaVazia() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: [ ] 
    });
    }
    usuariosCadastrados() {
        cy.get(this.listaDeUsuarios).should("be.visible")
    }

    proximaPagina() {
        cy.contains("#paginacaoProximo", "Próxima")
    }

    paginaAnterior() {
        cy.contains("#paginacaoVoltar", "Anterior")
    }

    mensagemSemUsuariosNaLista() {
        cy.contains("Ops! Não existe nenhum usuário para ser exibido.").should('be.visible')
    }

    opcaoDeCadastrarUsuario() {
        cy.contains("a", "Cadastre um novo usuário")
    }

    interceptListaCheia() {
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
        "updatedAt":"2022-05-08T20:59:34.751Z"},
        
        {"id":"79b7329a-23b2-4f87-ae6e-f543b19dc349",
        "name":"eEn una Latina yo Me Transformo",
        "email":"saoko@papi.motomami",
        "createdAt":"2022-05-08T14:33:52.925Z",
        "updatedAt":"2022-05-08T23:57:16.265Z"},
        
        {"id":"4a814205-109c-49c0-9a57-637d47810232",
        "name":"João",
        "email":"joao@raro.com.br",
        "createdAt":"2022-05-09T00:07:06.054Z",
        "updatedAt":"2022-05-09T00:07:06.054Z"},
        
        {"id":"ecd57838-1196-4926-922c-333cfa9c35af",
        "name":"Joãoo",
        "email":"joao1@raro.com.br",
        "createdAt":"2022-05-09T00:07:32.166Z",
        "updatedAt":"2022-05-09T00:07:32.166Z"},
        
        {"id":"f44bc37a-59a0-4435-a830-dfef6238984d",
        "name":"Laura",
        "email":"laura@laura.com",
        "createdAt":"2022-05-09T00:11:50.577Z",
        "updatedAt":"2022-05-09T00:11:50.577Z"},
        
        {"id":"4d8acf4e-617e-450f-a539-21e6547be636"
        ,"name":"Joãooaaa",
        "email":"joao111@raro.com.br",
        "createdAt":"2022-05-09T00:17:46.189Z",
        "updatedAt":"2022-05-09T00:17:46.189Z"},
        
        {"id":"c53f355c-4fc8-4020-a7d4-3fdc2d5edb8a",
        "name":"Joãooaaaaa",
        "email":"joao11aa@raro.com.br",
        "createdAt":"2022-05-09T00:18:13.848Z",
        "updatedAt":"2022-05-09T00:18:13.848Z"},
        
        {"id":"b90d9356-6f69-4f26-aa5f-b9266a912d21",
        "name":"Joãooaaaaaaaa",
        "email":"joao11aaaaaaa@raro.com.br",
        "createdAt":"2022-05-09T00:18:53.839Z",
        "updatedAt":"2022-05-09T00:18:53.839Z"},
        
        {"id":"c8e5887a-99a4-41e5-8c73-d9d900a64285",
        "name":"Joãooaaaaaaaaaaaa",
        "email":"joao11aaaaaaaaaa@raro.com.br",
        "createdAt":"2022-05-09T00:19:09.084Z",
        "updatedAt":"2022-05-09T00:19:09.084Z"},
       
        {"id":"4bcd9b3c-4665-49c8-b48a-6d71c415467d",
        "name":"Joãooaaaaaaaaaaaaaaa",
        "email":"joao11aaaaaaaaaaaaa@raro.com.br",
        "createdAt":"2022-05-09T00:19:56.414Z",
        "updatedAt":"2022-05-09T00:19:56.414Z"},
        
        {"id":"e29bf1f2-e940-4c58-a754-81a4b1fc8e60",
        "name":"marta",
        "email":"marta@marta.com",
        "createdAt":"2022-05-09T00:21:15.182Z",
        "updatedAt":"2022-05-09T00:21:15.182Z"}]
    
    });
}

}
export var listaPage = new listaUsuarios();
