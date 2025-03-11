export default async function request(url, method, data) {
	let options = {};

	if (method !== 'GET') {
		options = {
			method
		}
	}

	if (data) {
		options = {
			...options,
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(data)
		}
	}

	const response = await fetch(url, options);
	const data = await response.json();
	return data;
}