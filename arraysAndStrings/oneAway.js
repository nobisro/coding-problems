/*
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, pIe -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false
Hints: #23, #97, #130
*/

function isOneAway(original, edited) {
  const origObj = {};
  const editObj = {};
  let differences = 0;

  for (let i = 0; i < original.length; i++) {
    let char = original[i];
    if (origObj[char]) {
      origObj[char] += 1;
    } else {
      origObj[char] = 1;
    }
  }

  for (let j = 0; j < edited.length; j++) {
    let char = edited[j];
    if (editObj[char]) {
      editObj[char] += 1;
    } else {
      editObj[char] = 1;
    }
  }

  for (let key in origObj) {
    if (!editObj[key] || origObj[key] !== editObj[key]) {
      differences += 1;
    }
  }

  return differences > 1 ? false : true;
}

console.log(isOneAway("pale", "bake"));
console.log(isOneAway("pale", "ple"));
console.log(isOneAway("pale", "bale"));
