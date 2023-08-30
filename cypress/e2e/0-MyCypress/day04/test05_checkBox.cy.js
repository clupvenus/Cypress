///<reference types="Cypress" />
describe('Checkbox methodlar', () => {
    it.skip('Checkbox secimi', () => {
       cy.visit('https://the-internet.herokuapp.com/checkboxes') 
       cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
       cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')

        
    });
   it.skip('Sirasina gore secme', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes') 
    cy.get("input[type='checkbox']").eq(1).uncheck().should('not.be.checked')//indexe gore yaziyoruz.
    cy.get("input[type='checkbox']").eq(0).check().should('be.checked')//first eq=0
   });

   it('Toplu check', () => {
    cy.visit('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb')
    //cy.get("input[type='checkbox']").check()//boylece tum checkboxlari tiklayabiliriz.
  //  cy.get("input[type='checkbox']").eq(15).check()
    //cy.get("input[type='checkbox']").eq(25).check()
  //  cy.get("input[type='checkbox']").eq(35).check()
    //boylece tamamini degil istedigimizi check yapabiliyoruz.
    cy.get("input[type='checkbox']").check({multible:true})

   });
});