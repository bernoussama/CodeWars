// Instructions
/* 
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
 */

// /* Prep */

// Parameters:

// Returns:

export const distinct = (a: number[]): number[] => {
  // return a.filter((el, i, arr) => {
  //   return arr.indexOf(el) == i && arr.lastIndexOf(el) == i;
  // });
  // pseudo
  // remove duplicate
  let array: number[] = [];
  a.forEach((el, i, arr) => {
    if (arr.indexOf(el) == i && !array.includes(el)) {
      array.push(el);
    }
  });
  return array;
};

// Examples:
console.log(distinct([0, 1, 2, 2, 2, 8, 7])); // =>

// favourite solution
// export const distinct = (ﬂ: number[]) => [...new Set(ﬂ)]
