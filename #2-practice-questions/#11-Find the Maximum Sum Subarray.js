//  Find the Maximum Sum Subarray (Kadane's Algorithm)
// Problem Explanation: Given an array of integers, find the contiguous subarray
//  (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray [4, -1, 2, 1] has the largest sum 6

function maxSubArray(array) {
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    let currentSum = 0;
    for (let j = i; j < array.length; j++) {
      currentSum += array[j];

      if (currentSum > max) {
        max = currentSum;
      }
    }
  }
  return { maxSum: max };
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// (Kadane's Algorithm)
function maxSubArrayOptimize(array) {
  let sum = 0;
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

console.log(maxSubArrayOptimize([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
