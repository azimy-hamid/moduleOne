const mainJs = require("./main.js");

describe("rotateDiv", () => {
  let element;

  beforeEach(() => {
    element = document.createElement("div");
    element.style.transform = "";

    // element = jest.spyOn(document, 'createElement').mockReturnValue(element);
  });

  test("should rotate the element by 360 degrees on first call", () => {
    mainJs.rotateDiv(element);
    expect(element.style.transform).toBe("rotate(360deg)");
  });

  test("should rotate the element by 720 degrees on second call", () => {
    mainJs.rotateDiv(element);
    mainJs.rotateDiv(element);
    expect(element.style.transform).toBe("rotate(720deg)");
  });

  test("should rotate the element by 1080 degrees on third call", () => {
    mainJs.rotateDiv(element);
    mainJs.rotateDiv(element);
    mainJs.rotateDiv(element);
    expect(element.style.transform).toBe("rotate(1080deg)");
  });
});
