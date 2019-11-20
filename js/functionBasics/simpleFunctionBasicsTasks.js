"use strict";

//  В нижеприведённом примере функции передаются два параметра: from и text.

function showMessage(from, text) {
  // аргументы: from, text
  alert(from + ": " + text);
}

showMessage("Аня", "Привет!"); // Аня: Привет! (*)
showMessage("Аня", "Как дела?"); // Аня: Как дела? (**)

//  Вот ещё один пример: у нас есть переменная from, и мы передаём её функции.
//  Обратите внимание: функция изменяет значение from, но это изменение
//  не видно снаружи. Функция всегда получает только копию значения:

function showMessage(from, text) {
  from = "*" + from + "*"; // немного украсим "from"

  alert(from + ": " + text);
}

let from = "Аня";

showMessage(from, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
alert(from); // Аня

//  В данном случае "текст не добавлен" это строка, но на её месте могло бы
//  быть и более сложное выражение, которое бы вычислялось и присваивалось
//  при отсутствии параметра. Например:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() выполнится только если не передан text
  // результатом будет значение text
}

//  Простое число
//  Первый вариант использует метку nextPrime:

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // простое
  }
}

//  Второй вариант использует дополнительную функцию isPrime(n) для проверки
//  на простое:

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
