describe('Login Test', () => {
    it('QualityDemy login test    ', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.cookieButton > a').click()
        //cookies onayi verdik
       /* 1. yol
        cy.get('.btn-sign-in-simple').click()
        // Login yazisina locate alarak tikladik
*/
// 2. yol
//cy.contains('Log in').click()
// Log in Yazisini bulup tikladik

//3.yol
cy.contains('log in',{matchCase:false}).click()
//burada kucuk buyuk harf bakmaksinizi tiklar
cy.get('#login-email').type('mb@babayigit.net')
//kullanici adimizi girdik
cy.get('#login-password').type('M123456.b{enter}')
//sifremzii girip enter tusuna bastik

//cy.get('#sign_up > :nth-child(3) > .btn')
// enter yerine Login e de basabiliriz.


    });
});