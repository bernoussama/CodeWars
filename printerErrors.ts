// Instructions
/* 
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
 */

// /* Prep */

// Parameters: s:string

// Returns: string

// Examples:
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // => "8/22"
console.log(printerError("aaabbbbhaijjjm")); // => "0/14"

export function printerError(s: string): string {
  // your code
  // Pseudo
  // for loop incrementing errors var if char not in[a, m]
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const arr: string[] = s.split("");
  let errors: number = 0;
  const max: number = alphabet.indexOf("m");

  for (let i = 0; i < arr.length; i++) {
    const element: string = arr[i];
    if (alphabet.indexOf(element) > max) {
      errors++;
    }
    continue;
  }

  return `${errors}/ ${arr.length}`;
}
