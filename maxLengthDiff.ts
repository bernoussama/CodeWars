// Instructions
/* 
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(); // =>

export const mxdiflg = (a1: string[], a2: string[]): number => {
  // your code
  if (a1 && a2) {
    let a1Lengths = a1.map((el) => el.length);
    let a2Lengths = a2.map((el) => el.length);
    let a3: number[] = [];
    a3.push(Math.abs(Math.max(...a1Lengths) - Math.max(...a2Lengths)));
    a3.push(Math.abs(Math.max(...a2Lengths) - Math.max(...a1Lengths)));
    return Math.max(...a3);
  } else return -1;
};
// favorite solution
// if (a1 || a2) {
//   let a1Lengths = a1.map((el) => el.length);
//   let a2Lengths = a2.map((el) => el.length);
//   let a3: number[] = [];
//   a3.push(Math.abs(Math.max(...a1Lengths) - Math.max(...a2Lengths)));
//   a3.push(Math.abs(Math.max(...a2Lengths) - Math.max(...a1Lengths)));
//   return Math.max(...a3);
// } else return -1;
