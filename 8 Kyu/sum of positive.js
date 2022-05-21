const positiveSum = arr => arr.filter(num => num > 0)
    .reduce((sum, num) => sum+num,0)

// {
//     let reducedArr = arr.filter(num => num > 0)
//     console.log(reducedArr);
//     let sum = reducedArr.reduce((sum, num) => sum+num,0)
//     console.log(sum)
// }

console.log(positiveSum([1,2,3,-9]))