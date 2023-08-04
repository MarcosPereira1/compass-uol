/// <reference types="cypress" />

Cypress.Commands.add('fillFormWith', (firstName, lastName, email, cpf, phoneNumber, Password, ) => {
  cy.get('#onetrust-accept-btn-handler').click()
  cy.get('input[name="firstName"]').type(firstName)
  cy.get('input[name="lastName"]').type(lastName)
  cy.get('input[name="email"]').type(email)
  cy.get('#password-field').type(Password)
  cy.get('#confirmPassword-field').type(Password)
  cy.get('input[name="cpf"]').type(cpf)
  cy.get('label[class="MuiFormControlLabel-root"]').eq(2).click()
  cy.get('input[name="homePhone"]').type(phoneNumber)
  cy.get('#acceptedterms').check()
  cy.get('button[type="submit"]').click()
})