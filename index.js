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
  let array = [];
  let sum = 0;
 
  if (n == 0) {
    return 0;
  } else if (n == 1) {  
    return 1;
  } else {
    array.push((recursionFib(recursionFib(n - 2)) + recursionFib(n - 1)));
  }

  return array;
}


    
   
   





console.log(recursionFib(4));
// console.log((3));
