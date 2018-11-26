const chai = require("chai");
const assert = chai.assert;
const lcs = require("./longestCommonSubsequence");

describe("the basic edge cases", () => {
  it("should return empty string if first input is empty", () => {
    assert.equal(lcs("", "waffles"), "");
  });
  it("should return empty string if second input is empty", () => {
    assert.equal(lcs("pancakes", ""), "");
  });
  it("should return empty string if no common substrings", () => {
    assert.equal(lcs("abc", "xyz"), "");
  });
});

describe("the functionality", () => {
  it("should return longest common substring btwn two strings", () => {
    assert.equal(lcs("abcbdab", "bdcaba"), "");
  });
});
