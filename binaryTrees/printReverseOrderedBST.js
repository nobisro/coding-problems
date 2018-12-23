const makeTrees = require("./makeTrees");
const tree = makeTrees();

const printReverseOrderedBST = root => {
  if (root === null || root.val === undefined) {
    return;
  } else {
    printReverseOrderedBST(root.right);
    console.log(root.val);
    printReverseOrderedBST(root.left);
    return;
  }
};

console.log("~~~~~~~~~~~~~~");
printReverseOrderedBST(tree);
