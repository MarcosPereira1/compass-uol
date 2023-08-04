/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      fillFormWith(
        firstName: string,
        lastName: string,
        email: string,
        cpf: string,
        phoneNumber: string,
        Password: string,
        color: string
      ): Chainable<Element>;
    }
  }
  
  // Extend Cypress chainable commands with the custom command
  declare global {
    namespace Cypress {
      interface Chainable<Subject> {
        fillFormWith(
          firstName: string,
          lastName: string,
          email: string,
          cpf: string,
          phoneNumber: string,
          Password: string,
          color: string
        ): Chainable<Element>;
      }
    }
  }
  