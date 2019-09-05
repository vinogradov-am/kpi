'use strict';
const createUser = require('../../exercises-01/object');
test('test function createUser form object.js.', () => {
  const EXP_OBJ = {
    name: 'Marcus Airelius',
    city: 'Roma'
  };
  expect(createUser('Marcus Airelius', 'Roma')).toEqual(EXP_OBJ);
});
