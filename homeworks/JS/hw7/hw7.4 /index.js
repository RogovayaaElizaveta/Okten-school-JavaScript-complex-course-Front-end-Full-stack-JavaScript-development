
function Client(id, name, surname, email, phone, order) {
  this.id = id;             
  this.name = name;        
  this.surname = surname;   
  this.email = email;       
  this.phone = phone;     
  this.order = order;      
}
const clients = [];
clients.push(new Client(1, 'Іван', 'Іванов', 'ivan@example.com', '123456789', ['Яблуко', 'Банан']));
clients.push(new Client(2, 'Петро', 'Петров', 'petro@example.com', '987654321', ['Молоко', 'Хліб']));
clients.push(new Client(3, 'Оля', 'Сидоренко', 'olya@example.com', '555555555', ['Сир']));
clients.push(new Client(4, 'Марія', 'Коваленко', 'maria@example.com', '444444444', ['Масло', 'Яйця']));
clients.push(new Client(5, 'Андрій', 'Шевченко', 'andriy@example.com', '333333333', ['Кава']));
clients.push(new Client(6, 'Катя', 'Лисенко', 'katya@example.com', '222222222', ['Чай', 'Цукор']));
clients.push(new Client(7, 'Василь', 'Гриценко', 'vasyl@example.com', '111111111', ['Вода']));
clients.push(new Client(8, 'Наталя', 'Ткаченко', 'natalia@example.com', '666666666', ['Сік', 'Печиво']));
clients.push(new Client(9, 'Дмитро', 'Мельник', 'dmytro@example.com', '777777777', ['Шоколад']));
clients.push(new Client(10, 'Світлана', 'Бондаренко', 'svitlana@example.com', '888888888', ['Торт', 'Пиріг']));
console.log(clients);
