// Instructions
/* 
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(orderedCount("abracadabra")); // =>[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

export function orderedCount(text: string): [string, number][] {
  // Implement me! :)
  const array: string[] = text.split("");
  let chars: string[] = [];
  let count: number[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let charIndex: number = chars.indexOf(element);
    if (charIndex == -1) {
      chars.push(element);
      count[chars.indexOf(element)] = 0;
    } else {
      count[charIndex]++;
    }
  }
  return chars.map((el, i) => {
    return [el, count[i]];
  });
}
// best solution
// export function orderedCount(text: string): [string, number][] {
//   return [...new Set(text)].map((x: string) => [x, text.split(x).length - 1])
// }
