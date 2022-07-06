/* Write function RemoveExclamationMarks which removes all exclamation marks from a given string. */

function removeExclamationMarks(s) {
    let arr = s.split('')
    return arr.map(n=>{
        if(n  =='!'){
            arr.splice(arr.indexOf(n),1)
        }
    }).join('')
  }

console.log(removeExclamationMarks('gjlkjg!jg!gjj!'))