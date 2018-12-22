/*

A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

*/

function isProperlyNested(s) {
  //return 1 if true, 0 if false
  //init openingBrackets
  //init closingBrackets
  //init new Stack

  //scan through string, add to stack if char is in ['(', '{', '[']
  //check by adding opening brackets in a hash table and checking at each iteration if char exists
  //if char is a closing bracket
  //peek the stack
  //if char is '{' and peek = '}
  //pop the stack
  // if char is '(' and peek = ')'
  //pop the stack
  // if char is '[' and peek = ']'
  //pop the stack
  // return stack.getLength = 0 ? 1 : 0

  const openingBrackets = {
    "{": true,
    "(": true,
    "[": true
  };

  const closingBrackets = {
    "}": true,
    ")": true,
    "]": true
  };

  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (openingBrackets[char]) {
      stack.push(char);
    } else if (closingBrackets[char]) {
      let peek = stack.peek();
      if (peek === "(" && char === ")") {
        stack.pop();
      } else if (peek === "{" && char === "}") {
        stack.pop();
      } else if (peek === "[" && char === "]") {
        stack.pop();
      }
    }
  }

  return stack.getLength() === 0 ? 1 : 0;
}

function Stack() {
  this.stack = [];
}

Stack.prototype.pop = function() {
  this.stack.pop();
};

Stack.prototype.peek = function() {
  let last = this.stack[this.stack.length - 1];
  return last;
};

Stack.prototype.push = function(el) {
  this.stack.push(el);
};

Stack.prototype.getLength = function() {
  return this.stack.length;
};

console.log(isProperlyNested("[({})]"));
