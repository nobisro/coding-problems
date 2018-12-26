/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
*/

function isUnique(string) {
  if (string.length === 1) {
    return true;
  }
  let copy = string.slice();
  for (let i = 0; i < copy.length; i++) {
    for (let j = i + 1; j < copy.length; j++) {
      if (copy[i] === copy[j]) {
        console.log(copy[i], copy[j]);
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique(""));
console.log(isUnique("a"));
console.log(isUnique("abcdefghijklmnopqrstuvwxyz"));
