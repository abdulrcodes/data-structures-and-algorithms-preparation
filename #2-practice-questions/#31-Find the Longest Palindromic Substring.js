// Find the Longest Palindromic Substring
// Problem Statement: Given a string, find the longest substring that is a palindrome.

// Example:

// Input: "babad"
// Output: "bab" or "aba" (both are correct)
// Explanation: A palindrome reads the same forward and backward.
// In this case, the longest palindromic substring is either "bab" or "aba".

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function longestPalindrome(s) {
  let maxLength = 0;
  let longestPalindrome = "";

  // Loop through all possible substrings
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.slice(i, j + 1);

      // Check if it's a palindrome and if it's the longest one so far
      if (isPalindrome(substring) && substring.length > maxLength) {
        maxLength = substring.length;
        longestPalindrome = substring;
      }
    }
  }

  return longestPalindrome;
}

// Test example
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
