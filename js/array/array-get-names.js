"use strict";

//У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
//  Например:
//
//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 28 };
//let users = [ vasya, petya, masha ];
//let names = /* ... ваш код */
//alert( names ); // Вася, Петя, Маша

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name).join(", ");

console.log(names); // Вася, Петя, Маша

// или функция которую я написал изначально
//function getName (users) {
//  let arrNames = [];
//  for (let key in users) {
//    arrNames.push(users[key].name);
//  }
//  return arrNames.join(", ");
//} (users);
