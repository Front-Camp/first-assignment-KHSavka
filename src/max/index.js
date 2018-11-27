/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
/*
const max = arr => {
  const reducer = (prev, current) => Math.max(prev, current);
  const isNumber = val => isFinite(val) && !isNaN(val);

  return arr.filter(isNumber).reduce(reducer);
};
*/
const max = arr => {
  arr = arr.filter(function(val) {
    if (!isFinite(val) || isNaN(val)) {
      return false;
    } else {
      return true;
    }
    /*
      if (isFinite(val) && !isNaN(val)) {
        return true;
      }

      return isFinite(val) && !isNaN(val);
    */
  });

  var max = arr[0];
  arr.forEach(val => {
    if (val > max) {
      max = val;
    }
  });

  return max;
};


export default max;