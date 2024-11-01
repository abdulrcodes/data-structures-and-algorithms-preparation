// Remove all duplicates from a string
// Explanation: Remove all duplicate characters from the string and retain only the first occurrence of each character.
// Input: "aabbcc"
// Output: "abc"
// Explanation: All duplicate characters are removed, keeping only the first occurrence.

function removedDublicates(str) {
  let uniqueStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      uniqueStr += str[i];
    }
  }

  return uniqueStr;
}

console.log(removedDublicates("aabbcc"));
