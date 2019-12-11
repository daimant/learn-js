"use strict";

describe("calculator", function() {
  let calculator;
  before(function() {
    sinon.stub(window, "prompt");

    prompt.onCall(0).returns("2");
    prompt.onCall(1).returns("3");

    calculator = new Calculator();
    calculator.read();
  });

  it("при вводе 2 и 3 сумма должна быть 5", function() {
    assert.equal(calculator.sum(), 5);
  });

  it("при вводе 2 и 3 произведение должно быть 6", function() {
    assert.equal(calculator.mul(), 6);
  });

  after(function() {
    prompt.restore();
  });
});
