'use strict';
const inc1 = n => ++n;

const a = 5;
const b = inc1(a);
console.dir({ a, b });

const inc2 = num => ++num.n;
const obj = { n: 5 };
console.log('before inc2');
console.dir(obj);
inc2(obj);
console.log('after inc2');
console.dir(obj);



