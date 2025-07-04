function exchange(sumUAH, currencyValues, exchangeCurrency) {
  for (let item of currencyValues) {
    if (item.currency === exchangeCurrency) {
      return sumUAH / item.value;
    }
  }
}
console.log(exchange(10000, [
  {currency: 'usd', value: 20},
  {currency: 'eur', value: 40}
], 'usd')); 
