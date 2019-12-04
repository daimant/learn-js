"use strict";

describe("sumSalaries", function() {
  it("возвращает 0, если пустой массив", function() {
    let obj = {};
    assert.equal(sumSalaries(obj), 0);
  });
});

describe("sumSalaries", function() {
  it("возвращает сумму 390 всех значений свойств обьекта", function() {
    let obj = { oneThousand: 100, twoThousand: 200, ninety: 90 };
    assert.equal(sumSalaries(obj), 390);
  });
});

describe("sumSalaries", function() {
  it("возвращает сумму 1000 всех значений свойств обьекта", function() {
    let obj = { first: 250, second: 250, third: 250, fourth: 250 };
    assert.equal(sumSalaries(obj), 1000);
  });
});
