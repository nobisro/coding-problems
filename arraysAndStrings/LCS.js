/*
Longest Common Subsequence
*/

function longestCommonSubsequence(set1, set2) {
  let lcsMatrix = new Array(set1.length + 1).fill(null).map(() => {
    return new Array(set2.length + 1).fill(null);
  });

  // Set all values in first row to 0
  for (let i = 0; i < set1.length + 1; i++) {
    lcsMatrix[i][0] = 0;
  }

  // Set all values in first column to 0
  for (let j = 0; j < set2.length + 1; j++) {
    lcsMatrix[0][j] = 0;
  }

  for (let rowIndex = 1; rowIndex < set1.length; rowIndex++) {
    for (let colIndex = 1; colIndex < set2.length; colIndex++) {
      if (set1[rowIndex - 1] === set2[colIndex - 1]) {
        lcsMatrix[rowIndex][colIndex] =
          lcsMatrix[rowIndex - 1][colIndex - 1] + 1;
      } else {
        lcsMatrix[rowIndex][colIndex] = Math.max(
          lcsMatrix[rowIndex][colIndex - 1],
          lcsMatrix[rowIndex - 1][colIndex]
        );
      }
    }
  }

  return lcsMatrix[set1.length - 1][set2.length - 1];
}
