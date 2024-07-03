function sumRange(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumRange(n - 1);
  }
}

function power(x, n) {
  if (n == 0) {
    return 1;
  } else {
    return x * power(x, n - 1);
  }
}

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function all(array) {
  let num = array.slice()

  
}

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

function recursionFib(n) { 
  let array = new Array(n + 1);

  function fib(n) {
    if (n < 2) {
      return n;
    } else {
      array[n] = fib(n - 1) + fib(n - 2);
      return array[n];
    }
  }

  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(fib(i));
  }

  return newArray;
}

function memoizedFib(n) {
  let memo = {};

  function helperFib(n) {
    if (n < 2) {
      return n;
    }

    if (memo[n] !== undefined) {
      return memo[n];
    }

    memo[n] = helperFib(n - 1) + helperFib(n - 2);
    return memo[n];
  }

  let array = [];
  for (let i = 0; i <= n; i++) {
    array.push(helperFib(i));
  }

  return array;
}

// Example usage
// console.log(memoizedFib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// console.log(all([3, 2, 9]));
console.log(recursionFib(8));
