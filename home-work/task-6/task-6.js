let input;
const numbers = [];
let total = 0;

do {
  let input = prompt('Введите число');
  if (input === null) {
    break;
  }
  input = Number(input);
  numbers.push(input);
  total += input;
} while (true);
console.log(`Общая сумма чисел равна ${total}`);
