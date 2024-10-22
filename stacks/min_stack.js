class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(value) {
    if (this.min.length === 0 || value <= this.min) {
      this.min.push(value);
    }
    this.stack.push(value);
  }

  pop() {
    const value = this.stack.pop();
    if (value === this.min[this.min.length - 1]) {
      this.min.pop();
    }
    return value;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}

module.exports = MinStack;
