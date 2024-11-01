// Rotate an array by k positions:

// Question: Given an array, rotate the array
// to the right by k positions, where k is non-negative.

// Example:

// Input: [1, 2, 3, 4, 5] and k = 2
// Output: [4, 5, 1, 2, 3]

function rotateArrayByK(array, k) {
  k = k % n; // To handle cases where k is greater than array length

  let last_element_k = array.splice(0, k + 1);

  //   console.log(last_element_k);
  array.push(...last_element_k);
  return array;
}

// console.log(rotateArrayByK([1, 2, 3, 4, 5], 2));

function rotateArrayByKOptimize(array, k) {
  let n = array.length;
  k = k % n; // To handle cases where k is larger than the array length
  rotateArray(array, 0, n - 1);
  rotateArray(array, 0, k - 1);
  rotateArray(array, k, n - 1);
  return array;
}

function rotateArray(array, left, right) {
  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];

    left++;
    right--;
  }
}
console.log(rotateArrayByKOptimize([1, 2, 3, 4, 5], 2));
