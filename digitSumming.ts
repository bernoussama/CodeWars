// Instructions
/* 
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(sumDigits(10)); // =>1
console.log(sumDigits(99)); // =>18
console.log(sumDigits(-32)); // =>5

export function sumDigits(n: number): number {
  let sum: number = 0;
  // Pseudo:
  //get the absolute value of n
  n = absoluteVal(n);
  n.toString()
    .split("")
    .forEach((el) => {
      sum += Number(el);
    });

  return sum;
}
export function absoluteVal(num: number): number {
  if (num < 0) {
    return num * -1;
  } else return num;
}
