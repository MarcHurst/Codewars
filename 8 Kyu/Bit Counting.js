const bitCount = (num) => {
  let binary = num.toString(2);
  console.log(binary);
  let arr = binary.split("");
  let sum = arr.reduce(
    (preVal, curVal) => parseInt(preVal) + parseInt(curVal),
    0
  );
  console.log(sum);
  return sum;
};

const countBits = (num) =>
  num
    .toString(2)
    .split("")
    .reduce((preVal, curVal) => parseInt(preVal) + parseInt(curVal), 0);
 
bitCount(9);

console.log(countBits(9));
