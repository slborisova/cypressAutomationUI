class TextBox {
  fullName: string = "[id=userName]";
  email: string = '[id="userEmail"]';
  currentAddress: string = '[placeholder="Current Address"]';
  permanentAddress: string = 'textarea[id="permanentAddress"]';
  submitButton: string = '[id="submit"]';

  submitButtonTextBox() {
    cy.get(this.fullName).type("Jane Smith");
    cy.get(this.email).type("janesmith@gmail.com");
    cy.get(this.currentAddress).type("123 Jane Lines Janestown, VA");
    cy.get(this.permanentAddress).type("456 Jane Lines Janestown, VA");
    cy.get(this.submitButton).click();
  }
}
export const TextBoxPage = new TextBox();
