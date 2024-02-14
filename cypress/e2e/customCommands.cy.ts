describe("Login Page", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("login", () => {
    // cy.login("test", "Test1234*");
    cy.login(process.env.EMAIL);
    cy.contains("Log out");
  });
});
