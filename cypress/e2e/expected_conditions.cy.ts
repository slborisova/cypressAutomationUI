describe("EXPECTED CONDITIONS", () => {

    // Alert window?
    // it('Wait for alert to be present', () => {
    //     cy.visit(Cypress.env("expected_conditions"));
    //     cy.get('[id="alert_trigger"]').should("be.visible").and("exist").click()
    //     cy.get('[id="prompt_trigger"]').should("be.visible").and("exist").click()

        
    //  });

  it("Wait for element to be visible", () => {
    cy.visit(Cypress.env("expected_conditions"));
    cy.get('[id="visibility_trigger"]')
      .should("be.visible")
      .and("exist")
      .click();
    cy.get('[id="visibility_target"]').should("be.visible").should("exist");
    cy.contains("button", "Click Me").click();
    cy.contains('.popover-header', 'Can you see me?')
    cy.contains('.popover-body', 'I just removed my invisibility cloak!!')
  });

  it("Wait for element to be Invisible", () => {
    cy.visit(Cypress.env("expected_conditions"));
    cy.get('[id="invisibility_target"]').should("be.visible").and("exist");
    cy.get('[id="invisibility_trigger"]')
      .should("be.visible")
      .and("exist")
      .click();
    cy.contains('[id="spinner_gone"]', 'Thank God that spinner is gone!')
   });

 it('Wait for element to be enabled', () => {
     cy.visit(Cypress.env("expected_conditions"));
     cy.get('[id="enabled_trigger"]').should("be.visible").and("exist").click()
     cy.get('[id="enabled_target"]').should("have.text", 'Enabled Button').click()
     //cy.contains('button', 'Enabled Button')
     cy.contains('.popover-header', 'Yay! I am super active now!')
     cy.contains('.popover-body', 'See, you just clicked me!!')
  });

//Bug?
//   it('Wait for Page Title to change', () => {
//     cy.visit(Cypress.env("expected_conditions"));
//     cy.get('id="page_title_trigger"').should("be.visible").and("exist").click()
//     //cy.contains('button', 'Enabled Button')
//     cy.get('[id="page_title_trigger"]').should("have.text", 'My New Title')//selector should be changed
//  });

it('Wait for text/value to have specific values', () => {
    cy.visit(Cypress.env("expected_conditions"));
    cy.get('[id="text_value_trigger"]').should("be.visible").and("exist").click()
    cy.get('[class="spinner-grow spinner-grow-sm"]').should("be.visible").and("exist")
    cy.contains('button', 'Submit')
 });

// ??? iframe
//  it('Wait for frame to be available and then switch to it', () => {
//     cy.visit(Cypress.env("expected_conditions"));
//     cy.get('[id="wait_for_frame"]').should("be.visible").and("exist").click()
    
//  });

})