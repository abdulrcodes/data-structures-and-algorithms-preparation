// Implement a Function to Perform String Compression
// Problem Statement: Given a string, compress it using counts of repeated characters.

// Example:

// Input: "aabcccccaaa"
// Output: "a2b1c5a3"
// Explanation: In the input string, 'a' appears 2 times, 'b'
// appears once, 'c' appears 5 times, and 'a' appears 3 times.

function compressString(s) {
  let result = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    // Check if the next character is the same as the current one
    if (i < s.length - 1 && s[i] === s[i + 1]) {
      count++; // Increase the count
    } else {
      // Append the character and its count to the result
      result += s[i] + count;
      count = 1; // Reset count for the next character
    }
  }

  return result;
}

// Test example
console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
