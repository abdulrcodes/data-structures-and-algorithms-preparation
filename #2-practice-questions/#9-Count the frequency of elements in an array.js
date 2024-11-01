// Count the frequency of elements in an array:

// Question: Given an array of integers,
// count the frequency of each unique element in the array.

// Example:

// Input: [1, 2, 2, 3, 1, 4, 2]
// Output: {1: 2, 2: 3, 3: 1, 4: 1} (or any equivalent representation)

function frequency(array) {
  let frequency = {};

  for (let i = 0; i < array.length; i++) {
    if (frequency[array[i]]) {
      frequency[array[i]] += 1;
    } else {
      frequency[array[i]] = 1;
    }
  }

  return frequency;
}

console.log(frequency([1, 2, 2, 3, 1, 4, 2]));
