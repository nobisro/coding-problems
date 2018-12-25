/*
Remove Dups: Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
Hints: #9, #40
*/

function LinkedList() {
  this.head = null;

  function Node(int) {
    this.data = int;
    this.next = null;
  }

  this.randomNum = function(num) {
    return Math.floor(Math.random() * (num / 2));
  };

  this.addNodes = function(n) {
    for (let i = 0; i < n; i++) {
      let node = new Node(this.randomNum(n));
      let currentNode = this.head;

      if (!currentNode) {
        this.head = node;
      } else {
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        //   previousNode = currentNode;
        currentNode.next = node;
      }
    }
  };
  this.removeDuplicates = function() {
    console.log("------REMOVING DUPLICATES------");
    let slow = this.head;
    let fast = this.head.next;
    let previousFast = slow;
    let go = true;
    while (slow) {
      if (go === false) {
        console.log("am i stuck here");
        fast = slow.next;
      } else {
        go = true;
        while (go) {
          if (!fast) {
            go = false;
          } else if (slow.data === fast.data) {
            //   console.log("equal:", slow.data, fast.data);
            fast = fast.next;
            previousFast.next = fast;
          } else {
            //console.log("unequal:", slow.data, fast.data);
            previousFast = fast; // iterate previous fast
            fast = fast.next; // iterate fast
          }
        }
      }
      slow = slow.next;
    }
    this.printAllNodes();
    return;
  };
  this.printAllNodes = function() {
    let current = this.head;
    console.log("------PRINTING ALL NODES------");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  };
}

// const list = new LinkedList();

// for (let i = 0; i < 10; i++) {
//   list.addNode();
// }

// printAllNodes(list);
// list.removeDuplicates();
// console.log("========");
// printAllNodes(list);

/*
======================
BEGIN REMOVAL BELOW
======================
*/

// const linkedList = {
//   generateLinkedList: LinkedList
// };

module.exports = LinkedList;
