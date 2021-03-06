const makeTrees = require("./makeTrees");
const tree = makeTrees();

/*
Given a binary search tree (aka an "ordered binary tree"), iterate over the nodes to print them out in increasing order. So the tree...
       4 
      / \ 
     2   5 
    / \ 
   1   3

Produces the output "1 2 3 4 5". This is known as an "inorder" traversal of the tree.

Hint: For each node, the strategy is: recur left, print the node data, recur right.

*/

const printOrderedBST = root => {
  if (root === null || root.val === undefined) {
    return;
  } else {
    printOrderedBST(root.left);
    console.log(root.val);
    printOrderedBST(root.right);
    return;
  }
};

printOrderedBST(tree);
