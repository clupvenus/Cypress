describe('go komutu kullanma', () => {
    it('', () => {
        cy.visit('https://www.google.com')
        cy.get('#L2AGLb > .QS5gu').click()//Cookies i kabul et

        cy.get('#APjFqb').type('Fizikci')
        cy.get('.FPdoLc > center > .gNO89b').click()
        cy.go('back')
        cy.go('forward')
        cy.reload
        cy.go('1')
        cy.go('-1')
    });
});