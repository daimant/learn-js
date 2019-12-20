"use strict";

[1, 2].forEach(console.log); //  Вывести все элементы массива

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} имеет позицию ${index} в ${array}`);
});

let arr = [1, 2, 5];
// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);
console.log(arr); // 1,2,3,4,5

arr = ["t", "e", "s", "t"];
console.log(arr.slice(1, 3)); // e,s (копирует с 1 по 3)
console.log(arr.slice(-2)); // s,t (копирует с -2 до конца)

arr = [1, 2];
// создать массив из: arr и [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

//…Но если объект имеет специальное свойство Symbol.isConcatSpreadable,
//то он обрабатывается concat как массив: вместо него добавляются его числовые свойства.
//Для корректной обработки в объекте должны быть числовые свойства и length:
arr = [1, 2];
let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
console.log(arr.concat(arrayLike)); // 1,2,что-то,ещё

arr = [1, 0, false];
console.log(arr.indexOf(0)); // 1
console.log(arr.lastIndexOf(false)); // 0
console.log(arr.indexOf(null)); // -1
console.log(arr.includes(1)); // true

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
];
let user = users.find(item => item.id == 1);
console.log(user.name); // Вася
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length); // 2

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6 здесь мы преобразуем каждый элемент в его длину

arr = [1, 2, 15];
arr.sort((a, b) => a - b); // 1, 2, 15

arr = [1, 2, 3, 4, 5];
arr.reverse(); // 5,4,3,2,1

let names = "Вася, Петя, Маша";
arr = names.split(", ");
for (let name of arr) {
  console.log(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}

let str = "тест";
console.log(str.split("")); // т,е,с,т

arr = ["Вася", "Петя", "Маша"];
str = arr.join(";"); // объединить массив в строку через  Вася;Петя;Маша

arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0); // 15
result = arr.reduceRight((sum, current) => sum + current, 0); // 15

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};
users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);
console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23
