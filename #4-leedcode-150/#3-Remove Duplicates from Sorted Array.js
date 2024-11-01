// Given an integer array nums sorted in non-decreasing order, remove the duplicates
//  in-place such that each unique element appears only once. The relative order of the elements
//  should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0; // Handle empty array case

  let k = 1; // Start with the first unique element

  for (let i = 1; i < nums.length; i++) {
    // If the current element is different from the last unique element
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]; // Update the next position with the unique element
      k++; // Increment the count of unique elements
    }
  }

  return k; // Return the count of unique elements
};

// Testing the function
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
