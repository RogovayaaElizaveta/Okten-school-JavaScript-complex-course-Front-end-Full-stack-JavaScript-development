const listFromPrimitives = arr => {
  document.write('<ul>');
  arr.forEach(item => document.write(`<li>${item}</li>`));
  document.write('</ul>');
};
listFromPrimitives([1, 'JS', true, false, 'Okten']);
