/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

function findUniq(arr) {
  // do magic
  
  // the element is a unique if arr.indexOf(element) == i && arr.lastIndexOf(element) == i
  return arr.filter((element, i, arr) => {
    return (arr.indexOf(element) == i && arr.lastIndexOf(element) == i)
  })[0]
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

//favorite solution:

/* return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n)); */