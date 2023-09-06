/// <reference types="cypress" />

var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   
    });

    it('Deve completar o Pré cadastro com sucesso', () =>{
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailfaker = faker.internet.email(nomeFaker)
        
        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('gabriel@teste')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
         
    });

});