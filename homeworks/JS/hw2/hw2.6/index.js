let a= 1;

if (a !== 0) {
  console.log('Вірно');
} else {
  console.log('Невірно');
}

let val = [1, 0, -3];

for (let val of val) {
  if (val !== 0) {
    console.log(val + ': Вірно');
  } else {
    console.log(val + ': Невірно');
  }
}
