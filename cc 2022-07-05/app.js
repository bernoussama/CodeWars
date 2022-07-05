/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

 */
function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    let strLengths = array.map((e)=>{
        return Number(e.split('').length)
    })
    console.log(strLengths.indexOf())

    let sorting  = strLengths.sort((a,b)=>a-b)
    let indexes = sorting.map((e)=>{
        return Number(strLengths.indexOf(e))
    })
    console.log(strLengths.sort((a,b)=>a-b))
    console.log(indexes)
    return indexes.map((e)=>{
       return array[e]
    })
  };
console.log(  sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
// my solution didn't work so here's my favorite solution

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };