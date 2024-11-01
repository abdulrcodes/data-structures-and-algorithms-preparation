// Merge Two Sorted Arrays
// Problem Explanation: Given two sorted arrays, merge them into one sorted array without using any extra space.

// Example:

// Input: array1 = [1, 3, 5], array2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
// Explanation: The two arrays are merged and sorted into a single array.

function margeSortedArray(array1, array2) {
  let mergeArray = [...array1, ...array2];

  let sortedArray = mergeArray.sort((a, b) => a - b);
  return sortedArray;
}

console.log(margeSortedArray([1, 3, 5], [2, 4, 6]));
