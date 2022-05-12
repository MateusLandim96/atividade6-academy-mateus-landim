// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add("interceptListaVazia", () =>
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: [ ] 
    })
); 

Cypress.Commands.add("interceptListaErro", () =>
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 500,
        body: [ ] 
    })
);

Cypress.Commands.add("interceptLista", () => 
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: [{ 
        "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
        "name": "br landim", 
        "email": "llandim@hotmail.com", 
        "updatedAt": "2022-05-08T03:45:04.379Z", 
        "createdAt": "2022-05-08T03:45:04.379Z",  }] 
    })
    );

Cypress.Commands.add('interceptCadastroComSucesso', () =>
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 201,
            body: { 
            "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
            "name": "br landim", 
            "email": "llandim@hotmail.com", 
            "updatedAt": "2022-05-08T03:45:04.379Z", 
            "createdAt": "2022-05-08T03:45:04.379Z" } 
        })
);

Cypress.Commands.add('interceptCadastroExistente', () =>
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 422,
            body: { "error":"User already exists." } 
        })

    );

Cypress.Commands.add('interceptAtualizar', () =>
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users/1a8a17f9-25f1-488c-a6dd-6a1022332cc5", {
            statusCode: 200,
            body: { 
            "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
            "name": "br landim", 
            "email": "llandim@hotmail.com", 
            "updatedAt": "2022-05-08T03:45:04.379Z", 
            "createdAt": "2022-05-08T03:45:04.379Z" } 
        })
    );

Cypress.Commands.add('interceptAtualizoComSucesso', () =>
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/1a8a17f9-25f1-488c-a6dd-6a1022332cc5", {
            statusCode: 200,
            body: { 
            "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
            "name": "br landim", 
            "email": "llandim@hotmail.com", 
            "updatedAt": "2022-05-08T03:45:04.379Z", 
            "createdAt": "2022-05-08T03:45:04.379Z" } 
        })
    );

Cypress.Commands.add('interceptAtualizarParaEmailExistente', () =>
    cy.intercept("PUT", "https://crud-api-academy.herokuapp.com/api/v1/users/1a8a17f9-25f1-488c-a6dd-6a1022332cc5", {
        statusCode: 422,
        body: {"error":"E-mail already in use."}
    })

);

Cypress.Commands.add('interceptDelete', () => {
    cy.intercept('DELETE', 'https://crud-api-academy.herokuapp.com/api/v1/users/1a8a17f9-25f1-488c-a6dd-6a1022332cc5', {
       statusCode: 204,
        
    })
});

Cypress.Commands.add('interceptBusca', () => {
    cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/search?value=br%20landim", {
        statusCode: 200,
        body: [{ 
        "id": "1a8a17f9-25f1-488c-a6dd-6a1022332cc5", 
        "name": "br landim", 
        "email": "llandim@hotmail.com", 
        "updatedAt": "2022-05-08T03:45:04.379Z", 
        "createdAt": "2022-05-08T03:45:04.379Z",  }] 
    })  
});


Cypress.Commands.add('interceptListaCheia', () =>  
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
        
        })
    );