// @ts-check

/**
 * @callback Calculator_2
 * @param { number } lhs
 * @param { number } rhs
 * @returns { number }
 */

/** 
 * @callback HOC
 * @param { Calculator_2 } callback
 * @returns { Calculator_2 }
 */

/** @type Calculator_2 */
function add(lhs, rhs) {
  return lhs + rhs;
}

/** @type Calculator_2 */
function multiply(lhs, rhs) {
  return lhs * rhs;
}

/** @type HOC */
function myHOC(callback) {
  return (lhs, rhs) => {
    const result = callback(lhs, rhs);
    console.log(`결과값: ${result}`);
    
    return result;
  }
}

/** @type Calculator_2 */
const addByHOC = myHOC(add);
const multiplyByHOC = myHOC(multiply);

addByHOC(3, 4);
multiplyByHOC(3, 4);
