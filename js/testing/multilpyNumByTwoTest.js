"use strict";

describe("multiplyNumeric", function() {
  it("умножает все числовые значения свойств первого объекта на 2", function() {
    let menu = {
      width: 25,
      height: 500,
      title: "My menu"
    };
    multiplyNumeric(menu);
    assert.equal(menu.width, 50);
    assert.equal(menu.height, 1000);
    assert.equal(menu.title, "My menu");
  });

  it("функция ничего не возвращает", function() {
    assert.isUndefined(multiplyNumeric({}));
  });
});
