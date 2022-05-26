/*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).
*/

const sumOfDifferences = arr => {
    if (arr.length < 2) {
        return 0
    }

    let sorted = arr.sort((a,b) => b-a)
    
    let newArr = []
    
    for (let i = 0; i < arr.length-1; i++) {
        newArr.push(sorted[i]-sorted[i+1])
    }
    

    return newArr.reduce((acc, cur) => acc+=cur,0)
}



let test = sumOfDifferences([1, 2, 10])
console.log(test)