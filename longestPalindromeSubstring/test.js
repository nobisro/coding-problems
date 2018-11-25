const assert = require("assert");

describe("Basic Mocha String Test", () => {
  it("should return first character of the string", () => {
    assert.equal("Hello".charAt(0), "H");
  });
  it("should return number of characters in a string", () => {
    assert.equal("hello".length, 5);
  });
});
