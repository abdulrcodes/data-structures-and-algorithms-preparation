// Sort an Array of 0s, 1s, and 2s
// Problem Explanation: You are given an array consisting only of 0s, 1s,
//  and 2s. Your task is to sort this array without using any sorting algorithm.
//   The goal is to solve this problem with constant space complexity and linear time complexity.

// Example:

// Input: [2, 0, 2, 1, 1, 0]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: The array is sorted in a single pass (linear time).

function sort0s1s2sBruteForce(array) {
  let count0 = 0,
    count1 = 0,
    count2 = 0;

  // Count the occurrences of 0s, 1s, and 2s
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) count0++;
    else if (array[i] === 1) count1++;
    else count2++;
  }

  // Fill the array based on the counts
  let index = 0;
  while (count0 > 0) {
    array[index++] = 0;
    count0--;
  }
  while (count1 > 0) {
    array[index++] = 1;
    count1--;
  }
  while (count2 > 0) {
    array[index++] = 2;
    count2--;
  }

  return array;
}

console.log(sort0s1s2sBruteForce([2, 0, 2, 1, 1, 0]));
