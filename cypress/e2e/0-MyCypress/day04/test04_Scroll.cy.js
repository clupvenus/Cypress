///<reference types="Cypress" /> hazir kodlar ciksin diye eklenebilir

describe('Scroll islemleri', () => {
    it.skip('Sayfayi belirli bir yere kaydirma', () => {
        cy.visit('https://tripandway.com/')
        cy.get('.portfolio-page > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        //Locate alinan yere geldi
        //once destination kismina indi
        cy.wait(5000)
        cy.get('.brand-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({duration:8000})
      //Simdi de our cliente gitti
      //duration yazarsak sayfadan oraya kadar inme suresini belirleriz. o sureyi bekleyip asagiya iner
    });
    it.skip('Istedigimiz koordinata gonderme', () => {
        cy.visit('https://tripandway.com/') 
        cy.get('.col > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(3000)
        cy.scrollTo(0,0)
        //once istedigimiz koordinata gitti sonra da geri dondu.
        cy.get('.blog-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView()
        cy.wait(3000)
        cy.scrollTo(0,500)//asagi inmek icin
        cy.wait(3000)
        cy.scrollTo(0,-500)//yukari cikmak icin


    });
    it('Koordinatla gitme', () => {
        cy.visit('https://tripandway.com/') 
        cy.get('.team-area > .container > :nth-child(1) > .col-md-12 > .main-headline > .headline > h2').scrollIntoView({top:800,left:0})
        
    });
});