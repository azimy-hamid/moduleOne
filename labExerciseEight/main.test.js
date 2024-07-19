const rotateDiv = require("./main.js");

describe("rotateDiv", () => {
  let element;

  beforeEach(() => {
    // Create a mock element
    element = document.createElement("div");
    element.style.transform = "";
  });

  test("should rotate the element by 360 degrees on first call", () => {
    rotateDiv(element);
    expect(element.style.transform).toBe("rotate(360deg)");
  });

  test("should rotate the element by 720 degrees on second call", () => {
    rotateDiv(element);
    rotateDiv(element);
    expect(element.style.transform).toBe("rotate(720deg)");
  });

  test("should rotate the element by 1080 degrees on third call", () => {
    rotateDiv(element);
    rotateDiv(element);
    rotateDiv(element);
    expect(element.style.transform).toBe("rotate(1080deg)");
  });
});
