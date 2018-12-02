/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  /*
  var flags = [];

  arr.forEach(val => {
    flags = flags.concat(val.flags);
  });

  return flags;
  */

  return arr.reduce((acc, val) => acc.concat(val.flags), []);
  //return arr.reduce((acc, val) => ({flags: acc.flags.concat(val.flags)})).flags;
};

export default getFlags;
