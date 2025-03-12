import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/games/';

export default {
	async create(gameData) {
		try {
			const result = await request(baseUrl, 'POST', gameData);
			return result;
		} catch (error) {
			console.error(error);
		}
	},

	async getAll() {
		try {
			const result = await request(baseUrl);
			return Object.values(result);
		} catch (error) {
			console.error(error);
		}
	},

	async getGame(gameId) {
		try {
			const result = await request(`${baseUrl}${gameId}`);
			return result;
		} catch (error) {
			console.error(error);
		}
	},

	async editGame(gameId, gameData) {
		try {
			const result = await request(`${baseUrl}${gameId}`, 'PUT', gameData)
			return result;
		} catch (error) {
			console.error(error);
		}
	},

	async deleteGame(gameId) {
		try {
			const result = await request(`${baseUrl}${gameId}`, 'DELETE');
			return result;
		} catch (error) {
			console.error(error);
		}
	}
}