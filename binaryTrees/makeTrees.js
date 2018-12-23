const makeTree = () => {
  let root = new Node(10);
  root.left = new Node(5);
  root.right = new Node(15);
  let one = root.left;
  let two = root.right;
  one.left = new Node(3);
  one.right = new Node(7);
  two.left = new Node(12);
  two.right = new Node(20);
  let three = two.right;
  three.left = new Node(18);
  three.right = new Node(22);
  let four = three.right;
  four.right = new Node(30);
  return root;
};

function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = makeTree;
