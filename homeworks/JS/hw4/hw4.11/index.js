function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
console.log(sum([1, 2, 10])); 
