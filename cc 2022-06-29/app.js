/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// my take on it
function solution(string) {
    return string.split('').map((x,i,arr)=>{
        if(x === x.toUpperCase()){
            arr.splice((i-1) , 0, ' ')
        }
        return x
    }).join('')
}
 console.log(solution("camelCasing"))

 // my favorite solution
 function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }