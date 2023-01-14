// Instructions
/* 
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(alphabetPosition("The sunset sets at twelve o' clock.z")); // =>
function alphabetPosition(text) {
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // Pseudo:
  return text.toLowerCase().split("").filter(el => alphabet.indexOf(el) != -1).map((v, i) => alphabet.indexOf(v) + 1).join(" ")
}
