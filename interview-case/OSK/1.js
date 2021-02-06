const a = { b: 10, c: 20, d:10 };
const b = { b: 10, c: 20 };
const c = { b: 10, c: 20 };
const d = { b: 10, c: 30 };

const comparison = (obj1, obj2) => {
  for (let i in a) {
    if (obj2[i] !== obj1[i]) return 'Objects is different';
  }

  return 'Objects is the same';
};

console.log(comparison(a, b));
console.log(comparison(c, d));
