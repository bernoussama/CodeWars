/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */
/* For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

//P:
    //if i>0 => count += i
    //else if i<0 => sum += i
    //if [] || null => return []

//R:
function countPositivesSumNegatives(input) {
    if(!input || !input.length){
        return []
    }
    let negatives = input.filter(i => i < 0)
    let sum = 0
    negatives.forEach(element => {
        sum += element
    });
    let positives = input.filter(i => i > 0)
    let count = 0
    count = positives.length
    return !positives && !negatives && !count && !sum ?  [] : [count,sum]  
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0,0]))