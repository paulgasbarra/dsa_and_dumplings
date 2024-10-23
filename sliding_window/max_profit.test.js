const maxProfit = require("./max_profit");

describe("maxProfit", () => {
  test("should return the maximum profit you can achieve", () => {
    expect(maxProfit([10, 1, 5, 6, 7, 1])).toBe(6);
    expect(maxProfit([10, 8, 7, 5, 2])).toBe(0);
  });
});
