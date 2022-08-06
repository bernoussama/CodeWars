/* DESCRIPTION:
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]. */

"use strict";
function flattenAndSort(array) {
  // using concat
  array = [].concat(...array);
  return [].concat(...array).sort((a, b) => a - b);
  // using flat
  return array.flat(1).sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
