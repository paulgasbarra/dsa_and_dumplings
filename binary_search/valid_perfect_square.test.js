const validPerfectSquare = require("./valid_perfect_square");

describe("validPerfectSquare", () => {
  test("returns true if num is a perfect square", () => {
    expect(validPerfectSquare(16)).toBe(true);
    expect(validPerfectSquare(25)).toBe(true);
    expect(validPerfectSquare(9)).toBe(true);
  });

  test("returns false if num is not a perfect square", () => {
    expect(validPerfectSquare(14)).toBe(false);
    expect(validPerfectSquare(20)).toBe(false);
    expect(validPerfectSquare(10)).toBe(false);
  });
});
