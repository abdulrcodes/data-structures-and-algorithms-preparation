// Check if two strings are anagrams of each other
// Explanation: Two strings are anagrams if they contain the same characters in the same frequency but in a different order.
// Input: "listen", "silent"
// Output: true
// Explanation: Both strings have the same characters with the same frequency.

function anagrams(str1, str2) {
  if (str1.length != str2.length) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(anagrams("listen", "silent"));

function anagramsOptimize(str1, str2) {
  let frequencyChar1 = {};
  let frequencyChar2 = {};
  for (let i = 0; i < str1.length; i++) {
    frequencyChar1[str1[i]] = (frequencyChar1[str1[i]] || 0) + 1;
    frequencyChar2[str2[i]] = (frequencyChar2[str2[i]] || 0) + 1;
  }

  for (const key in frequencyChar1) {
    if (frequencyChar1[key] !== frequencyChar2[key]) {
      return false; // Frequencies do not match
    }
  }

  return true;
}

// Example usage
console.log(anagramsOptimize("listen", "silent")); // Output: true
console.log(anagramsOptimize("listen", "sileno")); // Output: false
console.log(anagramsOptimize("triangle", "integral")); // Output: true
console.log(anagramsOptimize("apple", "pale")); // Output: false
