/*
Given a binary tree, compute its "maxDepth" -- the number of nodes along the longest path from the root node down to the farthest leaf node. The maxDepth of the empty tree is 0, the maxDepth of the tree on the first page is 3.
*/

const makeTrees = require("./makeTrees");
const tree = makeTrees();

const maxDepth = tree => {
  let max = 0;

  (function recurse(tree, depth = 1) {
    if (depth > max) {
      max = depth;
    }

    if (tree === null) {
      console.log("dead end");
    }
    if (tree.left) {
      recurse(tree.left, depth + 1);
    }
    if (tree.right) {
      recurse(tree.right, depth + 1);
    }
  })(tree);

  return max;
};

console.log("maxDepth:", maxDepth(tree));
