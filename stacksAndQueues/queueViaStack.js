import { timingSafeEqual } from "crypto";

/*
Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
Hints: #98, #7 74

Queues: FIFO
Stacks: LIFO

stack1 = [1, 2, 3, 4, 5]
stack2 = [5, 4, 3, 2, 1]

I: none
O: queue using two stacks

methods:
    enqueue (val)
        push onto stack1
    dequeue ()
        for each item in stack1
        pop off stack1
        push onto stack2

        at the end, pop off stack2 and return val
        
*/

function Stack() {
  this.stack = [];
  this.pop = function() {
    let last = this.stack[this.stack.length - 1];
    this.stack.pop();
    return last;
  };
  this.push = function(val) {
    this.stack.push(val);
  };
  this.isEmpty = function() {
    return this.stack.length === 0;
  };
}

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.enqueue = function(val) {
    this.stack1.push(val);
  };
  this.dequeue = function() {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  };
}
