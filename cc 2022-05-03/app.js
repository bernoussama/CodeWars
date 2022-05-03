/* Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */
// P:
    // 


//R:
function repeatStr (n, s) {
    let repeated = ""
    for(let i=0;i < n ;i++){
        repeated += s
        console.log(repeated)
    }
    return repeated;
  }
  console.log(repeatStr(3,"Io"))