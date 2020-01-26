"use strict";

//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//  Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
//getSecondsToday() == 36000 // (3600 * 10)
//Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
  let now = new Date();
  return `сегодня прощло ${(now -
    new Date(now.getFullYear(), now.getMonth(), now.getDate())) /
    1000} секунд`;
}

console.log(getSecondsToday());
