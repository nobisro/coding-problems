const LinkedList = require("./makeList");

const list1 = new LinkedList();
list1.addToTail(1);
list1.addToTail(5);
list1.addToTail(7);

const list2 = new LinkedList();
list2.addToTail(3);
list2.addToTail(4);
list2.addToTail(8);

const list3 = new LinkedList();
list3.addToTail(2);
list3.addToTail(5);
list3.addToTail(6);
list3.addToTail(9);

const list = [list1, list2, list3];

function findMaxLength(lists) {
  let indexOfLongestList = 0;
  let lengthOfLongestList = 0;

  for (let i = 0; i < lists.length; i++) {
    let current = lists[i]["head"];
    let length = 1;
    while (current) {
      if (length > lengthOfLongestList) {
        lengthOfLongestList = length;
        indexOfLongestList = i;
      }
      length += 1;
      current = current.next;
    }
  }

  return {
    indexOfLongestList: indexOfLongestList,
    lengthOfLongestList: lengthOfLongestList
  };
}

function merge(lists) {
  let { indexOfLongestList, lengthOfLongestList } = findMaxLength(lists);
  let merged = new LinkedList();

  //iterate across each list in array
  //initialize marker array, where index corresponds to list, and value corresponds to marker

  //iterate from 0 to lengthOfLongestLis
  //check if undefined
  //check if value is greater or equal to tail of merged list
  //if
  let unsorted = [];

  for (let i = 0; i < lists.length; i++) {
    let current = lists[i]["head"];
    while (current) {
      unsorted.push(current.data);
      current = current.next;
    }
  }
  //return unsorted;

  let sorted = unsorted.sort((a, b) => {
    return b < a;
  });

  sorted.forEach(char => {
    merged.addToTail(char);
  });

  return merged;
}

console.log(merge(list));
