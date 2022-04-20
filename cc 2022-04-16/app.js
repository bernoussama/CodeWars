/* Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted. */

// My Solution
function missingDigits(...args) {
    let digits = "0123456789";
    let result = "";
    for (let i = 0; i < digits.length; i++) {
        let found = false;
        for (let j = 0; j < args.length; j++) {
        if (digits[i] === args[j].toString()) {
            found = true;
            break;
        }
        }
        if (!found) {
        result += digits[i];
        }
    }
    return result;
    }                   
    console.log(missingDigits(12, 34, 56, 78));