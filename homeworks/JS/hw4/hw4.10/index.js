function findMinFunc(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}
console.log(findMinFunc([10, 5, 3, 8]));
