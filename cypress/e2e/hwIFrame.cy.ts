import { HwIFramePage } from "../../pages/HwIFrame";

describe("HWIFRAME", () => {
  beforeEach(() => {
    HwIFramePage.visit();
  });

  it("test hmIFrame1", () => {
    HwIFramePage.getHmIFrame1();
  });
  it("test hmIFrame2", () => {
    HwIFramePage.getHmIFrame2();
  });
  it("test hmIFrame3", () => {
    HwIFramePage.getHmIFrame3();
  });
});
