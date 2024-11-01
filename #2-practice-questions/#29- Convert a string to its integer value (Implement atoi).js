// Convert a string to its integer value (Implement atoi)
// Explanation: Implement the atoi function which converts a string representation of a number into an integer.
// Input: "123"
// Output: 123
// Explanation: The string is converted to the integer 123.

function atoi(str) {
  // Step 1: Trim any leading or trailing whitespace
  str = str.trim();

  // Step 2: Handle empty string
  if (str.length === 0) return 0;

  // Step 3: Handle sign of the number
  let sign = 1;
  let i = 0;
  if (str[i] === "-") {
    sign = -1;
    i++;
  } else if (str[i] === "+") {
    i++;
  }

  // Step 4: Convert characters to integer
  let num = 0;
  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    num = num * 10 + (str[i].charCodeAt(0) - "0".charCodeAt(0));
    i++;
  }

  // Step 5: Apply the sign and return the result
  return num * sign;
}

console.log(atoi("123")); // Output: 123
console.log(atoi("-123")); // Output: -123
console.log(atoi("   456")); // Output: 456
console.log(atoi("+789")); // Output: 789
console.log(atoi("42 with text")); // Output: 42
