// Instructions
/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */

// /* Prep */

// Parameters: str

// Returns: bool

// Examples:
console.log(isIsogram("lol")); // => false
console.log(isIsogram("nice world!")); // => true

function isIsogram(str) {
  //...
  let isogram = true;

  str.toLowerCase().split("").forEach((el, i, arr) => {
    if (arr.lastIndexOf(el) != arr.indexOf(el)) {
      isogram = false
    } else {
      return;
    }
  })
  return isogram
}
