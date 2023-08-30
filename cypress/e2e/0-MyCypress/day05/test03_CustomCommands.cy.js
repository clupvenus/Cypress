 ///<reference types="Cypress" />

 describe('CustomCommands', () => {
    it.skip('Pozitif Login Testi', () => {
        cy.visit('https://qa.qualitydemy.com/')
        //kullanici adi:mb@babayigit.net 
        //sifre:M123456.b
        cy.get('.btn-sign-in-simple').click()
        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b{enter}')
    });
    it('Komutlu Login Testi', () => {

    cy.QualityDemyLogin('mb@babayigit.net','M123456.b{enter}')
        
    });
    it.skip('Komutla negatif test', () => {
        cy.QualityDemyLogin('mb@babayigit.net','M123456b{enter}')
        
    });
 });