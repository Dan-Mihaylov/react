import request from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/comments/';

export default {
	async create(commentData) {
		try {
			const result = await request(baseUrl, 'POST', commentData);
			return result;
		} catch (error) {
			console.error(error);
		}
	},

	async getAllGameComments(gameId) {
		try {
			const result = await request(baseUrl);
			const comments =  Object.values(result).filter(comment => comment.gameId === gameId);
			return comments;
		} catch (error) {
			return [];
		}
	}
}