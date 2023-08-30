describe('Locate alma', () => {
    it('cy.get komutu', () => {
    cy.visit('/')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type('cypress{enter}')
    cy.get('textarea#APjFqb')
    });
});



// xpath--> //input[@id='APjFqb'] css le alma yontemi     // cy.get('input[@id="APjFqb"] ')  xpath le alma yolu

//cy.get komutunda id aliniyorsa cy.get('id[APjFqb]') yerine cy.get('#APjFqb') 
//yani id yerine # koymak
//class almışsak onun içinde . koymak yeterli