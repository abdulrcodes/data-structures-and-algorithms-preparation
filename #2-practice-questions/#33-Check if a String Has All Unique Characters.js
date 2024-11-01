// Check if a String Has All Unique Characters
// Problem Statement: Determine if a string has all unique characters.

// Example:

// Input: "abcdef"

// Output: true

// Input: "hello"

// Output: false

// Explanation: The first string has all unique characters, while the second string has duplicates ('l').

function hasUniqueCharacters(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      // Compare the character at index i with the character at index j
      if (s[i] === s[j]) {
        return false; // Duplicate found
      }
    }
  }
  return true; // No duplicates found
}

// Test examples
console.log(hasUniqueCharacters("abcdef")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
