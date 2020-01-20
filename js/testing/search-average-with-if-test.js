"use strict";

describe("должен вернуть среднее по массиву", function() {
  it("массив [3,1,2], должен вернуть 2", function() {
    assert.equal(searchAverage([3, 1, 2]), 2);
  });

  it("массив [-1,900,0], должен вернуть 0", function() {
    assert.equal(searchAverage([-1, 900, 0]), 0);
  });

  it("массив [1,50,100], должен вернуть 50", function() {
    assert.equal(searchAverage([1, 50, 100]), 50);
  });

  it("массив [-1000,1000,100500], должен вернуть 1000", function() {
    assert.equal(searchAverage([-1000, 1000, 100500]), 1000);
  });

  it("массив [-3,1,20], должен вернуть 1", function() {
    assert.equal(searchAverage([-3, 1, 20]), 1);
  });
});
