/**
 * @callback Calculator
 * @param { number } lhs
 * @param { number } rhs
 * @returns { number }
 */

/**
 * @callback HOF
 * @param { Calculator } callback
 * @returns { Calculator }
 */

/** @type Calculator */
const sum = (lhs, rhs) => {
	return lhs + rhs;
}

/** @type Calculator */
const sub = (lhs, rhs) => {
	return lhs - rhs;
}

/** @type Calculator */
const mul = (lhs, rhs) => {
	return lhs * rhs;
}

/** @type Calculator */
const div = (lhs, rhs) => {
	return lhs / rhs;
}

/** @type Calculator */
const pow = (lhs, rhs) => {
	return Math.pow(lhs, rhs);
}

/** @type HOF */
const myHOF = callback => {
	return (lhs, rhs) => {
		const result = callback(lhs, rhs);
		console.log(result);
	}
}

const sumByHOF = myHOF(sum);
const subByHOF = myHOF(sub);
const mulByHOF = myHOF(mul);
const divByHOF = myHOF(div);
const powByHOF = myHOF(pow);

sumByHOF(10, 2); // 12
subByHOF(10, 2); // 8
mulByHOF(10, 2); // 20
divByHOF(10, 2); // 5
powByHOF(10, 2); // 100