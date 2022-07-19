/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false */

function solution(str, ending) {
  let strray = str.split("").reverse();
  let array = [];
  return ending
    .split("")
    .reverse()
    .every((element, i) => {
      console.log(strray[i] == element ? true : false);
      if (!(strray[i] == element)) {
        return false;
      }
      return true;
    });
}
console.log(solution("abc", "bc"));
