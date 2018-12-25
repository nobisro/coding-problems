/*
Palindrome: Implement a function to check if a linked list is a palindrome.
*/

const LinkedList = require("./makeList");
const list = new LinkedList();

function makePalindrome(list, palindrome) {
  for (let i = 0; i < palindrome.length; i++) {
    list.addToTail(palindrome[i]);
  }
  return list;
}

let p = makePalindrome(list, "racezecar");

function isPalindrome(list) {
  let first;
  let last;

  //set first and last to respective nodes in list
  if (list.head) {
    first = list.head;
    let current = list.head;
    while (current.next) {
      current = current.next;
    }
    last = current;
  } else if (list) {
    first = list;
    let current = list;
    while (current.next) {
      current = current.next;
    }
    last = current;
  }

  //if first equals last, we have reached the middle (assumes list length is uneven)
  if (first === last) {
    //check if they are equal
    if (first.data === last.data) {
      return true;
    } else {
      return false;
    }
  } else {
    list.deleteHead();
    list.deleteTail();
    return isPalindrome(list);
  }
}

console.log(isPalindrome(p));
