/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

 */

function disemvowel(str) {
  return str
    .split("")
    .filter((element, index, arr) => {
      return (
        element !== "a" &&
        element !== "e" &&
        element !== "i" &&
        element !== "o" &&
        element !== "u" &&
        element !== "A" &&
        element !== "E" &&
        element !== "I" &&
        element !== "U" &&
        element !== "O"
      );
    })
    .join("");
}
console.log(disemvowel("This website is for losers LOL!"));

// favorite solution
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join("");
}
