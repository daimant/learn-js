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

let arr = [
  {
    id: "gogol",
    type: "human",
    fullName: "Гоголь Николай Васильевич",
    email: "gogol@google.com",
    birthday: 1809
  },
  {
    id: "pushkin",
    type: "human",
    fullName: "Пушкин Александр Сергеевич",
    email: "pushpush@mail.ru",
    birthday: 1799
  },
  {
    id: "lermontov",
    type: "human",
    fullName: "Лермонтов Михаил Юрьевич",
    email: "lermomon@yandex.ru",
    birthday: 1814
  },
  {
    type: "book",
    authorId: "gogol",
    title: "Шинель",
    yearWriting: 1842
  },
  {
    type: "book",
    authorId: "pushkin",
    title: "Капитанская дочка",
    yearWriting: 1836
  },
  {
    type: "book",
    authorId: "pushkin",
    title: "Пиковая дама",
    yearWriting: 1834
  },
  {
    type: "book",
    authorId: "lermontov",
    title: "Герой нашего времени",
    yearWriting: 1840
  },
  {
    type: "book",
    authorId: "lermontov",
    title: "Мцыри",
    yearWriting: 1840
  }
];

function showAuthors() {
  let elementArr;
  for (let i = 0; i < arr.length; i++) {
    elementArr = arr[i];
    if (elementArr.type === "human") {
      console.log(
        elementArr.fullName +
          " - " +
          elementArr.email +
          " - " +
          elementArr.birthday
      );
    }
  }
}

function showBooks() {
  for (const { type, title, yearWriting, authorId } of arr) {
    if (type === "book") {
      const { fullName } = arr.find(
        ({ type, id }) => type === "human" && id === authorId
      );
      console.log(`${title} - ${fullName} - ${yearWriting}`);
    }
  }
}

showAuthors();
showBooks();
