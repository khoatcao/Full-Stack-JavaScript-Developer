const { sum, concat, lgNum} = require('./ex1');

const numbers = [1,2,3,5,6];
const arr = [1,2,3,5,6];

const result = sum(numbers);
const result1 = concat(numbers, arr);
const lgResult = lgNum(numbers);
console.log(result);
console.log(result1.join(''));
console.log(lgResult);


