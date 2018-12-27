/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin-
drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation

is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)
Hints: #106, #121, #134, #136


//put characters into hash table
//count number of chars occuring odd times
//return true if that number is greater than 1
*/

function isPerumutationOfPalindrome(string) {
  const chars = {};
  let oddCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (chars[string[i]]) {
      chars[string[i]] += 1;
    } else {
      chars[string[i]] = 1;
    }
  }

  for (let key in chars) {
    if (chars[key] % 2 !== 0) {
      oddCount += 1;
    }
  }

  return oddCount > 1 ? false : true;
}

console.log(isPerumutationOfPalindrome("racecar"));
console.log(isPerumutationOfPalindrome("arecacr"));
