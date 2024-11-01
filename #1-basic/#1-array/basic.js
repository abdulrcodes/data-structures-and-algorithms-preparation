// Arrays in Javascript

// Decalaration
let person = {
  name: "Piyush",
  age: 25,
};

let arr = ["apple", "banana", "cherry", person];

console.log(arr.length); // know the length of an array

// # Add and Remove Elements

// Add to End of the Array
arr.push("orange");

// Remove From End of the Array
arr.pop();
arr.pop();

// Add to Top of the Array
arr.unshift("orange");

// Remove From Top of the Array
arr.shift();

// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);

  i++;
}

// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
  return item + 5;
});

// filter in javascript
const filterItems = numbers.filter((item, index, array) => {
  return item > 3;
});
console.log("Filter Items", filterItems);

// reduce in javascript
const reduce = numbers.reduce((prev, item, index, array) => {
  return prev + item;
}, 2);

console.log("Reduce fun", reduce);

// some in javascript
const some = numbers.some((item, index, array) => {
  return item > 0;
});

console.log("Some", some);

// every in javascript
numbers.every((item, index, array) => {
  return item < 10;
});

// find in javascript
numbers.find((item, index, array) => {
  return item > 3;
});

// findIndex
const index = [1, 2, 3].findIndex((item) => item === 2);
// console.log(index);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator

// Rest Operator
function sum(...numbers) {
  return numbers;
}
// spred

// console.log(sum(...nums, ...nums2, 5, "hello"));

// # More Array Methods

// concat
nums.concat(nums2, arr);

// Slice
arr.slice(-2);

// Splice
arr.splice(1, 2, "orange");

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(2, 2);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2);
// console.log(flattenedArray);

// reverse
nums.reverse();
// console.log(nums);

// sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
console.log(unsorted);
