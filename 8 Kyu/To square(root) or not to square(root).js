/*
https://www.codewars.com/kata/57f6ad55cca6e045d2000627

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

var input = [ 4, 3, 9, 7, 2, 1 ]
// var input = [ 100, 101, 5, 5, 1, 1 ]
var expected = [ 2, 9, 3, 49, 4, 1 ]

const squareOrSquareRoot = arr => arr.map(num => (Math.sqrt(num) % 1) === 0 ? Math.sqrt(num) : num*num)

console.log(squareOrSquareRoot(input))