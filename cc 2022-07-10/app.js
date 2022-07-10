/* 
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
 */

function getDivisorsCnt(n){
    // check for divisors starting from n => n-1 => 1
    n = Number(n);
    let divCount = 0;
    for(let i=1; i <= n; i++){
        if( (n%i) == 0 ){
            divCount++
        }
    };
    return divCount;
}
console.log(getDivisorsCnt(4))