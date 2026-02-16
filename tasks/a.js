const input = "hello world"; // <-- пиши входные данные тут

let count = 0;
const vowels = "aeiou";

for (let char of input.toLowerCase()) {
  if (vowels.includes(char)) count++;
}

console.log(count);


const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

let count = 0;
const vowels = 'aeiou';

for (let char of input.toLowerCase()) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log(count);