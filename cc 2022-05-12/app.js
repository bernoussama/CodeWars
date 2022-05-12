/* 
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
    if(n){  
        return String(n).split('').reverse().map(Number)
    }
    return [0]
}
console.log(digitize(18285182))