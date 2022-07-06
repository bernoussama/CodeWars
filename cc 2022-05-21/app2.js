/* Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

[2, 1, 10]  ->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0. */
function sumOfDifferences(arr) {
    let newArr = []
    for (let i = 0; i <= arr.length + 1; i++) {
        newArr.push(Math.max(...arr))
        arr.splice(arr.indexOf(Math.max(...arr)), 1)
    }
    console.log(newArr)
    let sum = 0
    for (let i = 0; i < newArr.length - 1; i++) {
        sum += newArr[i] - newArr[i + 1]
    }
    return sum
}