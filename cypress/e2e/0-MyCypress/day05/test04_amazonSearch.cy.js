///<reference types="Cypress" />

describe('Amazon search', () => {
    it('Amazon Iphone Search', () => {
        cy.amazonsearch('nutella')
    });
});