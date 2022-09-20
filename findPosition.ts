// Instructions
/* 
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
 */

// /* Prep */

// Parameters: alphabet:string

// Returns: string

// Examples:
console.log(position("a")); // =>

export function position(alphabet: string): string {
  // Pseudo
  // make an array to store ordered alphabet
  const theAlphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  console.log(theAlphabet.length);
  // get position of the alphabet from that array
  return `Position of alphabet: ${String(theAlphabet.indexOf(alphabet) + 1)}`;
}
