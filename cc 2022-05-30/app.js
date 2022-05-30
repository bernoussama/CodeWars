/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

function fakeBin(x){
  arr = x.split('')
  console.log(arr)
  return arr.map(n=> {
    n = Number(n)
    console.log(n)
    if(n<5){
      return n = 0
    }else{
      return n = 1
    }
  }).join('')
 
}
console.log(fakeBin('45385593107843568'))