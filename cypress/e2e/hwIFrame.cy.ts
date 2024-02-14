import { HwIFramePage } from "../../pages/HwIFrame";

describe("HWIFRAME", () => {
  beforeEach(() => {
    HwIFramePage.visit();
  });

  it("test Frame1 Title", () => {
    HwIFramePage.getFrame1();
  });

  it("test Frame2 Title", () => {
    HwIFramePage.getFrame2();
  });

  it("test Frame3 Title", () => {
    HwIFramePage.getFrame3();
  });

  it("test Frame4 Title", () => {
    HwIFramePage.getFrame4();
  });

  it("test hmIFrame1 Extention", () => {
    HwIFramePage.getHmIFrame1Extention();
  });

  it("test hmIFrame2 Extention", () => {
    HwIFramePage.getHmIFrame2Extention();
  });

  it("test hmIFrame3 Extention", () => {
    HwIFramePage.getHmIFrame3Extention();
  });
});
