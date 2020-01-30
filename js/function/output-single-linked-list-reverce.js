"use strict";

//Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
//  Сделайте два решения: с использованием цикла и через рекурсию.

function printReverseListWithRecursion(list) {
  if (list.next) {
    printReverseListWithRecursion(list.next);
  }
  console.log(list.value);
}

function printReverseListWithIteration(list) {
  let temp = list;
  let arr = [];

  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }

  for (let i of arr.reverse()) console.log(i);
}

let list = {
  value: 1,
  next: { value: 2, next: { value: 3, next: { value: 4, next: null } } }
};

printReverseListWithRecursion(list);
printReverseListWithIteration(list);
