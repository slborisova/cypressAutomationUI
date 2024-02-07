class HwAlert {
  private alertButtonSelector: string = "#alertButton";
  private jsAlertWindowText: string = "You clicked a button";

  private timerAlertButtonSelector: string = "#timerAlertButton";
  private jstimerAlertButtonText: string =
    "This alert appeared after 5 seconds";

  private confirmButtonSelector: string = "#confirmButton";
  private jsconfirmButtonText: string = "Do you confirm action?";
  private jsconfirmButtonTextOk: string = "You selected Ok";
  private jsconfirmButtonTextCancel: string = "You selected Cancel";
  private resultSelector: string = "#confirmResult";

  // private promptButtonSelector: string = "#promtButton";
  // private js

  jsAlert() {
    cy.get(this.alertButtonSelector).click();
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(this.jsAlertWindowText);
    });
    cy.on("window:confirm", () => true);
  }

  jsTimerAlertButton() {
    cy.get(this.timerAlertButtonSelector).click();
    cy.wait(5000);
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(this.jstimerAlertButtonText);
    });
  }

  jsConfirmButtonOk() {
    cy.get(this.confirmButtonSelector).click();
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(this.jsconfirmButtonText);
    });
    cy.on("window:confirm", () => true);
    cy.get(this.resultSelector).should("have.text", this.jsconfirmButtonTextOk);
  }
  jsConfirmButtonCancel() {
    cy.get(this.confirmButtonSelector).click();
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(this.jsconfirmButtonText);
    });
    cy.on("window:confirm", () => false);
    cy.get(this.resultSelector).should(
      "have.text",
      this.jsconfirmButtonTextCancel
    );
  }

  // jsPromptButton() {
}

export const HwAlertPage = new HwAlert();
