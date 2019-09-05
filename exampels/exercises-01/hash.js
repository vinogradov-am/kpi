'use strict';
const hash = {
  'Marcus Aurelius': '+79654874521',
  'Gaius Octavius': '+79654874158',
};

/**
 *
 *
 * @param {string} name
 * @returns {string} number
 */
const findPhoneByName = name => hash[name];

module.exports = findPhoneByName;

