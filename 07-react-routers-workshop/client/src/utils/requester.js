export default async function request(url, method, data, options={}) {

	if (method !== 'GET') {
		options.method = method;
	}

	if (data) {
		options = {
			...options,
			headers: {
				"Content-type": "application/json",
				...options.headers,
			},
			body: JSON.stringify(data)
		}
	}
	
	const response = await fetch(url, options);

	if (response.status === 204) {
		return;
	}

	const result = await response.json();

	return result;
}
