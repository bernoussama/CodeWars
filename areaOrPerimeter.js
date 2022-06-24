// Instructions
/* 
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
 */

// /* Prep */

// Parameters: lenght width

// Returns: area if square | perimeter if rectangle

// Examples:
console.log(areaOrPerimeter(6, 10)); // => 32
console.log(areaOrPerimeter(3, 3)); // => 9

function areaOrPerimeter(length, width) {
  // Pseudo:
  //if length = width return area
  // if length != width return perimeter
  return width == length ? width * length : (width + length) * 2;
}
