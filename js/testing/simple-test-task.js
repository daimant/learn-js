"use strict";

// пример

describe("pow", function() {
  it("возведение x в степень n", function() {
    assert.equal(pow(3, 2), 8);
  });
});

//Чтобы не писать вручную каждый блок it, мы можем генерировать их в цикле for:

describe("pow", function() {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} в степени 3 будет ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});

//Мы можем задать before/after функции, которые будут выполняться до/после тестов,
//а также функции beforeEach/afterEach, выполняемые до/после каждого it.
//Например:

describe("тест", function() {
  before(() => alert("Тестирование началось – перед тестами"));
  after(() => alert("Тестирование закончилось – после всех тестов"));

  beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
  afterEach(() => alert("После теста – заканчиваем выполнение теста"));

  it("тест 1", () => alert(1));
  it("тест 2", () => alert(2));
});

//Для обозначения математических ошибок функции JavaScript обычно возвращают NaN.
//Давайте делать также для некорректных значений n.

describe("pow", function() {
  // ...

  it("для отрицательных n возвращает NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
});

//Библиотека Chai содержит множество других подобных функций, например:
//assert.equal(value1, value2) – проверяет равенство value1 == value2.
//assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
//assert.notEqual, assert.notStrictEqual – проверяет неравенство и строгое неравенство соответственно.
//assert.isTrue(value) – проверяет, что value === true
//assert.isFalse(value) – проверяет, что value === false

//Также мы можем изолировать один тест и запускать только его, написав it.only вместо it:

describe("Возводит x в степень n", function() {
  it("5 в степени 1 будет 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  // Mocha будет запускать только этот блок
  it.only("5 в степени 2 будет 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 будет 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});
