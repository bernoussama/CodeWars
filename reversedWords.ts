// Instructions
/* 
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
 */

// /* Prep */

// Parameters: str: string

// Returns: string

// Examples:
console.log(reverseWords("hello world")); // => "world hello"

export function reverseWords(str: string): string {
  return str.split(' ').reverse().join(' ')
  }
