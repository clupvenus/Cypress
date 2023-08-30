context('context kullanimi', () => {
    it('google ziyareti', () => {
        cy.visit('https://google.com')
    });
    it('title', () => {
        cy.visit('https://google.com')
        cy.title().should('include','Google')
    });
});