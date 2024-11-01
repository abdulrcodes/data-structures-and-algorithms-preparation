// 9. Find the union of two arrays
// Question Explanation: You are given two arrays, and the task is
//  to find the union of the two arrays. The union of two arrays contains
//  all the distinct elements from both arrays.

// Example:

// Input: array1 = [1, 2, 3, 4], array2 = [3, 4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]
// Explanation: The union of the two arrays contains all unique elements from both arrays.

function unionTowArray(array1, array2) {
  let union = [...array1];
  for (let i = 0; i < array2.length; i++) {
    // Check if array2[i] is already in the union
    if (!union.includes(array2[i])) {
      union.push(array2[i]); // Add if it's not already present
    }
  }

  return union;
}

console.log(unionTowArray([1, 2, 3, 4], [3, 4, 5, 6]));
