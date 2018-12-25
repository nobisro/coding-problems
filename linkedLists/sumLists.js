/*
Sum Lists: You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2) .Thatis,617 + 295.
Output: 2 - > 1 - > 9. That is, 912.
FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295.
Output: 9 - > 1 - > 2. That is, 912.
*/

const LinkedList = require("./makeList");
// const list1 = new LinkedList();
// list1.addNodes(7);
// list1.addNodes(1);
// list1.addNodes(6);
// const list2 = new LinkedList();
// list2.addNodes(5);
// list2.addNodes(9);
// list2.addNodes(2);

function sumLists(list1, list2) {
  /*
    iterate through list1, add each number to string1
    iterate through list2, add each number to string2
    reverse string1 and string2, add them together, reverse, store in variable
    create new list
    iterate through each letter, add to tail of new list
    */

  let string1 = "";
  let string2 = "";

  let current1 = list1.head;
  while (current1) {
    string1 += current1.data;
    current1 = current1.next;
  }
  console.log("string1_:", string1);

  let current2 = list2.head;
  while (current2) {
    string2 += current2.data;
    current2 = current2.next;
  }

  string1
    .split("")
    .reverse()
    .join("");
  string2
    .split("")
    .reverse()
    .join("");
  console.log("string1:", string1);
  let string3 = (Number(string1) + Number(string2) + "")
    .split("")
    .reverse("")
    .join("");

  let list3 = new LinkedList();
  let current3 = list3.head;
  console.log("string3 length:", string3);
  for (let i = 0; i < string3.length; i++) {
    if (!current3) {
      console.log(string3[i]);
      current3 = { data: string3[i], next: null };
    } else {
      while (current3) {
        current3 = current3.next;
      }
      console.log("letter:", string3[i]);
      current3 = { data: string3[i], next: null };
    }
  }
  return list3;
}

//sumLists(list1, list2);

/*
|===============|
|Gail's Solution|
|===============|

LinkedListNode addLists(LinkedListNode 11, LinkedListNode 12, int carry) {
2 if (11 == null && 12 == null && carry == 0) {
3 return nullj
4 }
5
6 LinkedListNode result new LinkedListNode()j
7 int value = carryj
8 if (11 != nUll) {
9 value += 11.data
10 }
11 if (12 != null) {
    value += 12.data
13 }
14
15 result.data value %  / * Second digit of number 
 
---Recurse---
18 if (11 != null I I 12 != nUll) {
    19 LinkedListNode more = addLists(ll == null? null: 11. next,
    20 12 == null? null: 12.next,
    21 value >= 18 ? 1 : 0)j
    22 res ult.setNext(more)j
    23 }
    24 return resultj
    25 }

*/

const sumList1 = new LinkedList();
const sumList2 = new LinkedList();
sumList1.addToTail(7);
sumList1.addToTail(1);
sumList1.addToTail(9);
sumList2.addToTail(2);
sumList2.addToTail(3);
sumList2.addToTail(4);

// console.log(sumList2.head.data);
// console.log(sumList2.head.next.data);
// console.log(sumList2.head.next.next.data);

function addLists(list1, list2) {
  let list3 = new LinkedList();

  addListsRecursion(list1, list2, 0);

  function addListsRecursion(list1, list2, carry) {
    if (list1 === null && list2 === null && carry === 0) {
      return null;
    } else if (list1 === null && list2 === null && carry) {
      list3.addToTail(carry);
      return;
    }

    let value = carry;
    if (list1 !== null && list1.head) {
      value += list1.head.data;
    } else if (list1 !== null && list1.data) {
      value += list1.data;
    }
    if (list2 !== null && list2.head) {
      value += list2.head.data;
    } else if (list2 !== null && list2.data) {
      value += list2.data;
    }
    console.log("value:", value);

    let newValue;
    let newCarry;
    if (value - 10 >= 0) {
      newValue = value - 10;
      newCarry = 1;
    } else {
      newValue = value;
      newCarry = 0;
    }
    console.log("newValue:", newValue);
    console.log("newCarry:", newCarry);
    list3.addToTail(newValue);

    if (list1.head && list2.head) {
      //console.log("new carry:", newCarry);
      addListsRecursion(list1.head.next, list2.head.next, newCarry);
    } else if (list1 && list2) {
      console.log("new carry:", newCarry);
      addListsRecursion(list1.next, list2.next, newCarry);
    } else if (!list1 && !list2 && carry) {
      addListsRecursion(null, null, carry);
    }
  }
  console.log("=======");
  //console.log(list3);
  return list3;
}

let t1 = addLists(sumList1, sumList2);

let current = t1.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
