/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers. */

function order(words) {
  //split words by " "
  //look for the number
  //use the number as the index of the word
  //push to a new array from 1 up

  let arr = words.split(" ");

  let arr2 = arr.map((el, i) => {
    return el.split("");
  });

  let indexes = arr2.map((el) => {
    return el.filter((element) => {
      return Number(element);
    });
  });
  indexes = indexes.toString().split(",");

  let ordered = [];
  for (let i = 1; i <= indexes.length; i++) {
    ordered.push(arr[indexes.indexOf(String(i))]);
  }
  return ordered.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));
