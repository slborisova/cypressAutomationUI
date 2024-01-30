import { TextBoxPage } from "../../pages/TextBox";
describe("Text Box", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/text-box`);
  });
  it("text-box", () => {
    cy.get('[id="userName"]').type("Jane Smith");
    cy.get('[id="userEmail"]').type("janesmith@gmail.com");
    cy.get('[id="currentAddress"]').type("123 Jane Lines Janestown, VA");
    cy.get('textarea[id="permanentAddress"]').type(
      "456 Jane Lines Janestown, VA"
    );
    cy.get('[id="submit"]').click();
    cy.contains("Name:Jane Smith");
    cy.contains("Email:janesmith");
    cy.contains("Current Address :123 Jane");
    cy.contains("Permananet Address :456 Jane Lines");

  });
  it("text-box with PageObject", () => {
    TextBoxPage.submitButtonTextBox();
    cy.contains("Name:Jane Smith");
    cy.contains("Email:janesmith");
    cy.contains("Current Address :123 Jane");
    cy.contains("Permananet Address :456 Jane Lines");
  });
});
