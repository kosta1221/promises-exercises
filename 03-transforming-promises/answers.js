/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
/* * If the first promise rejects with an error, the new promise rejects with that error.
 * If the first promise resolves with a result, it calls the transformer with the value as an argument.
 * If the transformer returns with a value, the new promise resolves with that value.
 * If the transformer throws an error, the new promise rejects with that error. */
function mapPromise(promise, transformer) {
	return new Promise((resolve, reject) => {
		promise
			.then((value) => {
				const valueOfTransformer = transformer(value);
				try {
					resolve(valueOfTransformer);
				} catch (error) {
					throw new Error(error);
				}
			})
			.catch((error) => {
				reject(error);
			});
	});
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */

/* In this exercise, we'll be passing a promise that resolves with a number or a string.  We want to return with a promise such that:

* If the input promise resolves with a number, the output promise resolves with the square of that number.
* If the input promise resolves with a string that we can turn into a number (like "1234"), the output promise resolves with the square of that number (1522756 in this example)
* If the input promise resolves with a string that we cannot turn into a number (like "asdf"), then we reject with a message like "Cannot convert 'asdf' to a number!"
* If the input promise rejects with an error, the output promise rejects with the same error */

function squarePromise(numberPromise) {
	return numberPromise
		.then((value) => {
			if (typeof value === "number") {
				return Math.pow(value, 2);
			} else if (typeof value === "string") {
				if (!Number.isNaN(+value)) {
					return Math.pow(+value, 2);
				} else {
					return Promise.reject(`Cannot convert '${value}' to a number!`);
				}
			}
		})
		.catch((error) => {
			return Promise.reject(error);
		});
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
	return squarePromise(promise).catch(() => {
		return 0;
	});
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
	return promise.then(
		(err) => {
			throw err;
		},
		(value) => {
			return value;
		}
	);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
	mapPromise,
	squarePromise,
	squarePromiseOrZero,
	switcheroo,
};
