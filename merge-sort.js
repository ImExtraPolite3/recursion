function mergeSort(array) {
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  if (array.length == 1) {
    return array;
  } else {
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) { 
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return sortedArray.concat(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));