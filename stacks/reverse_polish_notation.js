function evaluateRPN(tokens) {
  const stack = [];
  const operators = "*+-/";
  for (const t of tokens) {
    if (!operators.includes(t)) {
      stack.push(t);
    } else {
      let a = parseInt(stack.pop());
      let b = parseInt(stack.pop());
      if (t === "+") {
        stack.push(a + b);
      }
      if (t === "-") {
        stack.push(a - b);
      }
      if (t === "*") {
        stack.push(a * b);
      }
      if (t === "/") {
        stack.push(Math.trunc(b / a));
      }
    }
  }

  return parseInt(stack[0]);
}

module.exports = evaluateRPN;
