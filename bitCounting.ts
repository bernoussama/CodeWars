// Instructions
/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

 */

// /* Prep */

// Parameters: integer: number

// Returns: numOfOnes: number (number of ones in the binary of the integer)

// Examples:
console.log(countBits(1234)); // => 5
let n = 1234;
console.log(n.toString(2));

export function countBits(n: number): number {
  let numOfOnes: number = 0;
  let arr: number[] = [];
  let s: string = String(n);
  // Pseudo
  // loop through series of division by 2 for each  quotient of the division and get the remainder
  while (n > 0) {
    let tempArr: number[] = getQuotientnRemainder(n, 2);
    // pushing the remainders to an array
    arr.push(Math.round(tempArr[1]));
    n = tempArr[0];
  }
  // get the count of ones inside that array
  numOfOnes = arr.filter((e) => {
    return e == 1;
  }).length;
  return numOfOnes;
}

export function getQuotientnRemainder(num: number, quotient: number): number[] {
  return [(num - (num % quotient)) / quotient, num % quotient];
}
