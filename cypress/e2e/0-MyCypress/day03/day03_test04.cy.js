//Before after islemleri
describe('', () => {
  before(() => {
    cy.visit('https://www.google.com')//Tum testlerden once sadece bir kez calisir
    cy.get('#L2AGLb > .QS5gu').click()//Cookies i kabul et
  });
  beforeEach(() => {//Her bir testten once Calisir
    cy.log('Yeni bir test basliyor')
  });

  after(() => { //Tum testler (Tum it bloklari tamamlandi)
    cy.log('Tum testler tamamlandi')//Tum testler tamamlandiginda calisir
  });

  afterEach(() => {//her bir testten it blogu sonra calisir
    cy.log('Bir test tamamlandi')
  });
   it('google da 3 idiot arama', () => {
    cy.get('#APjFqb').type('3 idiots{enter}').click().click()
            
   });
});