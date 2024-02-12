class HwIFrame {
  private iframe1Selector: string = "#frame1";
  private bodySelector: string = "body";
  private button1Selector: string = "#click_me_1";

  private iframe2Selector: string = "#frame2";
  private button2Selector: string = "#click_me_2";

  private iframe3Selector: string = "#frame3";
  private iframe4Selector: string = "#frame4";
  private button4Selector: string = "#click_me_4";

  visit() {
    cy.visit(`${Cypress.env("play1")}/frames.html`);
  }

  getHmIFrame1() {
    cy.get(this.iframe1Selector).then((hWFrame1) => {
      const bodyFrame1 = hWFrame1.contents().find(this.bodySelector);
      cy.wrap(bodyFrame1)
        .find(this.button1Selector)
        .then((button1) => {
          cy.wrap(button1).should("have.text", "Click Me 1");
          cy.wrap(button1).click();
          cy.wrap(button1).should("have.text", "Clicked");
        });
    });
  }

  getHmIFrame2() {
    cy.get(this.iframe1Selector).then((hWFrame1) => {
      const bodyFrame1 = hWFrame1.contents().find(this.bodySelector);
      cy.wrap(bodyFrame1)
        .find(this.iframe2Selector)
        .then((hWFrame2) => {
          const bodyFrame2 = hWFrame2.contents().find(this.bodySelector);
          cy.wrap(bodyFrame2)
            .find(this.button2Selector)
            .then((button2) => {
              cy.wrap(button2).should("have.text", "Click Me 2");
              cy.wrap(button2).click();
              cy.wrap(button2).should("have.text", "Clicked");
            });
        });
    });
  }

  getHmIFrame3() {
    cy.get(this.iframe1Selector).then((hWFrame1) => {
      const bodyFrame1 = hWFrame1.contents().find(this.bodySelector);
      cy.wrap(bodyFrame1)
        .find(this.iframe3Selector)
        .then((hWFrame3) => {
          const bodyFrame3 = hWFrame3.contents().find(this.bodySelector);
          cy.wrap(bodyFrame3)
            .find(this.iframe4Selector)
            .then((hWFrame4) => {
              const bodyFrame4 = hWFrame4.contents().find(this.bodySelector);
              cy.wrap(bodyFrame4)
                .find(this.button4Selector)
                .then((button4) => {
                  cy.wrap(button4).should("have.text", "Click Me 4");
                  cy.wrap(button4).click();
                  cy.wrap(button4).should("have.text", "Clicked");
                });
            });
        });
    });
  }
}

export const HwIFramePage = new HwIFrame();
