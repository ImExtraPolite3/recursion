function loopFib(n) {
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  const array = [num1, num2];

  for (let i = 2; i < n; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    array[i] = sum;
  }

  return array;
}

console.log(loopFib(8));