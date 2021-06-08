# yandex-tank-ammo

Generate ammo for yandex-tank

# Install

```sh
npm i yandex-tank-ammo
```

# Usage

## GET method

Script:
```js
  const yandexTankAmmo = require('yandex-tank-ammo');

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

  const ammo = yandexTankAmmo(list);
```

ammo
```js
123 qqq
GET / HTTP/1.1
Host: yandex.ru
Authorization: Bearer 8f81c7fe-f5a1-4322-80fa-b54a6553bba9
User-Agent: xxx (shell 1)

```

## POST method

Script:
```js
  const yandexTankAmmo = require('yandex-tank-ammo');

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

  const ammo = yandexTankAmmo(list);
```

ammo
```js
170 qqq
POST / HTTP/1.1
Host: yandex.ru
Authorization: Bearer token
Content-Type: application/json; charset=utf-8
Content-Length: 33

{"filters":{},"size":24,"page":1}

```

# Test

```sh
npm run test
```

# License

MIT © [nlapshin](https://www.npmjs.com/~nlapshin)