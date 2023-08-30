describe('', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#L2AGLb > .QS5gu').click()
    });
    it('google da 3 idiot arama', () => {
        cy.get('#ApjFqb').type('3 idiots {enter}')
    });
    it('google er Ryan i kurtarmak', () => {
        cy.get('#ApjFqb').type('Er Ryan kurtarmak{enter}')
    });

});