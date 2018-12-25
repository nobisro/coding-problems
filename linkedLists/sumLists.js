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

const LinkedList = require("./removeDuplicates");
const list1 = new LinkedList();
list1.addNodes(7);
list1.addNodes(1);
list1.addNodes(6);
const list2 = new LinkedList();
list2.addNodes(5);
list2.addNodes(9);
list2.addNodes(2);

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

sumLists(list1, list2);
