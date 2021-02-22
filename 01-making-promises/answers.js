/**
 *
 * EXERCISE 1
 *
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3() {
	const promise = new Promise((res, rej) => {
		res(3);
	});
	return promise;
}
/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
	const promise = new Promise((res, rej) => {
		rej("Boo!");
	});
	return promise;
}

/**
 *
 * EXERCISE 3
 *
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve) {
	return new Promise((resolve, reject) => {
		if (itShouldResolve) {
			resolve();
		} else if (!itShouldResolve) {
			reject();
		}
	});
}

/**
 *
 * EXERCISE 4
 *
 * @param {any} value
 * @param {number} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs) {
	/* Return a promise that resolves with the value after delayInMs */
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(value);
		}, delayInMs);
	});
}

module.exports = {
	makePromiseResolveWith3,
	makePromiseRejectWithBoo,
	makePromiseWithConstructor,
	makeDelayPromise,
};
