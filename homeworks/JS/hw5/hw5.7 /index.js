const createCustomList = (text, count) => {
  document.write('<ul>');
  for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write('</ul>');
};
createCustomList('Повтор', 5);
