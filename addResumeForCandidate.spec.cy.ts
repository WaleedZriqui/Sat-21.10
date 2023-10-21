import LoginPage from "../../../pageObjects/LoginPage";

const loginObj: LoginPage = new LoginPage();

describe('adding resume for candidate', () => {

  beforeEach(() => {
    cy.visit('/');
    loginObj.login('Admin', 'admin123');
  });

  it('cv should be uploaded', () => {
    cy.visit('/recruitment/addCandidate')
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("waleed")
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("waleed");
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("waleed");
    cy.get('.oxd-select-text--after > .oxd-icon').click({ force: true });
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(5) > span').click();
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("something@gmail.com")
    cy.get('input[type="file"]').selectFile("cypress/fixtures/CV.docx", { force: true })
  });

});