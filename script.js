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
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract(a, b);
    }
    else if (operator == '*') {
        return multiply(a, b);
    }
    else if (operator == '/') {
        return divide(a, b);
    }
}

function done() {
    let after = parseInt(downer.textContent);
    final = operate(op, left, after);
    upper.textContent = final;
    downer.textContent = '0';
}

let display = document.querySelector('#display');
let upper = document.createElement('div');
let downer = document.createElement('div');
upper.textContent = '0';
display.appendChild(upper);
display.appendChild(downer);


let numbers = document.querySelectorAll('.numbers')
numbers.forEach((button) => {
    button.addEventListener('click', function () {
        downer.textContent += button.textContent;
    })
})

let before;
let op;
let left;

let operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', function () {
        if (upper.textContent == '0') {
            upper.textContent = downer.textContent + button.textContent;
            downer.textContent = '';
            before = upper.textContent;
            left = parseInt(before.substring(0, before.length - 1));
            op = before.charAt(before.length - 1);
            console.log([left, op]);
            return [left, op];
        }
        else if (upper.textContent != '0') {
            upper.textContent += button.textContent;
        }

    })
})
let equal = document.querySelector('#equal');
equal.addEventListener('click', done)
