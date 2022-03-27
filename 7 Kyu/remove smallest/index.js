const removeSmallest = numbers => {
    let tmp = numbers.slice()
    tmp.splice(tmp.indexOf(Math.min(...tmp)), 1);
    return tmp;
}

const defactorremoveSmallest = numbers => {
    console.log(numbers);
    let smallestNum = Math.min(...numbers)
    console.log(smallestNum);
    let smallestPos = numbers.indexOf(smallestNum);
    console.log(smallestPos);
    let newArr = numbers.splice(smallestPos, 1);
    console.log(newArr)
    console.log(numbers)
    return numbers;
}

console.log(removeSmallest([1,2,3,4,5]));