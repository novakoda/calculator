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
  if (displayNumber === '0' || answered === true) {
    displayNumber = number.toString();
    updateDisplay(displayNumber);
    if (answered === true) {answered = false;};
  } else {
  displayNumber = displayNumber.toString() + number.toString();
  updateDisplay(displayNumber);
  };
};

function storeNumber(number, op) {
  operator = op.toString();
  previousNumber = displayNumber.toString() + ' ' + operator;
  displayNumber = '0';
  updateDisplay(displayNumber, previousNumber);
};

function equalize() {
  num1 = Number(previousNumber.slice(0,-2));
  num2 = Number(displayNumber);
  displayNumber = operate(num1, operator, num2).toString();
  previousNumber = '0';
  updateDisplay(displayNumber, '');
  answered = true;
};

function clear() {
  displayNumber = '0';
  previousNumber = '0';
  operator = '';
  answered = false;
  updateDisplay(displayNumber, '');
};

function updateDisplay(current, history) {
  currentDisplay.innerHTML = current;
  if (history !== undefined) {
    historyDisplay.innerHTML = history;
  }
};

function keyPressed(key) {
  if (!isNaN(key) | key === '.') {
    numberClicked(key);
  } else if (key === '+' | key === '-' | key === '*' | key === '/') {
    storeNumber(displayNumber, key);
  } else if (key === 'Enter') {
    equalize();
  } else if (key === 'Backspace') {
    displayNumber = '0';
    updateDisplay(displayNumber);
  };
};

let displayNumber = '0';
let previousNumber = '0';
let operator = '';
let answered = false;

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const equalButton = document.querySelector('.equal');
const backButton = document.querySelector('.back');
const clearButton = document.querySelector('.clear');
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

clearButton.addEventListener('click', () => {
  clear();
});

backButton.addEventListener('click', () => {
  displayNumber = '0';
  updateDisplay(displayNumber);
});



window.addEventListener('keydown', (k) => {
  let keyInput = k.key;
  let validInput = /^\d|\.|\+|\-|\*|\/|Backspace|Enter/;

  if (validInput.test(keyInput)) {
    keyPressed(keyInput);
  }
});
