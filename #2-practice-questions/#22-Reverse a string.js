// Reverse a string
// Explanation: Reverse the order of characters in a given string.
// Input: "hello"
// Output: "olleh"
// Explanation: The characters are reversed.

function reversedStrt(str) {
  if (str.length == 0) return -1;
  return str.split("").reverse().join("");
}

// console.log(reversedStrt("hello"));

function reversedStrOptimize(str) {
  let str1 = str.split("");
  let left = 0;
  let right = str.length;

  while (left < right) {
    [str1[left], str1[right]] = [str1[right], str1[left]];
    left++; // Move the left pointer to the right
    right--; // Move the right pointer to the left
  }

  return str1.join("");
}

console.log(reversedStrOptimize("hello"));
