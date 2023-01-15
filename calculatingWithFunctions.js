// Instructions
/* 

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

 */

// /* Prep */

// Parameters: fn or undefined

// Returns: number or fn(number)


// outer function should be left operand inner function should be right operand
const zero = fn => fn ? fn(0) : 0
const one = fn => fn ? fn(1) : 1
const two = fn => fn ? fn(2) : 2
const three = fn => fn ? fn(3) : 3
const four = fn => fn ? fn(4) : 4
const five = fn => fn ? fn(5) : 5
const six = fn => fn ? fn(6) : 6
const seven = fn => fn ? fn(7) : 7
const eight = fn => fn ? fn(8) : 8
const nine = fn => fn ? fn(9) : 9


const times = a => b => a * b
const plus = a => b => a + b
const minus = a => b => a - b
const dividedBy = a => b => Math.floor(b / a)


// Examples:
console.log(one(times(three()))); // => 3