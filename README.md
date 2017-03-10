# log-reject-error
> Dead Simple unhandledRejection handler

[![Build Status](https://img.shields.io/travis/magicdawn/log-reject-error.svg?style=flat-square)](https://travis-ci.org/magicdawn/log-reject-error)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/log-reject-error.svg?style=flat-square)](https://codecov.io/gh/magicdawn/log-reject-error)
[![npm version](https://img.shields.io/npm/v/log-reject-error.svg?style=flat-square)](https://www.npmjs.com/package/log-reject-error)
[![npm downloads](https://img.shields.io/npm/dm/log-reject-error.svg?style=flat-square)](https://www.npmjs.com/package/log-reject-error)
[![npm license](https://img.shields.io/npm/l/log-reject-error.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Note

Use this module in start of Application / Script / Framework, not in any library.
Just like [loud-rejection](https://github.com/sindresorhus/loud-rejection) do.

## Install
```sh
$ npm i log-reject-error --save
```

## API

```js
const logRejectError = require('log-reject-error')
logRejectError(log) // log defaults to `console.error`
```

### `register`

```js
require('log-reject-error/register')

// equals to
require('log-reject-error')()

// convenient for ES6 import
import 'log-reject-error/register'
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org