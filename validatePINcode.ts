// Instructions
/* 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(); // =>

export class Kata {
  static validatePin(pin: string): boolean {
    if((pin.length == 4 || pin.length == 6)){
      if(Number(pin)== 0 || pin.split('').every(el => +el)){
        return true
      }else
      return false
    }else
    // throw new Error("The method or operation is not implemented.");
return false  
}
}

console.log(Kata.validatePin("0000")); // =>true
console.log(Kata.validatePin("1230")); // =>true