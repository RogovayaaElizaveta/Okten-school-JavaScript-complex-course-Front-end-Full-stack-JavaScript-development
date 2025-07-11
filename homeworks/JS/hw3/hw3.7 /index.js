let array = [1, 'hi', true, false, 22, 'ok', true, 'no', 0, null];
for (let el of array) {
  if (typeof el === 'boolean') console.log(el);
}
