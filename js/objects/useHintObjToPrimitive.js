"use strict";

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

//Для примера, используем их в реализации всё того же объекта user.
// Воспроизведём его поведение комбинацией методов toString и valueOf:

let user = {
  name: "John",
  money: 1000,

  // для хинта равного "string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // для хинта равного "number" или "default"
  valueOf() {
    return this.money;
  }
};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

//Как видим, получилось то же поведение, что и в предыдущем примере с Symbol.toPrimitive.
//Довольно часто мы хотим описать одно «универсальное» преобразование объекта к
// примитиву для всех ситуаций. Для этого достаточно создать один toString:

let user = {
  name: "John",

  toString() {
    return this.name;
  }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500

//В отсутствие Symbol.toPrimitive и valueOf, toString обработает все случаи преобразований к примитивам.
