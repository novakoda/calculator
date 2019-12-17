function add(num1, num2) {
  return num1 + num2;
};

function  subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
};

function divide(num1, num2) {
  return num1 / num2;
};

function operate(num1, op, num2) {
  let answer = 0;
  switch (op) {
    case '+':
      answer = add(num1, num2);
      break;
    case '-':
      answer = subtract(num1, num2);
      break;
    case '*':
      answer = multiply(num1, num2);
      break;
    case '/':
      answer = divide(num1, num2);
      break;
  };
  return answer;
};

function updateDisplay(number) {
  displayNumber = displayNumber.toString() + number.toString();
  resultDisplay.innerHTML = displayNumber;
};

let displayNumber = '0';

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelectorAll('[data-equal]');
const backButton = document.querySelectorAll('[data-back]');
const clearButton = document.querySelectorAll('[data-clear]');
const resultDisplay = document.getElementById('result');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    updateDisplay(button.innerHTML);
  });
});
