const { isNumberObject } = require('util/types');

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const arr = input.split(' ').map(Number);

let max = arr[0];
for (let num of arr) {
  if (num > max) {
    max = num;
  }
}

console.log(max);


const input = require('fs').readFileSync('/dev/stdin','utf8').trim();
const n = Number(input) "для одного числа"
const [a, b] = input.split(' ').map(Number);
console.log(a + b); "Если нужно вводить несколько чисел"
const lines = input.split('\n'); "dliya neskolkih strok"
const s = input; "esli stroka"

const n = Number(input);
console.log(n % 2 === 0 ? "Even" : "Odd"); "chetnoe nechetnoe"

console.log(input.split('').reverse().join(''));"razvorot stroki"

const s = input;
console.log(s === s.split('').reverse().join('') ? "YES" : "NO");"polindrom"

const words = input.split(' ');
let longest = '';
for (let w of words) {
  if (w.length > longest.length) longest = w;
}
console.log(longest);"Самое длинное слово"

const words = input.split(' ');
let longest = '';
for (let w of words) {
  if (w.length > longest.length) longest = w;
}
console.log(longest);"сортировка чисел"

const n = Number(input);
for (let i = 1; i <= n; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
} " все цифры до 16 допустим"

const n = Number(input);
let prime = n > 1;
for (let i = 2; i * i <= n; i++) {
  if (n % i === 0) prime = false;
}
console.log(prime ? "YES" : "NO");"проверка простого числа"

const arr = input.split(' ');
const target = arr.pop();
console.log(arr.indexOf(target));"найти индекс элемента"

const arr = input.split(' ').map(Number);
let ok = true;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr[i-1]) ok = false;
}
console.log(ok ? "YES" : "NO");"проверка массива на возрастание"