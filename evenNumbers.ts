// Instructions
/* 
The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
 */

// /* Prep */

// Parameters: numbersArray: number[]

// Returns: evenNumbers: number[]

export const getEvenNumbers = (numbersArray: number[]): number[] => {
  let evenNumbers: number[];
  // filter out the odd numbers
  const isEven = (num) => num % 2 == 0;
  const filter = (arr, func) => arr.filter(func);
  evenNumbers = filter(numbersArray, isEven);
  return evenNumbers;
};

// Examples:
console.log(getEvenNumbers([2, 4, 5, 6])); // => [2,4,6]
