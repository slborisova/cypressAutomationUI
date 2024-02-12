class IFrameApp {
  getIframe() {
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").then((iframeApp) => {
    //   cy.wrap(iframeApp).type(`{selectAll}{del}`).type("Hello World!");
      cy.wrap(iframeApp).clear().type("Hello Cypress!");
    });
  }

  visit() {
    cy.visit(`${Cypress.env("herokuapp")}/iframe`);
  }
}

export const IFrameAppPage = new IFrameApp();
