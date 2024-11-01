// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// var majorityElement = function (nums) {
//   let majorityCount = Math.floor(nums.length / 2);

//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;

//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }

//     if (count > majorityCount) {
//       return nums[i];
//     }
//   }
// };

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
// console.log(majorityElement([3, 2, 3])); // Output: 3

var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  // First pass to find the candidate
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([3, 2, 3])); // Output: 3
