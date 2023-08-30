describe('', () => {

    beforeEach(() => {
        //her bir it blogundan yani her bir testten once calisir
        cy.visit('https://www.google.com')
    });
    it('', () => {
       cy.title().should('eq','Google') 
       cy.title().should('include','Google')

    });
    it('url test', () => {
        cy.url().should('include','google')
    });
});