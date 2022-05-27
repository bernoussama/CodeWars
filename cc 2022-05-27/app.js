/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

function longest(s1, s2) {
    arr1 = s1.split("")
    arr2 = s2.split("")
    console.log(arr1)
    let arr3 = arr1.concat(arr2)
    let set1 = [...new Set(arr3)]
    return set1.sort().join("")
  }

// a clever alternative
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')