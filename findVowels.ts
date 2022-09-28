// Instructions
/* 
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
 */

// /* Prep */

// Parameters:

// Returns:

// Examples:
console.log(vowelIndices("Mmmm")); // =>

console.log(vowelIndices("YoMama")); // =>

console.log(vowelIndices("Apple")); // =>

export function vowelIndices(word: string): number[] {
  let vIndices: number[] = [];
  const vowels: string = "a e i o u y";
  const vowelsArr: string[] = vowels.split(" ");
  const getVindices = (str: string) =>
    str
      .toLowerCase()
      .split("")
      .forEach((el, i) => {
        if (vowelsArr.indexOf(el) !== -1) {
          vIndices.push(i + 1);
        }
      });
  getVindices(word);

  return vIndices;
}
