/*
Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the
intersecting node. Note that the intersection is defined based on reference, not value. That is, if the
kth node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.
*/

const LinkedList = require("./makeList");
const list1 = new LinkedList();
const list2 = new LinkedList();

const a = ["a"];
const b = ["b"];
const c = ["c"];

const m = ["m"];

const x = ["x"];
const y = ["y"];
const z = ["z"];

list1.addToHead(a);
list1.addToHead(b);
list1.addToHead(m);
list1.addToHead(c);

list2.addToHead(x);
list2.addToHead(m);
list2.addToHead(y);
list2.addToHead(z);

/*
|===================|
|  NAIVE SOLUTION   |
|===================|
*/

function intersects(list1, list2) {
  let current1 = list1.head;
  while (current1) {
    let current2 = list2.head;
    while (current2) {
      if (current2 === current1) {
        return true;
      }
      current2 = current2.next;
    }
    current1 = current1.next;
  }
  return false;
}

console.log(intersects(list1, list2));
