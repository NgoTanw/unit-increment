# unit-increment

A function that increments a number by its lowest precision value or a custom increment. It supports both numbers and numeric strings, and handles floating point precision issues.

[![npm version](https://img.shields.io/npm/v/unit-increment.svg)](https://www.npmjs.com/package/unit-increment)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Features
- Increments numbers and numeric strings by their smallest unit or a custom value
- Handles floating point precision issues
- Throws errors for invalid input
- Supports both CommonJS and ES Modules
- TypeScript support

## Usage


### CommonJS
```js
const increment = require('unit-increment');
console.log(increment(10.16)); // 10.17
```

### ES Module
```js
import increment from 'unit-increment';
console.log(increment(10.16)); // 10.17
```

### TypeScript
```ts
import increment from 'unit-increment';
const result: number = increment(10.123); // 10.124
```

### More Examples
```js
increment(10);      // 11
increment(10.1);    // 10.2
increment(0.009);   // 0.01
increment('10.16', 0.02); // '10.18'

// Floating point cases
increment(0.1 + 0.2); // 0.301
increment(0.1 + 0.7); // 0.8
increment(1.005);     // 1.006
increment('0.30000000000000004'); // '0.301'

// Failure cases (throws TypeError)
try { increment('abc'); } catch (e) { /* Throws for invalid string */ }
try { increment({}); } catch (e) { /* Throws for object */ }
```

## Installation

```sh
npm install unit-increment
```

## License
MIT

