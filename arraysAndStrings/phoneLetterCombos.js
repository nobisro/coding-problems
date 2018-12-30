/**
 * @param {string} digits
 * @return {string[]}

in: a phone number
out: array of all possible letter combos
complexity:
edge: duplicates? 0 and 1

23 => [ad, ae, af, bd, be, bf, cd, ce, cf]

store values in object/array
initialize output array;

recursive function takes in number, partial
    
    if partial is undefined, partial = ''
    
    if number length is 0, push partial into output
    
    for each letter in the array ('m', 'n', o')
    store current number in memory
    call recursive function with number (sliced to omit first num) and arr[firstNumber][i]


 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  let phonepad = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"]
  ];

  const output = [];

  (function recurse(number, partial) {
    if (partial === undefined) {
      partial = "";
    }
    number += "";

    if (number.length === 0) {
      output.push(partial);
    } else if (number[0].length > 0) {
      let n = parseInt(number[0]);

      for (let i = 0; i < phonepad[n].length; i++) {
        let p = phonepad[n][i];
        let newNumber = number
          .split("")
          .splice(1)
          .join("");
        recurse(newNumber, "" + partial + p);
      }
    }
  })(digits);

  return output;
};
