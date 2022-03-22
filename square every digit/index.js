const squareDigits = num => parseInt(num.toString()
    .split('')
    .map(num => Math.pow(parseInt(num),2))
    .join(''))



const oldsquareDigits = (num=15489) => {
    let arra = num.toString().split('')
    console.log(arra)
    let newarr = arra.map(num => Math.pow(parseInt(num),2))
    console.log(newarr)
    let finalstring = newarr.join("");
    console.log(finalstring)
}

console.log(oldsquareDigits(15489))

/*
(5) [1, 25, 16, 64, 81]
125166481
index.js:7
*/