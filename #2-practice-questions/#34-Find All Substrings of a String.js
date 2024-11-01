// Find All Substrings of a String
// Problem Statement: Generate all possible substrings of a given string.

// Example:

// Input: "abc"
// Output: ["a", "ab", "abc", "b", "bc", "c"]
// Explanation: All possible substrings of "abc" include each character individually and combinations of them.

function findAllSubstrings(s) {
  const substrings = [];

  // Outer loop fixes the starting point
  for (let i = 0; i < s.length; i++) {
    // Inner loop extends to all possible endpoints from the start point
    for (let j = i + 1; j <= s.length; j++) {
      // Slice out the substring from i to j and add it to the result
      substrings.push(s.slice(i, j));
    }
  }

  return substrings;
}

// Test example
console.log(findAllSubstrings("abc")); // Output: ["a", "ab", "abc", "b", "bc", "c"]
