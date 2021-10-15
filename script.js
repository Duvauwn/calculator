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

generate = document.createElement('p');
generate.textContent = '0';

display.appendChild(generate)

let buttons = document.querySelectorAll('#number');
for (let i = 0; i < 9; i++) {
    buttons.forEach(button, function () {
        button.addEventListener('click', function () {
            generate.textContent = button.textContent;
        })
    })
}