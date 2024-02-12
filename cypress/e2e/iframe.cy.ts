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
    IFrameAppPage.getIframe();
  });
});
