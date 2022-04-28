/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

 */

// P: 
    // substring first character   
        //easy
    // substring last character
        //pretty straightforward

function removeChar(str){
    return str.substring(1,str.length - 1)
}

