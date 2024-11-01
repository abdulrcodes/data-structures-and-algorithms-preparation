// Rearrange array elements alternately (i.e., largest, smallest)
// Question Explanation: You are given a sorted or unsorted array, and
// the task is to rearrange the elements of the array such that the largest element
// is placed first, followed by the smallest element, then the second largest, second smallest, and so on.

// Example:

// Input: [1, 2, 3, 4, 5, 6, 7]
// Output: [7, 1, 6, 2, 5, 3, 4]
// Explanation: The largest element (7) is placed first, then the smallest element (1),
//  followed by the next largest (6), next smallest (2), and so on.

function rearrangeElement(array) {
  let rearrange = [];
  let left = 0;
  let right = array.length - 1;

  array.sort((a, b) => a - b);

  while (left <= right) {
    if (left <= right) {
      rearrange.push(array[right]);
      right--;
    }
    if (left <= right) {
      rearrange.push(array[left]); // Push the smallest element
      left++;
    }
  }
  return rearrange;
}

console.log(rearrangeElement([1, 2, 3, 4, 5, 6, 7]));
