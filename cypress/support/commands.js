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
Cypress.Commands.add('loginKasir', (email, pass) => {
    cy.get('#email').type(email)
    cy.get('#password').type(pass)
    cy.get('.chakra-button').click()
    cy.get('.chakra-heading').should('be.visible')
    cy.url().should('include', '/dashboard')
})

Cypress.Commands.add('typeKasir', (elemen, value) => {
    cy.get(elemen)
    .clear()
    .type(value)
})
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