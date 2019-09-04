'use strict';

/**
 * @param {integers} a
 * @param {integers} b
 * @returns {integers} average between a ,b
 */
function average(a, b) {
  let count = 0;
  let sum = 0;
  const MAX = Math.max(a, b);
  const MIN = Math.min(a, b);
  for (let i = MIN; i <= MAX; i++) {
    count++;
    sum += i;
  }
  return sum / count;
}

/**
 * @param {integers} x
 * @returns {integers} square x
 */
function square(x) {
  return x ** 2;
}

/**
 * @param {integers} x
 * @returns {integers} cube of x
 */
function cube(x) {
  return x ** 3;
}
for (let i = 1; i <= 10; i++) {
  console.log(average(square(i), cube(i)));
}
module.exports = { average, square, cube };
