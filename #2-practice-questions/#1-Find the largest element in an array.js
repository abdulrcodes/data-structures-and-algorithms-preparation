// Find the largest element in an array:

// Input: [3, 5, 7, 2, 8]
// Output: 8

function largestElement(array) {
  let uniqueElement = Array.from(new Set(array));
  uniqueElement.sort((a, b) => b - a);
  return uniqueElement[0];
}

// console.log(largestElement([3, 5, 7, 2, 8]));

function largestElementOptimize(array) {
  let largest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

console.log(largestElementOptimize([3, 5, 7, 2, 8]));
