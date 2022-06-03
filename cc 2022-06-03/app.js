/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

 */


function sumTwoSmallestNumbers(numbers) {
    let nums = []
    const arr = numbers
    console.log(Number(Math.max(...numbers)))
     for(let i=0; i < numbers.length + 2; i++){
        nums.unshift(Math.max(...numbers))
        numbers.splice(numbers.indexOf(Math.max(...numbers)),1)
        if(numbers.length == 1){
            nums.unshift(numbers[0])
        }
        console.log(numbers)
        console.log(nums)
    }
    return nums[0] + nums[1]
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))