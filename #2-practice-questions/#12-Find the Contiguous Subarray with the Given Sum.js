//  Find the Contiguous Subarray with the Given Sum
// Problem Explanation: Given an unsorted array of non-negative integers and
//  a sum, find the subarray that adds up to the given sum. Assume that the array contains at least one solution.

// Example:

// Input: [1, 4, 20, 3, 10, 5], sum = 33
// Output: [20, 3, 10]
// Explanation: The subarray [20, 3, 10] adds up to the sum 33

function subarraySum(array, sum) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < array.length; i++) {
    let currentSum = 0;
    for (let j = i; j < array.length; j++) {
      currentSum += array[j];
      if (currentSum == sum) {
        start = i;
        end = j;
      }
    }
  }

  return array.splice(start, end + 1);
}

// console.log(subarraySum([1, 4, 20, 3, 10, 5], 33));
// ([5, 2, 3, 7, 1, 6, 8, 4], 15) Expected output: [7, 1, 6, 1]

function subarraySumOptimize(array, sum) {
  let start = 0;
  let currentSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];

    // If currentSum is bigger than targetSum, reduce it from the start
    while (currentSum > sum) {
      currentSum = currentSum - array[start];
      start++;
    }

    // If we find the exact sum, return the subarray
    if (currentSum === sum) {
      return array.slice(start, i + 1);
    }
  }
  return [];
}

console.log(subarraySumOptimize([1, 4, 20, 3, 10, 5], 33));
