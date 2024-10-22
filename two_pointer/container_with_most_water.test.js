const containerWithMostWater = require("./container_with_most_water");

describe("ContainerWithMostWater", () => {
  test("should return the maximum area of water contained by the container", () => {
    expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(containerWithMostWater([1, 1])).toBe(1);
    expect(containerWithMostWater([4, 3, 2, 1, 4])).toBe(16);
    expect(containerWithMostWater([1, 2, 1])).toBe(2);
  });
});
