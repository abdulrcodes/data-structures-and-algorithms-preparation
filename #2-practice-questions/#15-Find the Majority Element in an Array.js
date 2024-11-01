// Find the Majority Element in an Array
// Problem Explanation: The majority element in an array of size n
// is the element that appears more than n/2 times. You need to find this element, assuming that the array has a majority element.

// Example:

// Input: [3, 3, 4, 2, 3, 3, 3]
// Output: 3
// Explanation: The element 3 appears 5 times, which is more than half of
// the array's length (n = 7, majority = 7/2 = 3.5). Therefore, 3 is the majority element.

function majorityElement0(array) {
  let haif = Math.floor(array.length / 2);

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count >= haif) {
      return array[i];
    }
  }
}

// console.log(majorityElement([3, 3, 4, 2, 3, 3, 3]));

function majorityElement(array) {
  let count = 0;
  let candidate;

  // Find the candidate for majority element
  for (let i = 0; i < array.length; i++) {
    if (count === 0) {
      candidate = array[i];
    }
    count += array[i] === candidate ? 1 : -1;
  }

  // Verify that the candidate is indeed the majority element
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === candidate) {
      count++;
    }
  }

  // Check if the count exceeds half the array length
  if (count > Math.floor(array.length / 2)) {
    return candidate;
  }

  return null; // Return null if no majority element found
}

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1, 2, 3])); // Output: null
