/*
https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

const removeEveryOther = arr => {
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        if (i%2 === 0) {
            newarr.push(arr[i])
        }
    }
    return newarr
}

let test1 = removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
let expected1 = ['Hello', 'Hello Again']
console.log(test1, expected1)
console.log(test1 == expected1 ? "Test 1 passed" : "Test 1 failed")

let test2 = removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
let expected2 = [1, 3, 5, 7, 9]
console.log(test2 === expected2 ? "Test 2 passed" : "Test 2 failed")

let test3 = removeEveryOther([[1, 2]])
let expected3 = [[1, 2]]
console.log(test3 === expected3 ? "Test 3 passed" : "Test 3 failed")

let test4 = removeEveryOther([['Goodbye'], {'Great': 'Job'}])
let expected4 = [['Goodbye']]
console.log(test4 === expected4 ? "Test 4 passed" : "Test 4 failed")