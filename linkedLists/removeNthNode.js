/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const LinkedList = require("./makeList");
const list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);

var removeNthFromEnd = function(head, n) {
  //NAIVE SOLUTION: traverse entire list to find length, calculate which node to delete, delete it, return head

  //create a pointer variable initialized to head (nSteps);
  //create second pointer nStepsMinusOne;
  //create steps variable to 0;
  //traverse the linked list
  //if steps is less than n, increment steps
  //otherwise, while current, update current and nSteps and nStepsMinusOne to current.next and nSteps.next and nStepsMinusOne.next
  //if nStepsMinusOne is undfined, set to head, otherwise, increment
  //when current is null
  //set nStepsMinusOne.next to nSteps.next
  //return head

  let nSteps = head;
  let nStepsMinusOne;
  let steps = 0;
  let current = head;

  while (current) {
    if (steps < n) {
      steps += 1;
      current = current.next;
    } else {
      current = current.next;
      nSteps = nSteps.next;
      if (nStepsMinusOne) {
        nStepsMinusOne = nStepsMinusOne.next;
      } else {
        nStepsMinusOne = head;
      }
    }
  }

  if (nStepsMinusOne) {
    nStepsMinusOne.next = nSteps.next;
    return head;
  } else {
    head = head.next;
    return head;
  }
};

let newHead = removeNthFromEnd(list.head, 5);

console.log(newHead);
