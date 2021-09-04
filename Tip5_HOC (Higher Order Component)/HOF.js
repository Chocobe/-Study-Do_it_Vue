/**
 * @callback Calculator
 * @param { number } lhs
 * @param { number } rhs
 * @returns { number }
 */

/**
 * @callback HOC
 * @param { Calculator } callback
 * @returns { Calculator }
 */

/** @type Calculator */
const sum = (lhs, rhs) => lhs + rhs;

/** @type Calculator */
const sub = (lhs, rhs) => lhs - rhs;

/** @type Calculator */
const mul = (lhs, rhs) => lhs * rhs;

/** @type Calculator */
const div = (lhs, rhs) => lhs / rhs;

/** @type Calculator */
const pow = (lhs, rhs) => Math.pow(lhs, rhs);

/** @type HOF */
const myHOF = callback => {
	return (lhs, rhs) => {
		const result = callback(lhs, rhs);
		console.log(result);
		return result;
	}
}

const sumByHOF = myHOF(sum);
sumByHOF(10, 2); // 12

const subByHOF = myHOF(sub);
subByHOF(10, 2); // 8

const mulByHOF = myHOF(mul);
mulByHOF(10, 2); // 20

const divByHOF = myHOF(div);
divByHOF(10, 2); // 5

const powByHOF = myHOF(pow);
powByHOF(10, 2); // 100