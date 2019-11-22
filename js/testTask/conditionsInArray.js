"use strict";

//Самая простая задача
//Дано: Массив: $items = ['where', 'is', 'my', 'money']; и переменная
//$sum = 0;
//В цикле от 0 до 100 сделайте следующее (должно выполнится только одно из
//условий):
//если число делится без остатка на 3 выведите любую непустую строку
//если число делится без остатка на 5 – прибавьте это число к переменной $sum
//если число делится и на 5 и на 3 – перемешайте массив $items
//После цикла Выведите массив $items, любым удобным способом

let items = ["where", "is", "my", "money"];
let sum = 0;

function mixArr(arr) {
  // функция сортировки методом алгоритма Фишера-Йетса.
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  items = arr;
  return arr;
}

for (let i = 0; i < 100; i++) {
  // прогоняет цикл от 0 до 100 и выполняет условия
  if (i % 3 === 0) {
    console.log("любая непустая строка");
  }

  if (i % 5 === 0) {
    sum += i;
  }

  if (i % 3 === 0 || i % 5 === 0) {
    mixArr(items);
  }
}

console.log(sum); // выводит переменную sum в консоль

for (let i = 0; i < items.length; i++) {
  // выводит массив в консоль
  console.log(items[i]);
}
