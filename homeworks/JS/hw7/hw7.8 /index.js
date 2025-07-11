
class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}


const cinderellas = [
  new Cinderella('Анна', 18, 36),
  new Cinderella('Марія', 19, 37),
  new Cinderella('Олена', 20, 38),
  new Cinderella('Ірина', 21, 39),
  new Cinderella('Світлана', 18, 35),
  new Cinderella('Наталя', 22, 40),
  new Cinderella('Катерина', 19, 37),
  new Cinderella('Тетяна', 20, 36),
  new Cinderella('Людмила', 21, 38),
  new Cinderella('Вікторія', 22, 39),
];


class Prince {
  constructor(name, age, foundShoeSize) {
    this.name = name;
    this.age = age;
    this.foundShoeSize = foundShoeSize;
  }
}


const prince = new Prince('Едуард', 25, 37);


let foundCinderella = null;
for (const cinderella of cinderellas) {
  if (cinderella.footSize === prince.foundShoeSize) {
    foundCinderella = cinderella;
    break;
  }
}

console.log('Знайдена попелюшка циклом:', foundCinderella);


const foundByFind = cinderellas.find(c => c.footSize === prince.foundShoeSize);

console.log('Знайдена попелюшка за допомогою find:', foundByFind);
