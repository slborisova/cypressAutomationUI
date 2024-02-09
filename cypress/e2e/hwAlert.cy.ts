import { HwAlertPage } from "../../pages/HwAlerts";
describe("HWALERT", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/alerts`);
  });
  it("Click alert button", () => {
    HwAlertPage.jsAlert();
  });
  it("Click timer button", () => {
    HwAlertPage.jsTimerAlertButton();
  });
  it("Click confirm button Ok", () => {
    HwAlertPage.jsConfirmButtonOk();
  });
  it("Click confirm button Cancel", () => {
    HwAlertPage.jsConfirmButtonCancel();
  });
  it("Click prompt button", () => {
    HwAlertPage.jsPromptButton();
  });
});
