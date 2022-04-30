/* We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun. */

//P:
    //if n>1 plural
    //else singular

//R:
function plural(n) {
    if(n!== 1){
        return true
    }
    return false
}