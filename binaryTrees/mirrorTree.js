const makeTrees = require("./makeTrees");
const tree = makeTrees();
/*
 mirror()
Change a tree so that the roles of the left and right pointers are swapped at every node.
 So the tree... 
       4 
      / \ 
     2   5 
    / \ 
   1   3

 is changed to... 
       4 
      / \ 
     5   2 
        / \ 
       3   1

The solution is short, but very recursive. As it happens, this can be accomplished without changing the root node pointer, so the return-the-new-root construct is not necessary. Alternately, if you do not want to change the tree nodes, you may construct and return a new mirror tree based on the original tree.
*/

const mirror = root => {
  if (root === null || root === undefined) {
    return;
  } else {
    swapChildren(root);
    mirror(root.left);
    mirror(root.right);
  }
};

const swapChildren = parent => {
  let temp = parent.left;
  parent.left = parent.right;
  parent.right = temp;
};

console.log("original tree:", tree);
mirror(tree);
console.log("mirrored tree:", tree);
