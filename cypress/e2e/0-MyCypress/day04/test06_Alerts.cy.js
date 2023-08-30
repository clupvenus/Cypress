///<reference types="Cypress" />

describe('Js Alerts Click', () => {
    it.skip('Only Alerts', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      cy.get(':nth-child(1) > button').click()// cypress default olarak her zaman tamama tiklar.
      cy.get('#result').should('have.text','You successfully clicked an alert') 

    });
    it.skip('Confirm Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        //default olarak ok i tiklar. 
        cy.get('#result').should('have.text','You clicked: Ok') 
    });
    it.skip('Dismiss Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click() 
        cy.on('window:confirm',()=>{//on() komutu j Query den gelir
            return false
          //browserdaki acilan pencerelerin kontrolunu saglar. 
        })
        cy.get('#result').should('have.text','You clicked: Cancel') 
        
    });

    it('JS Prompt Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(3) > button').click()
        cy.window().then(('$windowsElement'),()=>{
            cy.stub('$windowsElement','prompt').returns('Wise')
        })

    });
});