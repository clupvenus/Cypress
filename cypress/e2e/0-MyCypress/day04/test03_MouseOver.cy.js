describe('Hover Over', () => {
    it('', () => {
        cy.visit('https://www.amazon.com')
        cy.wait(2000)
        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')
        // uzerine mouse ile gelindiginde acilan menuye tiklar 
        cy.wait(2000)
        cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()
       // cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text').select('Turkey (Türkiye)')
       //Select calismadi cunku kod select olarak tanimlanmamais
    
        cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text').click()
        cy.get('#icp-dropdown_18').click()
        
    });
    it.only('',() => {
        cy.visit('https://www.amazon.com')
        cy.wait(4000)
        cy.reload() //sayfayi refresh yapiyor
        cy.wait(4000)
        cy.reload(true)//sayfayi catch den degil direk sifirdan acar

         
    })
});