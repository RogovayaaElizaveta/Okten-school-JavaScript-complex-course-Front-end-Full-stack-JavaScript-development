//
interface IUserTask1_4  {
    name:string,
    username:string,
    password :string
}

let user1 : IUserTask1_4 ={name : ' drd', username :'rdr', password :'eded'};
let user2 : IUserTask1_4 = {name : 'nbnb ', username :'drd', password :'ecfcd'};
let user3 : IUserTask1_4 = {name : 'bbhbb ', username :'nbn', password :'eded'};
let user_task1_4 :IUserTask1_4[] =[ user1,{name : ' drd', username :'rdr', password :'eded'},user2,{name : 'nbnb ', username :'drd', password :'ecfcd'},user3,{name : 'bbhbb ', username :'nbn', password :'eded'}]

console.log(user_task1_4[0]);

console.log(user_task1_4[1]);

console.log(user_task1_4[2]);

console.log(user_task1_4[3]);
console.log(user_task1_4[4]);

console.log(user_task1_4[5]);

