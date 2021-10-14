//operator functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(operator, a, b) {
    if (operator == add) {
        return add(a, b);
    }
    else if (operator == subtract) {
        return subtract(a, b);
    }
    else if (operator == multiply) {
        return multiply(a, b);
    }
    else if (operator == divide) {
        return divide(a, b);
    }
}
//Manipulating the DOM
let numbers = document.querySelector('#numbers');

for (let i = 0; i <= 9; i++) {
    let number = document.createElement('button');
    number.classList.add('number');
    number.textContent = i;

    numbers.appendChild(number);
}