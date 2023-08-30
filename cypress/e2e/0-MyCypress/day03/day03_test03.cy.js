describe('Locate almada Fonksiyon Islemi', () => {
    it('', () => {
         //1-  http://www.automationexercise.com 
         cy.visit('http://www.automationexercise.com')
         //2-  Signup/Login sayfasına git
         
         cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
         //1. yol
        // cy.get('.login-form > h2').should('include.text','Login')
         //2.yol
         cy.get('.login-form > h2').then(textcontrol =>
            {expect(textcontrol.text()).to.contains('Login')}
              )



    });
});