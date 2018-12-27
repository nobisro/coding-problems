/*
URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith "J 13
Output: "Mr%20John%20Smith"

Hints: 
#53
It's often easiest to modify strings by going from the end of the string to the beginning.

#7
Of course, you could convert the linked lists to integers, compute the sum, and then
convert it back to a new linked list. If you did this in an interview, your interviewer would
likely accept the answer, and then see if you could do this without converting it to a
number and back.

#78
Consider having each node know the minimum of its "substack" (all the elements
beneath it, including itself).
*/

function URLify(string) {
  let split = string.split("");

  for (let i = split.length; i >= 0; i--) {
    if (split[i] === " ") {
      split[i] = "%20";
    }
  }
  return split.join("");
}

console.log(URLify("the car is in the driveway"));
