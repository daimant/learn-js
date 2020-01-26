"use strict";

//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
//  Для вывода используйте alert.

let date = new Date(2012, 1, 20, 3, 12);
let options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
};

console.log(date.toLocaleString("ru", options));
