'use strict';
const Object1 = {
  name: 'Alexsander'
};
let Object2 = {
  name: 'Oleg'
};
const Object3 = {
  age: 25
};
console.log(Object1, Object2);
Object1.name = 'Mike';
Object2.name = 'Mark';
//Object1 = Object3; запрещено присвоение в константу указателя на новую ссылку
Object2 = Object3;
console.log(Object1, Object2);

/**
 * @param {string} name
 * @param {string} city
 * @returns {object} {name, city}
 */
const createUser = (name, city) => ({
  name,
  city
});
module.exports = createUser;
