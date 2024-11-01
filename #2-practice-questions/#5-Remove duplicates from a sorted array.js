// Remove duplicates from a sorted array:

// Input: [1, 1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function removeDublicates(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == array[i + 1]) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

// console.log(removeDublicates([1, 1, 2, 2, 3, 4, 4, 5]));

function removeDublicatesOptimize(array) {
  if (array.length === 0) return array;

  let uniqueIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[uniqueIndex]) {
      uniqueIndex++;
      array[uniqueIndex] = array[i];
    }
  }
  return array.slice(0, uniqueIndex + 1);
}

console.log(removeDublicatesOptimize([1, 1, 2, 2, 3, 4, 4, 5]));
