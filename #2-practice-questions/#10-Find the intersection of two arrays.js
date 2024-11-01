// Find the intersection of two arrays:

// Question: Find the intersection of two arrays.
// An intersection is the common elements that appear in both arrays.

// Example:

// Input: [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7]
// Output: [3, 4, 5]

function intersection(array1, array2) {
  let unique_array2 = new Set(array2);
  let intersection = [];

  for (let i = 0; i < array1.length; i++) {
    if (unique_array2.has(array1[i])) {
      intersection.push(array1[i]);
    }
  }
  return intersection;
}

// console.log(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

function intersectionOptimize(array1, array2) {
  // Sort both arrays
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  let intersection = [];
  let i = 0;
  let j = 0;

  // Use two pointers to find the intersection
  while (i < array1.length && j < array2.length) {
    if (array1[i] === array2[j]) {
      // If elements are equal, add to the intersection
      intersection.push(array1[i]);
      i++;
      j++;
    } else if (array1[i] < array2[j]) {
      // Move pointer i forward if array1's element is smaller
      i++;
    } else {
      // Move pointer j forward if array2's element is smaller
      j++;
    }
  }

  return intersection;
}

console.log(intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
// Output: [3, 4, 5]
