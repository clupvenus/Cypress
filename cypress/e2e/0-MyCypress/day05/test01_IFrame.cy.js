///<reference types="Cypress" />
describe('', () => {

    //Terminalden npm install -D cypress-iframe ile kurulum yaptik

    //require('cypress-iframe'); yi e2e ye ekledik

    // Bu satirla biz cy.frameLoaded ve cy.frame komutlarini kullanmamizi sagliyor

    it.only('Iframe test', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
     //Selenium da iframe e ulasmak icin locateini aliyorduk 
    //locate yeniden html ile baslayan kisimda oluyordu yani html icinde bir html daha
    //driver.switchTo.frame(locate)

    cy.frameLoaded('#mce_0_ifr')
    cy.wait(2000)
    cy.iframe().find('p').clear()
    cy.wait(2000)
    cy.iframe().find('p').type('Have a nice day!')

    cy.get('.large-4 > div').should('contains.text','Elemental Selenium')

    cy.log('Sayfa girisi dogrulandi')
   
    cy.get('.large-4 > div').click()
    cy.screenshot()

    });
    it('', () => {
        
    });
});