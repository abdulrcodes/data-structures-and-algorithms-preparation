// Find the second largest element in an array:

// Input: [12, 35, 1, 10, 34, 1]
// Output: 34

function secondLargestElement(array) {
  let uniqueElement = Array.from(new Set(array));
  uniqueElement.sort((a, b) => b - a);

  return uniqueElement[1];
}

// console.log(secondLargestElement([12, 35, 35, 1, 10, 34, 1, 34]));

function secondLargestElementOptimize(array) {
  let largest = -1;
  let slargest = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      slargest = largest;
      largest = array[i];
    } else if (array[i] != largest && array[i] > slargest) {
      slargest = array[i];
    }
  }
  return slargest;
}

console.log(secondLargestElementOptimize([12, 35, 35, 1, 10, 34, 1, 34]));
