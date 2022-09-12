// Instructions
/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(xo('xXoo')); // =>

export function xo(str: string) {
  // pseudo
    // make a variable of number of x and one of o and compare them
  let numOfX: number = 0
  let numOfO: number = 0
  str.split('').forEach(el =>{
    switch (el.toLowerCase()) {
      case 'x':
        numOfX++
        break;

      case 'o':
        numOfO++
        break;
    
      default:
        break;
    }
  })

  return numOfO == numOfX
}
