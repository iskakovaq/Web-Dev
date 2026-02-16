const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const n = Number(input);

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);

const n = Number(input);" sum chisel ot 1 do n"
console.log(n * (n + 1) / 2);

let n = Number(input);"factorial"
let res = 1;
for (let i = 1; i <= n; i++) res *= i;
console.log(res);

console.log(input.replace('-', '').length);"kolichestvo cifr v chisle"

let sum = 0;
for (let ch of input) sum += Number(ch);
console.log(sum);"summa cifr chisla"

const arr = input.split(' ').map(Number);
console.log(Math.min(...arr));"minimum mssiv"

const arr = input.split(' ').map(Number);
let count = arr.filter(x => x > 0).length;
console.log(count);"kol/vo polozhitelnyh chisel"

const arr = input.split(' ').map(Number);
const avg = arr.reduce((a,b)=>a+b,0)/arr.length;
console.log(avg);"среднее арифметическое число"

