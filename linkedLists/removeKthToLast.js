/*
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
Hints: #8, #25, #47, #67, # 726
*/

const generateLinkedList = require("./removeDuplicates");

const list = new generateLinkedList();

list.addNodes(5);
//list.printAllNodes();

//   1 -> 5 -> 3 -> 8 -> 7  k=2, return 8

//if marker equals the runner AND counter equals k, return marker
//otherwise, return null

//if marker is UNDEFINED,
//runner iterates until NEXT NODE is the null end point
//marker set to that node
//if marker is DEFINED, iterate until NEXT NODE is marker
//set marker to point to new node
//increments counter
//if counter is equal to k, return that node (marker)
//otherwise, set runner equal to the head

function removeKthToLast(list, k, marker, runner, prevRunner, counter) {
  //   marker = marker;
  //   let runner = runner;
  //   let prevRunner;
  //   let counter = 0;
  let head = list.head;

  // if k is not > 0
  if (!k) {
    throw new Error("k must be a number greater than 0");
  }
  // if marker and head are equal,
  if (marker && runner && marker === runner && counter === k) {
    this.head = null;
  } else if (marker && runner && marker === runner && counter !== k) {
    return null;
  }

  if (!marker) {
    runner = head;
    while (runner.next) {
      prevRunner = runner;
      runner = runner.next;
    }
    counter += 1;
    if (counter === k) {
      prevRunner.next = runner.next; // deletes runner by setting previous to null
    }
    marker = runner;
    removeKthToLast(list, k, marker, runner, prevRunner, counter);
  } else {
    runner = head;
    while (runner.next !== marker) {
      prevRunner = runner;
      runner = runner.next;
    }
    counter += 1;
    if (counter === k) {
      prevRunner.next = runner.next; // deletes runner by setting previous to next
    }
    marker = runner;
    removeKthToLast(list, k, marker, runner, prevRunner, counter);
  }
}

//debugger;
// list.printAllNodes();
// removeKthToLast(list, 3);
// list.printAllNodes();

function removeKthToLast_two(list, k) {
  //1. get list length
  //2. initialize counter to length, kth
  //3. iterate through list, decrement counter each time
  //if counter = k, return node

  function getLength(list) {
    let length = 0;
    let current = list.head;
    while (current) {
      length += 1;
      current = current.next;
    }
    return length;
  }

  let length = getLength(list);
  if (!length) {
    throw new Error("list must be of length greater than 0");
  } else if (!k) {
    throw new Error("k must be greater than 0");
  } else if (k > length) {
    throw new Error("kth to last element does not exist");
  }

  let kth = length;
  let current = list.head;
  let previous;

  while (current) {
    if (kth === k) {
      previous.next = current.next;
      return;
    } else {
      previous = current;
      current = current.next;
      kth -= 1;
    }
  }
}
list.printAllNodes();
removeKthToLast_two(list, 3);
list.printAllNodes();
