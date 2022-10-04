// Instructions
/* 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(doubleChar("String")); // =>

export function doubleChar(str: string): string {
  let newStr: string = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i].repeat(2);
  }
  return newStr;
}
