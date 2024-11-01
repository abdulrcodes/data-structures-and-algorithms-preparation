// Find the longest common prefix among an array of strings
// Explanation: Find the longest prefix (starting part) that is common among all strings in the array.
// Input: ["flower", "flow", "flight"]
// Output: "fl"
// Explanation: "fl" is the common prefix in all three strings.

function longestPrefix(strings) {
  if (strings.length == 0) return "";

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    while (!strings[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

console.log(longestPrefix(["flower", "flow", "flight"]));
