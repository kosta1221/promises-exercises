/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
	return new Promise((resolve, reject) => {
		return promise.then(asyncTransformer).then(resolve).catch(reject);
	});
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
	return firstPromise.then(slowAsyncProcess).catch((error) => {
		throw error;
	});
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
	return function getUserByIdWithOrganization(userId) {
		return getUserById(userId).then((user) => {
			if (!user) {
				return;
			}
			return getOrganizationById(user.organizationId).then((organization) => {
				user.organization = { id: organization.id, name: organization.name };
				return user;
			});
		});
	};
}

module.exports = {
	flatMapPromise,
	chainTwoAsyncProcesses,
	makeGetUserByIdWithOrganization,
};
