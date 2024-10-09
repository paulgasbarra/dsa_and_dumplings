// stack/min_stack.test.js
const MinStack = require("./min_stack");

describe("MinStack", () => {
  let minStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  test("should push elements onto the stack", () => {
    minStack.push(5);
    expect(minStack.top()).toBe(5);
  });

  test("should return the minimum element", () => {
    minStack.push(5);
    minStack.push(3);
    minStack.push(7);
    expect(minStack.getMin()).toBe(3);
  });

  test("should pop elements and update the minimum", () => {
    minStack.push(5);
    minStack.push(3);
    minStack.push(7);
    minStack.pop();
    expect(minStack.getMin()).toBe(3);
    minStack.pop();
    expect(minStack.getMin()).toBe(5);
  });
});
