"use strict";

//В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2)
//и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский»
//день недели для даты date.
//  let date = new Date(2012, 0, 3);  // 3 января 2012 года
//alert( getLocalDay(date) );       // вторник, нужно показать 2

function getLocalDay(date) {
  return date.getDay() !== 0 ? date.getDay() : 7;
}

let date = new Date(2012, 0, 3); // 3 января 2012 года

console.log(getLocalDay(date)); // вторник, нужно показать 2

// первый вариант
//function getLocalDay(date) {
//  let weekday = date.toLocaleString('ru', {weekday: 'short'});
//
//  if (weekday === 'пн') return 1;
//  if (weekday === 'вт') return 2;
//  if (weekday === 'ср') return 3;
//  if (weekday === 'чт') return 4;
//  if (weekday === 'пт') return 5;
//  if (weekday === 'сб') return 6;
//  if (weekday === 'вс') return 7;
//}

// надо было вот так
//function getLocalDay(date) {
//
//  let day = date.getDay();
//
//  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//    day = 7;
//  }
//
//  return day;
//}
