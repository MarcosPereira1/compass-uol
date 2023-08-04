/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import { generate } from 'gerador-validador-cpf'

describe('Cadastro de Usuários', () => {
  const Password = 'Aesop2023@'
  const firstName = faker.person.firstName()
  const fullName = faker.person.fullName()
  const email = faker.internet.email()
  const cpf = generate()
  const phoneNumber = faker.finance.accountNumber(11)

  it('Deve cadastrar com sucesso na Aesop Brasil', () => {
    cy.visit('www.aesop.com.br/cadastre-se')
    cy.fillFormWith(firstName, fullName, email, cpf, phoneNumber, Password)

    cy.intercept('POST', '**customers').as('postCustomers')
    cy.wait('@postCustomers')

    cy.contains('Meus Pedidos').should('be.visible')
  })

  it('Deve cadastrar com sucesso na Natura Brasil', () => {
    cy.visit('https://www.natura.com.br/cadastre-se')
    cy.fillFormWith(firstName, fullName, email, cpf, phoneNumber, Password)

    cy.intercept('POST', '**create').as('postCreate')
    cy.wait('@postCreate')

    cy.contains('Minha conta').should('be.visible')
  })
})