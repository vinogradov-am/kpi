'use strict';
const { average, square, cube } = require('../../exercises-01/functions');
test('average 0,100 = 50', () => {
  expect(average(0, 100)).toBe(50);
});
test('average 100, 0 = 50', () => {
  expect(average(100, 0)).toBe(50);
});
test('sqare 5 = 25', () => {
  expect(square(5)).toBe(25);
});
test('cube of 5 = 125', () => {
  expect(cube(5)).toBe(125);
});
