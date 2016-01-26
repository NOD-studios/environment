# @nod/environment

Creates merged config object after parsing dotenv and current env variables through javascript.

Supports ES5, ES7, AMD, CommonJS, System and ES6 modules.
Works in node.js also should(?) work in browser.

[![GitHub tag][tag-image]][tag-url]
[![Build status][build-image]][build-url]
[![Dependency Status][david-image]][david-url]
[![Join the chat][gitter-image]][gitter-url]


# Usage:

## Installation:
```
npm install --save @nod/environment
```

## Examples:

```javascript
import { Environment } from '@nod/environment';

let environment = new Environment();

let { ENV, config } = environment;

//config is also environment variables but converted into object notation
console.log({ config, ENV });
```

## Configuring
```javascript
import { Environment, Configuration as EnvConfig } from '@nod/environment';
import path from 'path';
let environment = new Environment(new EnvConfig {
  root : path.resolve('.'), // root path for .env files
  files : [ // files to look in the path    
    '.env.local',
    '.env.production',
    '.env.test',
    '.env.development',
    '.env',
    '.env.nod'
  ],
  console // for outputting flow info
});
```

## Build and develop:
```bash
gulp
```
or
```bash
npm run build
npm run watch
```
Please check available gulp tasks with:
```bash
gulp -T
```

## API
All methods have strict type checking please check source code.

# ToDo:
- Gulp tasks as another dependency
- More detailed docs

# Contact:
[![Send e-mail][mail-image]][mail-url]
[![Join the chat][gitter-image]][gitter-url]

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://nod.st)
by [NOD studios](http://nod.st)


[logo-image]: ./image/logo.strap.png?raw=true
[repo-url]: https://github.com/NOD-studios/environment
[david-url]: https://david-dm.org/NOD-studios/environment
[david-image]: https://david-dm.org/NOD-studios/environment.svg
[gitter-image]: https://img.shields.io/badge/GITTER-join%20chat-green.svg
[gitter-url]: http://bit.ly/NOD-chat
[mail-image]: https://img.shields.io/badge/send-email-green.svg
[mail-url]: mailto:hey@nod.st
[tag-image]: https://img.shields.io/github/tag/NOD-studios/environment.svg
[tag-url]: https://github.com/NOD-studios/environment/tags
[build-image]: https://travis-ci.org/NOD-studios/environment.svg
[build-url]: https://travis-ci.org/NOD-studios/environment
