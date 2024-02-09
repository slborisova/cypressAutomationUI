import { IFramePage } from "../../pages/Iframe";
import { IFrameAppPage } from "../../pages/IframeApp";

describe("IFRAME", () => {
  beforeEach(() => {
    IFramePage.visit();
  });
  it("test iframe", () => {
    IFramePage.getIframe();
  });
});

describe("IFRAMEAPP", () => {
  beforeEach(() => {
    IFrameAppPage.visit();
  });
  it("test iframe with extension", () => {
    cy.frameLoaded('[id="mce_0_ifr"]');
    cy.iframe('[id="mce_0_ifr"]').then((iframeApp) => {
      cy.wrap(iframeApp).type("{selectAll}{del}").type("Hello World!");
      // OR
      cy.wrap(iframeApp).clear().type("Hello Cypress!");
    });
  });
});
