"use strict";

//  Мы можем использовать квадратные скобки в литеральной нотации для создания
//  вычисляемого свойства.

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5 // имя свойства будет взято из переменной fruit
};

alert(bag.apple); // 5, если fruit="apple"

//Мы можем использовать и более сложные выражения в квадратных скобках:

let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5 // bag.appleComputers = 5
};

//  В реальном коде часто нам необходимо использовать существующие переменные
//  как значения для свойств с тем же именем.

function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...другие свойства
  };
  //return {
  //  name, // то же самое, что и name: name
  //  age   // то же самое, что и age: age
  //  // ...
  //};
}

let user = makeUser("John", 30);
alert(user.name); // John

//  Также существует специальный оператор "in" для проверки существования
//  свойства в объекте.

let user = { name: "John", age: 30 };

alert("age" in user); // true, user.age существует
alert("blabla" in user); // false, user.blabla не существует

//  Для перебора всех свойств объекта используется цикл for..in
//  К примеру, давайте выведем все свойства объекта user:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert(key); // name, age, isAdmin
  // значения ключей
  alert(user[key]); // John, 30, true
}

// при переборе свойств целочисленные свойства выводятся в порядке возрастания,
// чтобы они выводились в порядке создания ставится +

let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes) {
  alert(+code); // 49, 41, 44, 1
}

//  клонировать объект
//  первый способ

let user = {
  name: "John",
  age: 30
};

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

// второй способ

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

// возвращает true если есть такое свойство у объекта
console.log(menu.hasOwnProperty("width"));
