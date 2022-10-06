// Instructions
/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.


 */

// /* Prep */

// Parameters: s: string

// Returns: mumble: string

// Examples:
console.log(accum("cwAt")); // => "A-Bb-Ccc-Dddd"

function accum(s: string): string {
  // Pseudo:
  // map splitted string
  // loop through charachters and for each character return it n(its index) times with first letter uppercased
  return s
    .split("")
    .map((el, i, arr) => {
      let str: string = "";
      for (let index = 0; index <= i; index++) {
        if ((index = 0)) {
          str += el.toUpperCase();
          return;
        } else {
          str += el;
          return;
        }
        console.log(str);
      }
      return str;
    })
    .join("-");
}
