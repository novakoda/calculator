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
    case '×':
      answer = multiply(num1, num2);
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

function numberClicked(number) {
  if (displayNumber == 0 || answered === true) {
    displayNumber = number.toString();
    currentDisplay.innerHTML = displayNumber;
    if (answered === true) {answered = false;};
  } else {
  displayNumber = displayNumber.toString() + number.toString();
  currentDisplay.innerHTML = displayNumber;
  };
};

function storeNumber(number, op) {
  operator = op.toString();
  previousNumber = displayNumber.toString() + ' ' + operator;
  displayNumber = '0';
  historyDisplay.innerHTML = previousNumber;
  currentDisplay.innerHTML = displayNumber;
};

function equalize() {
  num1 = Number(previousNumber.slice(0,-2));
  num2 = Number(displayNumber);
  displayNumber = operate(num1, operator, num2).toString();
  previousNumber = '0';
  historyDisplay.innerHTML = '';
  currentDisplay.innerHTML = displayNumber;
  answered = true;
};

let displayNumber = '0';
let previousNumber = '0';
let operator = '';
let answered = false;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equal]');
const backButton = document.querySelector('[data-back]');
const clearButton = document.querySelector('[data-clear]');
const currentDisplay = document.getElementById('result');
const historyDisplay = document.getElementById('history');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    numberClicked(button.innerHTML);
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    storeNumber(displayNumber, button.innerHTML);
  });
});

equalButton.addEventListener('click', () => {
  equalize();
});
