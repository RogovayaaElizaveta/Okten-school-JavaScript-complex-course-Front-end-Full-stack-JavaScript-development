function CreateList(text) {
  document.write('<ul>');
  for (let i = 0; i < 3; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write('</ul>');
}
CreateList('Елемент списку');
