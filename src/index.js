const httpRawRequest = require('http-raw-request');

module.exports = {
	generate(list = []) {
		let ammo = '';

		list.forEach(item => {
			const requestString = makeRequest(item);
			const title = makeTitle(requestString, item.tag);

			ammo += `${title}\r\n${requestString}\r\n`;
		});

		return ammo;
	}
};

function makeRequest(item) {
	const { method, httpVersion, url } = item;

	const params = {
		method,
		httpVersion,
		url,
	};

	let headers = item.headers || {};
	let body = item.body;

	if (!headers.Host) {
		headers = {
			...{ Host: item.host },
			...headers,
		};
	}

	if (body) {
		if (isObject(body)) {
			body = JSON.stringify(body);

			headers['Content-Type'] = 'application/json; charset=utf-8';
			headers['Content-Length'] = getBytes(body);
		} else {
			headers['Content-Length'] = getBytes(body);
		}
	}

	return httpRawRequest.toString(params, headers, body);
}

function makeTitle(requestString, tag = '') {
	const size = `${getBytes(requestString) + 1}`;

	return `${size} ${tag}`;
}

function isObject(obj) {
	return typeof obj === 'object' && obj !== null;
}

function getBytes(string) {
	return Buffer.from(string).length;
}