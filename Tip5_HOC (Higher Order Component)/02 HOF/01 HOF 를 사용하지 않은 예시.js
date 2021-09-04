// @ts-check

/**
 * @callback Calculator
 * @param { number } lhs
 * @param { number } rhs
 * @returns { number }
 */

/** @type Calculator */
function addAndLog(lhs, rhs) {
  const result = lhs + rhs;
  console.log(`결과값: ${result}`);

  return result;
}

/** @type Calculator */
function multiplyAndLog(lhs, rhs) {
  const result = lhs * rhs;
  console.log(`결과값: ${result}`);

  return result;
}

addAndLog(1, 2);
multiplyAndLog(2, 3);
