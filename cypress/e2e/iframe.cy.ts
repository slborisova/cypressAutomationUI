import { IFramePage } from "../../pages/Iframe";
import { IFrameAppPage } from "../../pages/IframeApp";

describe("IFRAME", () => {
  beforeEach(() => {
    IFramePage.visit();
  });
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/}, { log: false})
  })
  it("test iframe", () => {
    IFramePage.getIframe();
  });
});
describe("IFRAMEAPP", () => {
  beforeEach(() => {
    IFrameAppPage.visit();
  });
  it("test iframe with extension", () => {
    IFrameAppPage.getIframe();
  });
});
describe.only('IFRAME WITH PLUGIN', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('herokuapp')}/iframe`);
  });
  it('test iFrame', () => {
    cy.frameLoaded('#mce_0_ifr')
    cy.iframe('#mce_0_ifr').then((iframe)=> {
      cy.wrap(iframe).type('{selectAll}{del}').type('Hello World!')
      cy.wrap(iframe).should('have.text', 'Hello World!')
      cy.wrap(iframe).clear().type('Cypress')
      cy.then(() => {
        expect(iframe.text()).to.equal('Cypress')
      })
    })
  })
})
