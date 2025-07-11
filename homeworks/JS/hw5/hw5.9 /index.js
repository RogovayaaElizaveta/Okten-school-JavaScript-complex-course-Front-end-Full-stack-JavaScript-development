const showObjects = arr => {
  arr.forEach(obj => {
    document.write(`<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`);
  });
};
showObjects([
  {id: 1, name: 'Max', age: 25},
  {id: 2, name: 'Anna', age: 30}
]);
