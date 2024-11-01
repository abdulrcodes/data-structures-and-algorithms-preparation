// Check if a string is a palindrome
// Explanation: A palindrome is a string that reads the same forwards and backwards.
// Input: "madam"
// Output: true
// Explanation: The string reads the same in both directions.

function palindrome(str) {
  return str === str.split("").reverse().join("");
}

// console.log(palindrome("madam"));

function palindromeOptimize(str) {
  let left = 0;
  let right = str.length;
  while (left < right) {
    if (str[left] !== str[right]) {
      // Check if characters are not the same
      return false; // If they are not, it's not a palindrome
    }
    left++; // Move towards the center from the left
    right--; // Move towards the center from the right
  }
  return true; // If all characters match, it's a palindrome
}

console.log(palindromeOptimize("madam"));
