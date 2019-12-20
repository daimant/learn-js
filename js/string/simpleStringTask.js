"use strict";

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList); // список гостей, состоящий из нескольких строк
console.log("\u00A9"); // ©
console.log("\u{20331}"); // 佫, редкий китайский иероглиф
console.log("\u{1F60D}"); // 😍, лицо с улыбкой и глазами в форме сердец
console.log("I'm the Walrus!"); // I'm the Walrus!
console.log(`My\n`.length); // 3
console.log(`The backslash: \\`); // The backslash: \
let str = `Hello`;
console.log(str[0]); // H // получаем первый символ предпочтительнее использовать
console.log(str.charAt(0)); // H // получаем первый символ
console.log(str[str.length - 1]); // o // получаем последний символ
console.log(str[1000]); // undefined

for (let char of "Hello") {
  console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
}

let str = "Hi";
str = "h" + str[1]; // заменяем строку

console.log("Interface".toUpperCase()); // INTERFACE
console.log("Interface".toLowerCase()); // interface
console.log("Interface"[0].toLowerCase()); // 'i'

let str = "Widget with id";
console.log(str.indexOf("id", 2)); // 12

let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа"; // цель поиска
//Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле.
//Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1; // продолжаем со следующей позиции
}

let str = "Widget";
if (~str.indexOf("Widget")) {
  console.log("Совпадение есть"); // работает
}

console.log("Midget".includes("id")); // true
console.log("Midget".includes("id", 3)); // false, поиск начат с позиции 3
console.log("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
console.log("Widget".endsWith("get")); // true, "get" — окончание "Widget"
let str = "stringify";
console.log(str.slice(0, 5)); // 'strin', символы от 0 до 5 (не включая 5)
console.log(str.slice(0, 1)); // 's', от 0 до 1, не включая 1
console.log(str.slice(2)); // с позиции 2 и до конца
console.log(str.slice(-4, -1)); // gif
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

console.log("a" > "Z"); // true
console.log("Österreich" > "Zealand"); // true
console.log("z".codePointAt(0)); // 122 одна и та же буква в нижнем и верхнем регистре
console.log("Z".codePointAt(0)); // 90 будет иметь разные коды
console.log("Österreich".localeCompare("Zealand")); // -1 правильное сравнение

let s1 = "S\u0307\u0323"; // Ṩ, S + точка сверху + точка снизу
let s2 = "S\u0323\u0307"; // Ṩ, S + точка снизу + точка сверху
console.log(`s1: ${s1}, s2: ${s2}`);
console.log(s1 == s2); // false, хотя на вид символы одинаковы (?!)
console.log("S\u0307\u0323".normalize() == "S\u0323\u0307".normalize()); // true

str.trim(); //убирает пробелы в начале и конце строки.
str.repeat(n); // повторяет строку n раз.
