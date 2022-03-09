/* reate a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

//substring first character and check if it's === to r or R =>plays banjo else don't play banjo
function banjo(name){
  return  name.substring(0,1) == 'r' ||name.substring(0,1) == 'R' ? (name + " plays banjo" ): (name + " does not play banjo")
}
console.log(banjo("bernou"))