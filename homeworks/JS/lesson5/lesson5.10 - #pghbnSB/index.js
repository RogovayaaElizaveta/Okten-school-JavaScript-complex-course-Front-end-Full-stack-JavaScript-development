const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  const rate = currencyValues.find(c => c.currency === exchangeCurrency)?.value;
  return rate ? sumUAH / rate : null;
};
console.log(exchange(10000, [
  {currency: 'USD', value: 40},
  {currency: 'EUR', value: 42}
], 'USD')); 
