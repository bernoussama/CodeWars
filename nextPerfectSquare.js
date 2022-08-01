/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square 
*/

//              /* PREP */

// Parameters:
// sq: num

// Returns:
// if sq == perfectSqrt => next PerfectSqrt
// else -1

function findNextSquare(sq = 121) {
  // Pseudo:

  // check if sq is perfect square
  let sqrt = Math.sqrt(sq);
  // console.log(sqrt);
  // console.log(parseInt(sqrt));
  if (sqrt == parseInt(sqrt)) {
    // while sq+n is not perfect square keep iterating
    let num = Number(sq + 1);
    let numSqrt = Math.sqrt(num);
    while (numSqrt !== parseInt(numSqrt)) {
      num++;
      numSqrt = Math.sqrt(num);
    }
    return num;
  }
  // Return the next square if sq is a perfect square, -1 otherwise
  else return -1;
}

// Examples:
console.log(findNextSquare(121)); // returns 144
console.log(findNextSquare(625)); // returns 676
console.log(findNextSquare(114)); // returns -1

// favourite solution

/* 
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
} 
*/
