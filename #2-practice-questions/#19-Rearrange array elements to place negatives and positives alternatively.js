// 8. Rearrange array elements to place negatives and positives alternatively
// Question Explanation: You are given an array containing both positive and negative
// numbers. The task is to rearrange the array so that positive and negative numbers appear
// alternately. If there are extra positive or negative numbers, they can appear at the end of the array.

// Example: Input: [1, 2, 3, -4, -1, 4];
// Output: [1, -4, 2, -1, 3, 4];

function rearrangePostiveAndNegative(array) {
  let positive = [];
  let negative = [];
  let rearrange = [];

  // Separate positive and negative numbers
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive.push(array[i]);
    } else if (array[i] < 0) {
      negative.push(array[i]);
    }
  }

  let maxLength = Math.max(positive.length, negative.length);

  // Alternate between positive and negative
  for (let i = 0; i < maxLength; i++) {
    if (i < positive.length) {
      rearrange.push(positive[i]); // Add positive number
    }
    if (i < negative.length) {
      rearrange.push(negative[i]); // Add negative number
    }
  }

  return rearrange;
}

console.log(rearrangePostiveAndNegative([1, 2, 3, -4, -1, 4]));
