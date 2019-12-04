"use strict";

//Напишите функцию isEmpty(obj), которая возвращает true,
//если у объекта нет свойств, иначе false.
//Должно работать так:
//
//  let schedule = {};
//
//alert( isEmpty(schedule) ); // true
//
//schedule["8:30"] = "get up";
//
//alert( isEmpty(schedule) ); // false

function isEmpty(schesule) {
  let countProp = 0;

  for (let key in schesule) {
    countProp++;
  }

  return !countProp;
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
schedule["9:30"] = "get up";
console.log(isEmpty(schedule)); // false
