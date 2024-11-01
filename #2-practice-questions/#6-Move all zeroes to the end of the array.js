// Move all zeroes to the end of the array:

// Question: Given an array of integers, move all the
// zeros in the array to the end without changing the order of
// the non-zero elements.

// Example:

// Input: [0, 2, 0, 1, 3, 0, 4]
// Output: [2, 1, 3, 4, 0, 0, 0]

function moveZeros(array) {
  if (array.length === 0) return array;
  let non_zero_element_index = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[non_zero_element_index] = array[i];
      non_zero_element_index++;
    }
  }

  // Fill the rest of the array with zeros
  for (let i = non_zero_element_index; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}
console.log(moveZeros([0, 2, 0, 1, 3, 0, 4]));
