describe('Super Domein', () => {
    it('Ayni Class da iki farkli visit', () => {
        cy.visit('https://www.amazon.com')
        cy.visit('https://www.google.com')
        //hoca bunu denedi ama olmadi onun icin yeni bir it blogu kullandi ve acildi
    });
    it('Farkli class da visit', () => {
        cy.visit('https://www.google.com')
    });
});