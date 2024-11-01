// 7. Find the longest consecutive subsequence in an array
// Question Explanation: You are given an unsorted array, and
// the task is to find the length of the longest subsequence of consecutive
//  integers. The consecutive elements may appear in any order in the array,
//  but they must form a sequence.

// Example: Input: [100, 4, 200, 1, 3, 2];
// Output: 4;
// Explanation: The longest consecutive subsequence is [1, 2, 3, 4] with a length of 4.

function longestConsecutive(array) {
  if (array.length === 0) return 0;

  array.sort((a, b) => a - b); // Sort the array
  // Array after sorting: [1, 2, 3, 4, 100, 200]
  let longest = 1;
  let currentStreak = 1;

  for (let i = 1; i < array.length; i++) {
    // Skip duplicates
    if (array[i] === array[i - 1]) continue;

    // Check if the current element is consecutive
    if (array[i] === array[i - 1] + 1) {
      currentStreak++; // Increment streak if consecutive
    } else {
      // Update longest and reset streak if not consecutive
      longest = Math.max(longest, currentStreak);
      currentStreak = 1; // Reset streak
    }
  }

  // Return the longest streak after the loop ends
  return Math.max(longest, currentStreak);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([9, 1, 3, 10, 4, 20, 2])); // Output: 4
console.log(longestConsecutive([1, 2, 0, 1])); // Output: 3
