let binarySearch = require("./binary_search");

describe("binarySearch", () => {
  test("returns the index of the target element", () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 5;
    expect(binarySearch.binarySearch(list, target)).toBe(4);
  });

  test("returns -1 if the target element is not in the list", () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = 10;
    expect(binarySearch.binarySearch(list, target)).toBe(-1);
  });
});
