const maxSumSubarray = require("./max_sum_subarray");

describe("maxSumSubarray", () => {
  test("should return the largest sum of a contiguous subarray of length 5", () => {
    expect(maxSumSubarray([1, 2, 3, 4, 5, 6, 7], 3)).toBe(18);
    expect(maxSumSubarray([1, 2, 3, 4, 5, 6, 7], 4)).toBe(22);
    expect(maxSumSubarray([4, 21, 11, 16, -26, 8, 13, -4, 6], 4)).toBe(52);
  });
});
