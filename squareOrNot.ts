// Instructions
/* 
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.

 */

// /* Prep */

// Parameters: array: number[]

// Returns: array :number[]

// Examples:
console.log(squareOrSquareRoot([4,3,9,7,2,1])); // => [2,9,3,49,4,1]

export function squareOrSquareRoot(array:number[]) : number[] {
  // Pseudo
    // for every number in array check if it has a square root
    return array.map(el=>{
      return Number.isInteger( Math.sqrt(el) ) ? Math.sqrt(el): el**2
    })

}
