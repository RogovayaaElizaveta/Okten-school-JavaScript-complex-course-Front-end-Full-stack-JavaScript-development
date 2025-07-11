let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');

if (num1 > num2) {
  console.log('Максимальне:', num1);
} else if (num2 > num1) {
  console.log('Максимальне:', num2);
} else {
  console.log('Числа рівні');
}
