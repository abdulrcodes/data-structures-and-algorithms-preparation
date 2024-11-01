// Count the frequency of each character in a string
// Explanation: Count how many times each character appears in the string.
// Input: "hello"
// Output: {h: 1, e: 1, l: 2, o: 1}
// Explanation: Each character's frequency is counted.

function frequency(str) {
  if (str.length == 0) return "";

  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      frequency[str[i]]++;
    } else {
      frequency[str[i]] = 1;
    }
  }

  return frequency;
}

console.log(frequency("hello"));
