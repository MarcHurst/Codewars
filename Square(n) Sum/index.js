const roughsquareSum = (numbers = [1,2,2]) => {
    console.log(numbers)
    let mappedNums = numbers.map (num => {
        console.log(num)
        console.log(num*num)
        return num*num;
    });
    console.log(mappedNums);
    let finalValue = mappedNums.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
      }, 0)
      console.log(finalValue)
    // numbers.reduce();
}
// Refactor! 
const squareSum = numbers => numbers.map(num => num*num)
    .reduce((previousValue,currentValue) => previousValue + currentValue,0)

// squareSum([1,2,2])

console.log(squareSum([1,2,2]))