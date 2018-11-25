const chai = require("chai");
const assert = chai.assert;
const longestPalindromSubstring = require("./longestPalindromeSubstring");

describe("Basic Mocha String Test", () => {
  it("should return first character of the string", () => {
    assert.equal("Hello".charAt(0), "H");
  });
  it("should return number of characters in a string", () => {
    assert.equal("hello".length, 5);
  });
});

describe("longestPalindromSubstring function edge cases", () => {
  it("should return an empty string when no input", () => {
    assert.equal(longestPalindromSubstring(""), "");
  });
  it("should return input when input length is one", () => {
    assert.equal(longestPalindromSubstring("a"), "a");
  });
});

describe("should return longest palindrome substring", () => {
  it("should return the longest palindrome", () => {
    assert.equal(longestPalindromSubstring("aa"), "aa");
  });
  it("should return longest palindrome when multiple given", () => {
    assert.equal(longestPalindromSubstring("bottom"), "otto");
  });
  it("should return longest palindrome for really long string", () => {
    let input =
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzracecar";
    assert.equal(longestPalindromSubstring(input), "racecar");
  });
});
