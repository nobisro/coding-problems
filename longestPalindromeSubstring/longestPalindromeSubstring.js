/**
 *
 *                          Overview
 *
 * This solution loops through each character within the input string, each time adding the character to a palindromes array (because each individual character is technically still a palindrome), as well as to an array of subStrings. Then I loop again starting at the beginning of input, all the way up to one less than the initial iterator, at each step updating the values within subString to include the new character. A simple isPalindrome function checks each element of subString, and if it is a palindrome, adds it to the palindromes array. I then sort the palindromes array and return the longest element
 *
 */

const longestPalindrome = s => {
  if (!s.length) {
    return "";
  } else if (s.length === 1) {
    return s;
  }

  function isPalindrome(string) {
    let reverse = string
      .split("")
      .reverse()
      .join("");
    return string === reverse;
  }

  const subStrings = [];
  const palindromes = [];

  let len = s.length;

  for (let i = 0; i < len; i++) {
    if (subStrings[i] === undefined) {
      subStrings[i] = s[i];
      palindromes.push(s[i]);
    }
    for (let j = 0; j < i; j++) {
      subStrings[j] += s[i];
      if (isPalindrome(subStrings[j])) {
        palindromes.push(subStrings[j]);
      }
    }
  }

  //NOTE: Need to be careful implemented native sort method due to inconsistent implementation across different browsers.
  //   console.log(palindromes);
  return palindromes.sort((a, b) => b.length - a.length)[0];
};

console.log(longestPalindrome("abcdefghijklmnoprstuvwxyzracecar"));
/**
 *
 * This solution takes O(n^2) time, and a test run in google chrome with an input string of length 999 took over 18 seconds to compute.
 *
 */

module.exports = longestPalindrome;
