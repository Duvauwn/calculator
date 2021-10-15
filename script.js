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
display = document.querySelector('#display');

value = document.createElement('p');
value.textContent = '0';

display.appendChild(value);

let operation = document.querySelectorAll('.operators')

let buttons = document.querySelector('#number');
number = document.querySelectorAll('.numbers');
number.forEach(element => {
    element.addEventListener('click', function () {
        let first = value.textContent;
        value.textContent += element.textContent;
        console.log(first);
    })
});
operation.forEach(operand => {
    operand.addEventListener('click', function () {
        let static = value.textContent;
        console.log(static);
        value.textContent += operand.textContent;
    })
})