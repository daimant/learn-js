"use strict";

//Условие: Небходимо придумать удобную структуру результирующего массива,
//с помощью которого можно решить следующую задачу.
//В системе (программе или базе данных) есть авторы и книги,
//у каждой книги только один автор.
//Создайте массив, в котором будет не менее 3-х авторов и не менее 5-ти книг.
//Необходимо вывести информацию по всем авторам, на каждой строке :
//имя Автора – его email – год рождения. Затем необходимо вывести информацию
//по книгам, на каждой строке: Название книги – Имя автора - год
//выпуска книги.Например: Николай Васильевич – gogol@gogol.ru - 1809
//Пушкин – alexandr@sergeevich.ru - 1799 Мертвые души – Николай Васильевич -
//1841 Вий – Николая Васильевич - 1834 Пиковая дама - Пушкин - 1833

let gogol = {
  type: "human",
  fullName: "Гоголь Николай Васильевич",
  email: "gogol@google.com",
  birtday: 1809
};

let pushkin = {
  type: "human",
  fullName: "Пушкин Александр Сергеевич",
  email: "pushpush@mail.ru",
  birtday: 1799
};

let lenmontov = {
  type: "human",
  fullName: "Лермонтов Михаил Юрьевич",
  email: "lermomon@yandex.ru",
  birtday: 1814
};

let overcoat = {
  type: "book",
  author: gogol,
  title: "Шинель",
  yearWriting: 1842
};

let captainDaughter = {
  type: "book",
  author: pushkin,
  title: "Капитанская дочка",
  yearWriting: 1836
};

let queenOfSpades = {
  type: "book",
  author: pushkin,
  title: "Пиковая дама",
  yearWriting: 1834
};

let heroOfOurTime = {
  type: "book",
  author: lenmontov,
  title: "Герой нашего времени",
  yearWriting: 1840
};

let novice = {
  type: "book",
  author: lenmontov,
  title: "Мцыри",
  yearWriting: 1840
};

let arr = [
  gogol,
  pushkin,
  lenmontov,
  overcoat,
  captainDaughter,
  queenOfSpades,
  heroOfOurTime,
  novice
];

function showAuthors() {
  // функция выводит в консоль авторов
  let elementArr;
  for (let i = 0; i < arr.length; i++) {
    elementArr = arr[i];
    if (elementArr.type === "human") {
      console.log(
        elementArr.fullName +
          " - " +
          elementArr.email +
          " - " +
          elementArr.birtday
      );
    }
  }
}

function showBooks() {
  // функция выводит в консоль книги
  let elementArr;
  for (let i = 0; i < arr.length; i++) {
    elementArr = arr[i];
    if (elementArr.type === "book") {
      console.log(
        elementArr.title +
          " - " +
          elementArr.author.fullName +
          " - " +
          elementArr.yearWriting
      );
    }
  }
}

showAuthors();
showBooks();
