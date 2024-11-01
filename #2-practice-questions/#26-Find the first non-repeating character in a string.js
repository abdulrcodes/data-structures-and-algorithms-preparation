// Find the first non-repeating character in a string
// Explanation: Find the first character in the string that does not repeat.
// Input: "swiss"
// Output: "w"
// Explanation: "w" is the first character that doesn't repeat.

function firstNonRepating(str) {
  if (str.length == 0) return "";

  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] == 1) {
      return str[i];
    }
  }
}

console.log(firstNonRepating("swiss"));
