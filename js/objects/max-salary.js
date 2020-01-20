"use strict";

//У нас есть объект salaries с зарплатами:
//  let salaries = {
//    "John": 100,
//    "Pete": 300,
//    "Mary": 250
//  };
//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//  Если объект salaries пустой, то нужно вернуть null.
//  Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//  P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
  let maxSalary = 0;
  let result = null;

  for (let [currName = "", currSalary = 0] of Object.entries(salaries)) {
    if (currSalary > maxSalary) {
      result = currName;
      maxSalary = currSalary;
    }
  }

  return result;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

console.log(topSalary(salaries));
