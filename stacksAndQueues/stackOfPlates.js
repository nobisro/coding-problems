/*
Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks. push () and SetOfStacks. pop () should behave identically to a single stack
(that is, pop ( ) should return the same values as it would if there were just a single stack).
FOLLOW UP
Implement a function popAt (int index) which performs a pop operation on a specific sub-stack.
Hints: #64, #87
*/

//SetOfStacks class (maxHeight)
//data hash table
//
//create Stack class
//push
//always check if height < maxHeight
//pop
//peek
//height
// key initialized to 0;

//if height of a stack is >= maxHeight
//increment key
//create a new stack in our data hash table at "key"
//push value onto new stack

//popAt(int) method
//finds stack at int key in data
//stores last element in memory
//pops the stack
//returns the last element

function SetOfStacks(maxHeight) {
  this.data = {};
  this.key = 0;
  this.maxHeight = maxHeight;
}
SetOfStacks.prototype.popAt = function(int) {
  this.data[int].pop();
};
SetOfStacks.prototype.push = function(val) {
  //check stack length at data[key] < maxHeight
  //if so, push,
  //else,
  //increment key
  //create new stack at key in data
  //push into new stack

  if (this.data[this.key].length < this.maxHeight) {
    this.data[this.key].push(val);
  } else {
    this.key += 1;
    this.data[this.key] = new Stack();
    this.data[this.key].push(val);
  }
};

function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(val) {
  this.stack.push(val);
};
Stack.prototype.pop = function() {
  let last = this.stack[this.stack.length - 1];
  if (last) {
    this.stack.pop();
    return last;
  }
};
Stack.prototype.getHeight = function() {
  return this.stack.length;
};
