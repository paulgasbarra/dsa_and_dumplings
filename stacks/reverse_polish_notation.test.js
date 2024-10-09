const evaluateRPN = require("./reverse_polish_notation");

describe("evaluateRPN", () => {
  test("should evaluate reverse polish notation", () => {
    expect(evaluateRPN(["2", "1", "+", "3", "*"])).toBe(9);
    expect(evaluateRPN(["4", "13", "5", "/", "+"])).toBe(6);
    expect(
      evaluateRPN([
        "10",
        "6",
        "9",
        "3",
        "/",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ])
    ).toBe(22);
  });
});
