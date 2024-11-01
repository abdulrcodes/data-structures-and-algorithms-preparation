// Reverse words in a given string
// Explanation: Reverse the order of words in a given string while maintaining the word order.
// Input: "Hello World"
// Output: "World Hello"
// Explanation: The words "Hello" and "World" are reversed in order.

function reversedWords(str) {
  let words = str.split(" ");
  let reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    let reversedWord = words[i].split("").reverse().join("");
    reversedWords.push(reversedWord);
  }

  return reversedWords;
}

console.log(reversedWords("Hello World"));
