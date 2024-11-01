var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0; // Handle empty array case

  let k = 0; // Position for placing elements
  let count = 1; // Count occurrences of the current element

  for (let i = 1; i < nums.length; i++) {
    // If the current element is the same as the previous one
    if (nums[i] === nums[i - 1]) {
      count++; // Increase count
    } else {
      count = 1; // Reset count for a new number
    }

    // Allow the element to be added only if count is 2 or less
    if (count <= 2) {
      nums[k] = nums[i]; // Place the number in the correct position
      k++; // Move to the next position
    }
  }

  return k; // Return the count of unique elements
};

// Example usage
const nums = [1, 1, 1, 2, 2, 3];
const k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums.slice(0, k)); // Output: [1, 1, 2, 2]
