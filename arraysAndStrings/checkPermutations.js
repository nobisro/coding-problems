/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.

Hints: 
#7
Of course, you could convert the linked lists to integers, compute the sum, and then
convert it back to a new linked list. If you did this in an interview, your interviewer would
likely accept the answer, and then see if you could do this without converting it to a
number and back. 

#84
There is one solution that is 0 (N log N) time. Another solution uses some space, but
isO(N) time.

#722
Consider memoization to optimize the runtime. Think carefully about what exactly you
cache. What is the runtime? The runtime is closely related to the max size of the table.

#737
You could also try using XOR.
*/

function checkPermutations(string1, string2) {
  //'abcd', 'cabd => true

  //return boolean (is or is not a permutation of the string)
  //put both strings into objects
  //compare each key of string1 in string2
  //compare lengths

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < string1.length; i++) {
    let char = string1[i];
    if (obj1[char]) {
      obj1[char] += 1;
    } else {
      obj1[char] = 1;
    }
  }

  for (let j = 0; j < string2.length; j++) {
    let char = string2[j];
    if (obj2[char]) {
      obj2[char] += 1;
    } else {
      obj2[char] = 1;
    }
  }

  for (let key in obj1) {
    if (!obj2[key] || obj2[key] !== obj1[key]) {
      return false;
    }
  }

  return string1.length === string2.length;
}

console.log(checkPermutations("abcd", "cadb"));
console.log(checkPermutations("abcd", "caab"));
