describe('Negatif', () => {
    it('negatif', () => {
       // TEST-2 Negatif
        //1-  http://www.automationexercise.com 
        cy.visit('http://www.automationexercise.com')
        //2-  Signup/Login sayfasına git
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
       // 3-  baba71@gmail.com 123456 ile giriş yap
       cy.get('[data-qa="login-email"]').type('baba71@gmail.com')
       cy.get('[data-qa="login-password"]').type('123456')
       cy.get('[data-qa="login-button"]').click()
       // Login butonuna bastik

       // 4-  Giriş yapılamadığını doğrula 
       cy.get('[data-qa="login-button"]').should('be.visible')
       cy.log('Yanlis bilgilerle Sisteme giris yapilamadigi testi basariyla tamamlandi.')

    });
});
/*
TEST-2 Negatif
1-  http://www.automationexercise.com 
2-  Signup/Login sayfasına git
3-  baba71@gmail.com 123456 ile giriş yap
4-  Giriş yapılamadığını doğrula*/