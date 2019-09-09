'use strict';
const arr = ['hello', 5, 12, -200, false, 'world'];
const obj = {};

for (const item of arr) {
  const type = typeof item;
  type in obj ? obj[type]++ : (obj[type] = 1);
}

console.log(obj);
