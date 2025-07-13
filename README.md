# increment

A function that increments a number by its lowest precision value or a custom increment. It supports both numbers and numeric strings, and handles floating point precision issues.

## Usage

```js
const increment = require('increment');

console.log(increment(10));      // 11
console.log(increment(10.1));    // 10.2
console.log(increment(10.16));   // 10.17
console.log(increment(10.123));  // 10.124
console.log(increment(0.009));   // 0.01
console.log(increment('10.16', 0.02)); // '10.18'

// Floating point cases
console.log(increment(0.1 + 0.2)); // 0.30000000000000004 -> 0.301
console.log(increment(0.1 + 0.7)); // 0.7999999999999999 -> 0.8
console.log(increment(1.005));     // 1.005 -> 1.006
console.log(increment('0.30000000000000004')); // '0.301'

// Failure cases (throws TypeError)
try { increment('abc'); } catch (e) { console.log('Throws for invalid string'); }
try { increment({}); } catch (e) { console.log('Throws for object'); }
```

## Installation

```
npm install increment
```

## License
MIT
