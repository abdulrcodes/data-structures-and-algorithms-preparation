// 10. Find the maximum product subarray.

function maxProductSubarrayBruteForce(nums) {
  let maxProduct = nums[0]; // Initialize max product with the first element

  // Loop through each subarray
  for (let i = 0; i < nums.length; i++) {
    let product = 1; // Initialize product for this subarray
    for (let j = i; j < nums.length; j++) {
      product *= nums[j]; // Calculate product of the subarray nums[i...j]
      maxProduct = Math.max(maxProduct, product); // Update max product if needed
    }
  }

  return maxProduct; // Return the maximum product found
}

// Example usage:
console.log(maxProductSubarrayBruteForce([2, 3, -2, 4])); // Output: 6
console.log(maxProductSubarrayBruteForce([-2, 0, -1])); // Output: 0
console.log(maxProductSubarrayBruteForce([-2, 3, 0, -2, 4])); // Output: 4
