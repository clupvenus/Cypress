///<reference types="Cypress" />
import { faker } from '@faker-js/faker';
describe('Faker kullanimi', () => {
    /*kurulum islemi yapmamaiz gerekiyor.
    www.npmjs.com a gidilir
    npm install --save-dev @faker-js/faker
    import { faker } from '@faker-js/faker';

    Cypress de uc farkli degisken tanimlanmasi yapilir
    let variablename= deger atanabilir ve degistirilebilir.
    var variablename=deger atanabilir ve degistirilebilir.
    const variablename=deger atanir ama degistirilemez
    */

    it('Automationexercise login testi', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
         
        let firstName= faker.person.firstName('male')
        let surname=faker.person.lastName()
        cy.get('[data-qa="signup-name"]').type(firstName+' '+surname)
        let email=faker.internet.email()
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        let password=faker.internet.password()
        cy.get('[data-qa="password"]').type(password)
        cy.get('[data-qa="first_name"]').type(firstName)
        cy.get('[data-qa="last_name"]').type(surname)
        let address=faker.location.streetAddress()
        cy.get('[data-qa="address"]').type(address)
        cy.get('[data-qa="country"]').select(1)
        let state=faker.location.state()
        cy.get('[data-qa="state"]').type(state)
        let city=faker.location.city()
        cy.get('[data-qa="city"]').type(city)
        let zipcode=faker.location.zipCode('#####')
        cy.get('[data-qa="zipcode"]').type(zipcode)
        let phonenumber=faker.phone.number('###-###-##-##')
        cy.get('[data-qa="mobile_number"]').type(phonenumber)
        cy.get('[data-qa="create-account"]').click()
//Assertion
cy.get('b').should('contain.text','Created')


        
    });
});