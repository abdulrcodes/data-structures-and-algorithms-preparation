// Check if one string is a rotation of another string
// Explanation: One string is a rotation of another if you can shift its characters circularly to form the other string.
// Input: "waterbottle", "erbottlewat"
// Output: true
// Explanation: "erbottlewat" is a rotation of "waterbottle".

function rotation(str1, str2) {
  if (str1.length !== str2.length) return false;

  // Concatenate str1 to itself and check if str2 is a substring of it
  return (str1 + str1).includes(str2);
}

console.log(rotation("waterbottle", "erbottlewat"));
