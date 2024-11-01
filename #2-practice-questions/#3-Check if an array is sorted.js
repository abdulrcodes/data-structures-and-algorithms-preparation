// Check if an array is sorted:

// Input: [1, 2, 3, 4, 5]

// Output: true

// Input: [3, 2, 1, 4, 5]

// Output: false

function arraySorted(array) {
  if (array.length === 0) return -1;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(arraySorted([3, 2, 1, 4, 5]));
