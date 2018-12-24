const generateLinkedList = require("./removeDuplicates");
const list = new generateLinkedList();
list.addNodes(8);

/*
1. find length of the list
2. init mid to floor of length / 2
3. init counter to 0
4. iterate through list, iterating counter each time
5. if counter = mid, delete node
*/

function deleteMiddleNode(list) {
  console.log("ORIGINAL LIST");
  list.printAllNodes();
  let length = (function(list) {
    let current = list.head;
    let length = 0;
    while (current) {
      length += 1;
      current = current.next;
    }
    return length;
  })(list);

  let mid = Math.floor(length / 2);

  let counter = 0;

  let current = list.head;
  let previous;

  while (current) {
    if (counter === mid) {
      previous.next = current.next;
      break;
    } else {
      previous = current;
      current = current.next;
      counter += 1;
    }
  }
  console.log("NEW LIST");
  list.printAllNodes();
}

deleteMiddleNode(list);
