const LinkedList = function() {
  this.head = null;
  this.length = 0;
  this.current = null;

  this.addToHead = function(val) {
    let node = new Node(val);
    let head = this.head;
    this.head = node;
    this.head.next = head;
    this.length += 1;
  };
  this.addToTail = function(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.length += 1;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length += 1;
    }
  };
  this.deleteHead = function() {
    this.head = this.head.next;
  };
  this.deleteTail = function() {
    let current = this.head;
    let previous;

    while (current.next) {
      if (!previous) {
        previous = this.head;
      } else {
        previous = current;
      }
      current = current.next;
    }

    if (previous) {
      previous.next = null;
    } else {
      previous = null;
    }
    this.length -= 1;
  };

  function Node(val) {
    this.data = val;
    this.next = null;
  }
};
const list = new LinkedList();
//debugger;
list.addToTail(5);
list.addToTail(6);
list.addToTail(7);

module.exports = LinkedList;
