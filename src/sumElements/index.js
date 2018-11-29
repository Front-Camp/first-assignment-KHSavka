/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  return arr.filter(function(val) {
    return isFinite(val) && !isNaN(val);
  }).reduce(function(acc, val) {
    return acc + val;
  });
  
  /*
  return arr.filter(val => isFinite(val) && !isNaN(val))
    .reduce((acc, val) => acc + val);
  */
};

export default sumElements;
