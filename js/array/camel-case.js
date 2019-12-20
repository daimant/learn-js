"use strict";

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//То есть дефисы удаляются, а все слова после них получают заглавную букву.
//  Примеры:
//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';
//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
//  потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
  let camelArr = str.split("-");
  if (
    camelArr.find((element, index) => element[index] === "") ||
    camelArr.length === 1
  )
    return "";
  camelArr.forEach(
    (element, index) =>
      (element[index] =
        element[index].toUpperCase()[1] + element[index].slice(1))
  );
  console.log(camelArr);
  return camelArr.join("");
}

console.log(camelize("background-color") == "backgroundColor");
console.log(camelize("list-style-image") == "listStyleImage");
console.log(camelize("-webkit-transition") == "WebkitTransition");
