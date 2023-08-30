

describe('temel cypress komutlari', () => {
    it.only('cy.visit komutu', () => {
        cy.visit('/') //base url tanimlandiysa
        cy.visit('https://www.google.com') //baseurl tanimli degilse 
      
    });
    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
    });
    it.skip('cy.title komutu', () => {//skip komutu bu testin gecilmesini saglar
        cy.visit('/') //baseurl adrese gider
        cy.title().should('eq','Wise Quarter Course – Deliver more than expected')
        cy.title().should('include','expected')//verilen string icerme durumu
        cy.title().should('contains','Deliver')//verilen string icerme durumu
    });
   it.only('cy.url ve cy.location', () => {//only komutu ise sadece o testin calismasina neden olur
    cy.visit('/')
    cy.url().should('eq','https://wisequarter.com/') //URL tam esitlik durumunu kontrol eder
    cy.url().should('include','wisequarter') // URL string icerme durumunu kontrol eder 
    cy.location('pathname').should('/about-us')// Pathname in about us oldugunu dogrula
   });
    
});