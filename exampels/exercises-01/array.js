'use strict';
const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+79654874521' },
  { name: 'Gaius Octavius', phone: '+79654874158' }
];
/**
 *
 *
 * @param {string} name
 * @returns {string} phone
 */
const findPhoneByName = name => {
  for (const item of phoneBook) {
    if (item.name.includes(name)) return item.phone;
  }
};

module.exports = findPhoneByName;
