/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */

function reverseWords(str) {
    let arr = str.split(" ")
    console.log(arr)
    let newArr = arr.map(n=>{
        console.log(n)
        return n.split("").reverse().join("")
    })
    console.log(newArr)
    return newArr.join(' ')
  }
  console.log(reverseWords("This is an example!"))