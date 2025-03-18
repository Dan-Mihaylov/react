export default async function request(url, method, data, options={}) {

	if (method !== 'GET') {
		options.method = method;
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
	const result = await response.json();
	return result;
}