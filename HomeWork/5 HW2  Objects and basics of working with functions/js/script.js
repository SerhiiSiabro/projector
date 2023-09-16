function iterativeOddSumTo(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      result += i;
    } 
  }
  return result;
};
  
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25

function recursiveOddSumTo(number) {
  if (number === 1) {
    return 1;
 }
  if (number < 1) {
    return 0;
  }
  if (number % 2 !== 0) {
    return number + recursiveOddSumTo(number -2)
  }
  return recursiveOddSumTo(number - 1)
};
  
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(9)) // 25
console.log(recursiveOddSumTo(10)) // 25