/// <reference types="cypress" />

context('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac20 (não é aluno_ebac20? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir a senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('abcde')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('solange.kawabe@gmail.com')
        cy.get('#password').type('abcde')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    });
})