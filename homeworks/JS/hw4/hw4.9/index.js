function showNewbjects(arr) {
  for (let obj of arr) {
    document.write(`<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`);
  }
}
showNewObjects([
  {id: 1, name: 'Anna', age: 25},
  {id: 2, name: 'Max', age: 30}
]);
