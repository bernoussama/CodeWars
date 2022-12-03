// Instructions
/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
 */

// /* Prep */

// Parameters:

// Returns:


export function duplicateEncode(word: string) {
  // initializing empty object to bind chars with their count
  let count = {};
  // lowercase the word and split it to array of characters
  let stringArr = word.toLowerCase().split("");
  // iterating over the chars array
  stringArr.forEach((el) => {
    // if char already in object add 1 to its count
    if (el in count) {
      count[el] += 1;
      // else make its count 1
    } else {
      count[el] = 1;
    }
  });
  let brackets = stringArr
    .map((el) => {
      if (count[el] == 1) {
        return "(";
      } else if (count[el] > 1) {
        return ")";
      }
    })
    .join("");
  return brackets;
}

// Examples:
console.log(duplicateEncode("din")); // =>"((("

