const baseUrl = 'http://localhost:3030/jsonstore/users/';

export default {
	async getAll() {
		const response = await fetch(baseUrl);
		const data = await response.json();
		const users = Object.values(data);
		return users;
	},

	async getUser(userId) {
		const response = await fetch(`${baseUrl}${userId}`);
		const user = await response.json();
		return user;
	},

	async deleteUser(userId) {
		const options = {
			method: 'DELETE',
		}
		const response = await fetch(`${baseUrl}${userId}`, options);
		return response;
	},

	async userCreate(userData) {
		const data = transformUserData(userData);

		const options = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data)
		}

		const response = await fetch(baseUrl, options);
		return response;
	},

	async userEdit(userData, userId) {
		const data = transformUserData(userData);
		data._id = userId;

		const options = {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data),
		};

		const response = await fetch(`${baseUrl}${userId}`, options);
		return response;
	}
}

function transformUserData(userData) {
	const { country, city, street, streetNumber, ...transformedData } = userData;

	transformedData.address = { country, city, street, streetNumber };
	transformedData.createdAt = new Date().toISOString();
	transformedData.updatedAt = new Date().toISOString();

	return transformedData;
}
