'use strict';
const arr = ['string', 'number', 'number', 'object', 'boolean', 'string'];
const obj = {};

for (const item of arr) {
  item in obj ? obj[item]++ : (obj[item] = 1);
}

console.log(obj);
