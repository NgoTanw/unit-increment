import { increment } from './index';

function testRandomNumbers(count: number = 20): void {
  for (let i = 0; i < count; i++) {
    const intPart = Math.floor(Math.random() * 1000);
    const decimals = Math.floor(Math.random() * 6);
    let num: number | string;
    if (decimals === 0) {
      num = intPart;
    } else {
      const decPart = Math.floor(Math.random() * Math.pow(10, decimals));
      let decStr = String(decPart);
      if (decStr.length < decimals) {
        decStr = Array(decimals - decStr.length + 1).join('0') + decStr;
      }
      num = parseFloat(intPart + '.' + decStr);
    }
    const result = increment(num);
    console.log(`Input: ${num} -> Output: ${result}`);
  }
}

testRandomNumbers(50);

function testFailCases() {
  const cases = [null, undefined, {}, [], 'abc', NaN, () => {}, Symbol('x')];
  cases.forEach((input, idx) => {
    try {
      increment(input as any);
      console.log(`Fail case ${idx}: Did NOT throw for input:`, input);
    } catch (e) {
      console.log(`Fail case ${idx}: Threw as expected for input:`, input);
    }
  });
}

testFailCases();

function testFloatingPointCases() {
  const cases = [
    0.1 + 0.2, // 0.30000000000000004
    0.1 + 0.7, // 0.7999999999999999
    0.2 + 0.4, // 0.6000000000000001
    1.005,     // 1.005
    2.675,     // 2.675
    0.1234567890123456, // long decimal
    '0.1',     // string input
    '0.30000000000000004', // string with floating error
  ];
  cases.forEach((input, idx) => {
    try {
      const result = increment(input as any);
      console.log(`Floating point case ${idx}: Input: ${input} -> Output: ${result}`);
    } catch (e) {
      console.log(`Floating point case ${idx}: Threw for input:`, input);
    }
  });
}

testFloatingPointCases();
