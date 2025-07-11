
function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}


const users1 = [];


users.push(new User(1, 'Ivan', 'Ivanov', 'ivanov@example.com', '123-456-7890'));
users.push(new User(2, 'Petro', 'Petrov', 'petrov@example.com', '234-567-8901'));
users.push(new User(3, 'Sofia', 'Sidorova', 'sidorova@example.com', '345-678-9012'));
users.push(new User(4, 'Olena', 'Kovalenko', 'kovalenko@example.com', '456-789-0123'));
users.push(new User(5, 'Andriy', 'Shevchenko', 'shevchenko@example.com', '567-890-1234'));
users.push(new User(6, 'Maria', 'Bondarenko', 'bondarenko@example.com', '678-901-2345'));
users.push(new User(7, 'Dmytro', 'Melnyk', 'melnyk@example.com', '789-012-3456'));
users.push(new User(8, 'Kateryna', 'Lysenko', 'lysenko@example.com', '890-123-4567'));
users.push(new User(9, 'Vasyl', 'Hrytsenko', 'hrytsenko@example.com', '901-234-5678'));
users.push(new User(10, 'Natalia', 'Tkachenko', 'tkachenko@example.com', '012-345-6789'));


console.log(users1);
