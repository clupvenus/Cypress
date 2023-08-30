///<reference types="Cypress" />

describe('Multible Windows', () => {
    it('Attribute remove', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(3000)
        cy.get('.example > a').invoke('removeAttr','target').click()
        cy.get('h3').should('have.text','New Window')
    });
    it.skip('New Url', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(3000)
        cy.get('.example > a').then((element)=>{
            const newUrl=element.prop('href')
            cy.visit('newUrl')

            //bu kisim calismadi arada duzeltecegiz 
        })
    });
});