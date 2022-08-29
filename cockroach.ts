// Instructions
/* 
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

 */

// /* Prep */

// Parameters: s: number

// Returns: cmS: number

// Examples:
console.log(cockroachSpeed(1.08)); // => 30

export function cockroachSpeed(s: number): number {
  // pseudo
  // 1km/h => 1*1000*100/60/60 = 27.78 cm/s

  return Math.floor(s * 27.78);
}
