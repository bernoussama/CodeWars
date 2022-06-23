// Instructions
/* 
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

 */

// /* Prep */

// Parameters: test, original :string

// Returns: boolean if parameters are anagrams

// Examples:
console.log(isAnagram("foefet", "toffee")); // => true

function isAnagram(test, original) {
  // Pseudo:
  test = test.toLowerCase().split("").sort().join("");
  original = original.toLowerCase().split("").sort().join("");
  console.log(test, original);
  return test === original;
}
