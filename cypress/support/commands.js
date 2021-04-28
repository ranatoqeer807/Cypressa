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
Cypress.Commands.add('login', (email, password) => { 


    cy.visit('https://lms-development.shopdev.co/')

    cy.title().should("eq", 'Fabric')

    cy.get('#username').type(email)

    cy.get('#password').type(password)

     cy.wait(1000)

    cy.get(":nth-child(3) > .btn").click()
  

})
require('cypress-downloadfile/lib/downloadFileCommand')

import 'cypress-file-upload';

import "cypress-localstorage-commands";

Cypress.Commands.add('postToken', () => {
  cy.request({

    method: 'POST',
    url:'https://lms-development.shopdev.co/backend/core/auth/login/',
    
    body: {
     
      "email":'admin@organizationretain.co',
      "password": 'admin'
  
    },
   
  header:{

      'content-type' : 'application/json'
  }

  })
  .its('body')
  .then(identity => {
    cy.setLocalStorage("identity_token", identity.token);
  })
});