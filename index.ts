
export function increment(num: number | string, increment: number = 1): number | string {
  const isStr = typeof num === 'string';
  const n = Number(num);
  if (isNaN(n)) throw new TypeError(isStr ? 'Input string must contain a valid number' : 'Input must be a valid number');

  if (Number.isInteger(n)) {
    const result = n + increment;
    return isStr ? String(result) : result;
  }

  const numStr = String(num);
  const dotIdx = numStr.indexOf('.');
  const decimalPlaces = dotIdx === -1 ? 0 : numStr.length - dotIdx - 1;

  const multiplier = 10 ** decimalPlaces;
  const convertedInteger = n * multiplier;
  const incrementedValue = convertedInteger + increment;
  const result = incrementedValue / multiplier;

  return isStr ? String(result) : result;
}
