"use strict";
//
//Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//  Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//  В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//  В противном случае, если меньше часа, вывести "m мин. назад".
//  В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
//  всё в виде двух цифр, т.е. 31.12.16 10:00.
//Например:
//  alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
//alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//// вчерашняя дата вроде 31.12.2016, 20:00
//alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
  let diff = (Date.now() - date) / 1000;
  let options1 = { year: "2-digit", month: "2-digit", day: "2-digit" };
  let options2 = { hour: "2-digit", minute: "2-digit" };
  let yearMonthDays = new Date(Date.now() - diff * 1000).toLocaleString(
    "ru",
    options1
  );
  let hourMinutes = new Date(Date.now() - diff * 1000).toLocaleString(
    "ru",
    options2
  );

  if (diff < 1) return "прямо сейчас";
  if (diff > 1 && diff < 60) return `${diff} сек. назад`;
  if (diff > 60 && diff < 3600) return `${diff / 60} мин. назад`;
  return `${yearMonthDays} ${hourMinutes}`;
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date() - 86400 * 1000))); // вчерашняя дата вроде 31.12.2016, 20:00
