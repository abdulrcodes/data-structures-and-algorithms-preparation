// Reverse an array:

// Question: Reverse the order of elements in an array.

// Example:

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

function reverseArray(array) {
  let n = array.length;

  // Loop through half the array and swap elements
  for (let i = 0; i < Math.floor(n / 2); i++) {
    // Swap elements at i and n - i - 1
    [array[i], array[n - i - 1]] = [array[n - i - 1], array[i]];
  }

  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]
