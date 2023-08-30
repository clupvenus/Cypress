describe('', () => {
    beforeEach(() => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.cookieButton > a').click()
        //her bir it blogunun onunde bu calisir
        
    });
    it('QualityDemy login test ', () => {
       
//login sayfasina gitti ve cookies kabul et
        //Assertion yap

        //1 have-text
        cy.get('.btn-sign-in-simple').should('have.text','Log in')

      //sayfada Log in yazisi var mi
    });
      it('QualityDemy login test ', () => {
        //2 cy.url().should
        cy.get('.btn-sign-in-simple').click()
        cy.url().should('include','login')

        //login adresi login kelimesini iceriyor mu
    });
    it('QualityDemy login test ', () => {
        //3 cy.title().should
        cy.get('.btn-sign-in-simple').click()
        cy.title().should('eq','Login | QualityDemy')
        
        //login sayfa title istenilen degere tam esit mi
    });
    it('QualityDemy login test ', () => {

        //4 be.visible
        cy.get('.text-14px').should('be.visible')
        // istedigimiz yazi gorunuyor mu? test yaptik
    });
    it('QualityDemy login test ', () => {
        //5 include text
        cy.get('.btn-sign-in-simple').should('include.text','Log')


    });
});