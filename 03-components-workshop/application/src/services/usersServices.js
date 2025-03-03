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

}