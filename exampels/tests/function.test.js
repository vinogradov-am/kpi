'use strict';
const { average, square, cube } = require('../functions');
test('average 0,100 = 50', () => {
  expect(average(0, 100)).toBe(50);
});
test('sqare 5 = 25', () => {
  expect(square(5)).toBe(25);
});
test("cube of 5 = 125",()=>{
    expect(cube(5)).toBe(125);
})
