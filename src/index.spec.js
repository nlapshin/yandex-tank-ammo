const { expect } = require('chai');
const yandexTankAmmo = require('./');

describe('yandex-tank-ammo', () => {
	it('should create ammo config with GET method', () => {
		const list = [
			{
				'host': 'yandex.ru',
				'method': 'GET',
				'httpVersion': '1.1',
				'tag': 'qqq',
				'url': '/',
				'headers': {
					'Authorization': 'Bearer 8f81c7fe-f5a1-4322-80fa-b54a6553bba9',
					'User-Agent': 'xxx (shell 1)'
				},
			},
		];

		const ammo = yandexTankAmmo.generate(list);

		expect(ammo).to.equal('123 qqq\r\nGET / HTTP/1.1\r\nHost: yandex.ru\r\nAuthorization: Bearer 8f81c7fe-f5a1-4322-80fa-b54a6553bba9\r\nUser-Agent: xxx (shell 1)\r\n\r\n\r\n');

	});

	it('should create ammo config with POST method', () => {
		const list = [
			{
				'method': 'POST',
				'host': 'yandex.ru',
				'tag': 'qqq',
				'headers': {
					'Authorization': 'Bearer token',
				},
				'body': { 'filters': {}, 'size': 24, 'page': 1 },
				'path': '/ecommerce/goods/eshop/catalog'
			},
		];

		const ammo = yandexTankAmmo.generate(list);

		expect(ammo).to.equal('170 qqq\r\nPOST / HTTP/1.1\r\nHost: yandex.ru\r\nAuthorization: Bearer token\r\nContent-Type: application/json; charset=utf-8\r\nContent-Length: 33\r\n\r\n{"filters":{},"size":24,"page":1}\r\n\r\n\r\n');
	});
});