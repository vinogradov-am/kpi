'use strict';
const findPhoneByName = require('../../exercises-01/hash');

test('test function findPhoneByName', () => {
  const name = 'Marcus Aurelius';
  const phone = '+79654874521';
  expect(findPhoneByName(name)).toBe(phone);
});

