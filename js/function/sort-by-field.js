"use strict";
//
//У нас есть массив объектов, который нужно отсортировать:
//  let users = [
//    { name: "John", age: 20, surname: "Johnson" },
//    { name: "Pete", age: 18, surname: "Peterson" },
//    { name: "Ann", age: 19, surname: "Hathaway" }
//  ];
//Обычный способ был бы таким:
//// по имени (Ann, John, Pete)
//  users.sort((a, b) => a.name > b.name ? 1 : -1);
//// по возрасту (Pete, Ann, John)
//users.sort((a, b) => a.age > b.age ? 1 : -1);
//Можем ли мы сделать его короче, скажем, вот таким?
//  users.sort(byField('name'));
//users.sort(byField('age'));
//То есть, чтобы вместо функции, мы просто писали byField(fieldName).
//  Напишите функцию byField, которая может быть использована для этого.

function byField(str) {
  return (a, b) => (a[str] > b[str] ? 1 : -1);
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField("name"));
users.forEach(item => console.log(item.name));
users.sort(byField("age"));
users.forEach(item => console.log(item.name));
