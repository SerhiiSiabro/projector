function iterativeOddSumTo(number) {
  let unswer = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      unswer += i;
    } 
  }
  return unswer;
};
  
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25

function recursiveOddSumTo(number, i = 1) {
  if (i > number) {
    return 0;
  }
  if (i % 2 !== 0) {
    return i + recursiveOddSumTo(number, i + 1)
  } else {
    return recursiveOddSumTo(number, i + 1)
  }
};
  
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(9)) // 25
console.log(recursiveOddSumTo(10)) // 25