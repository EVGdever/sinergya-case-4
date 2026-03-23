const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const result = document.getElementById('result');

function getNumbers() {
  const a = Number(firstInput.value);
  const b = Number(secondInput.value);
  if (firstInput.value.trim() === '' || secondInput.value.trim() === '' || Number.isNaN(a) || Number.isNaN(b)) {
    return null;
  }
  return { a, b };
}

function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  return a - b;
}

function product(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function calculate(operation) {
  const numbers = getNumbers();
  if (!numbers) {
    result.textContent = 'Ошибка: введите числа';
    return;
  }
  result.textContent = operation(numbers.a, numbers.b);
}

document.getElementById('sum').addEventListener('click', () => calculate(sum));
document.getElementById('difference').addEventListener('click', () => calculate(difference));
document.getElementById('product').addEventListener('click', () => calculate(product));
document.getElementById('division').addEventListener('click', () => calculate(division));
