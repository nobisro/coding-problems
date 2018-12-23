/*
Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
Hints: # 75, #32, #43
*/

function Stack() {
  this.stack = [];
  this.push = val => {
    this.stack.push(val);
  };
  this.pop = () => {
    return this.stack.pop();
  };
  this.peek = () => {
    return this.stack[this.stack.length - 1];
  };
  this.isEmpty = () => {
    return this.stack.length === 0;
  };
}

let stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(1);
stack.push(7);
stack.push(10);

//console.log(stack);
// [5, 8, 1, 3, 7, 10] => [5, 1], [8, 3, 7, 10]
// [10, 8, 7, 5, 1]

function sortStack(stack) {
  let s1 = stack;
  let s2 = new Stack();
  let temp;

  while (!s1.isEmpty()) {
    if (temp === undefined) {
      temp = s1.pop();
    }

    if (s2.isEmpty()) {
      s2.push(temp);
      temp = undefined;
    } else if (temp <= s2.peek()) {
      s2.push(temp);
      temp = undefined;
    } else if (temp > s2.peek()) {
      s1.push(s2.pop());
    }
  }

  return s2;
}

console.log(sortStack(stack));
