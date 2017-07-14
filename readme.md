# mega-url-regex

[![Build Status](https://travis-ci.org/jlobos/mega-url-regex.svg?branch=master)](https://travis-ci.org/jlobos/mega-url-regex)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Regular expression for matching [MEGA](https://mega.nz) URLs

## Install

```bash
$ npm install --save mega-url-regex
```

## Usage 

```js
const megaURLRegex = require('mega-url-regex')

megaURLRegex().test('download https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A')
// true

megaURLRegex({exact: true}).test('download https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A')
// false

megaURLRegex({folder: false}).test('https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A')
// false

megaURLRegex().test('https://mega.nz/#!sOphlKhZ!zVy1J-3h7UmUhmsPUEgKk790xvxKsWQ8aR2to10artg')
// true

megaURLRegex({file: false}).test('https://mega.nz/#!sOphlKhZ!zVy1J-3h7UmUhmsPUEgKk790xvxKsWQ8aR2to10artg')
// false

'valid https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A missign key https://mega.nz/#!sOphlKhZ'.match(megaURLRegex())
// ['https://mega.nz/#F!n85ERTjJ!_OuiQelnEHafYWa16I_G9A']
```

## API

### megaURLRegex(options)

Returns a regex for matching [MEGA](https://mega.nz) URLs.

#### options

Type: `Object`

##### exact

Type: `boolean`<br>
Default: `false`

Only match an exact valid MEGA URLs, id and key provided.

##### folder

Type: `boolean`<br>
Default: `true`

Not match folder URLs.

##### file

Type: `boolean`<br>
Default: `true`

Not match file URLs.

## License

MIT © [Jesus Lobos](https://jlobos.com/)
