import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
	async create(gameData) {
		try {
			const result = await request(baseUrl, 'POST', gameData);
			return result;
		} catch (error) {
			console.error(error);
		}
	},
}