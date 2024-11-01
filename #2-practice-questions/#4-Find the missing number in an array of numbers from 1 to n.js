// Find the missing number in an array of numbers from 1 to n:

// Input: [1, 2, 4, 5] (For n = 5)
// Output: 3

function missingNumber(array) {
  let n = array.length + 1; // Because the array is missing one number
  let totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
  let arraySum = array.reduce((acc, num) => acc + num, 0);

  return totalSum - arraySum;
}

console.log(missingNumber([1, 2, 4, 5]));
