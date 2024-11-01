// Count and Print All the Permutations of a String
// Problem Statement: Generate all permutations of a given string.

// Example:

// Input: "abc"
// Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
// Explanation: The output contains all possible arrangements of the characters in the string.

function permute(str) {
  const result = [];

  function permuteHelper(s, left, right) {
    // Base case: If the left index equals the right index, we have a complete permutation
    if (left === right) {
      result.push(s);
    } else {
      for (let i = left; i <= right; i++) {
        // Swap characters at indices left and i
        s = swap(s, left, i);

        // Recurse for the next position
        permuteHelper(s, left + 1, right);

        // Backtrack by swapping back
        s = swap(s, left, i);
      }
    }
  }

  // Helper function to swap characters at two indices in a string
  function swap(str, i, j) {
    let charArray = str.split("");
    [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    return charArray.join("");
  }

  // Initial call to permuteHelper
  permuteHelper(str, 0, str.length - 1);
  return result;
}

// Test example
console.log(permute("abc")); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
