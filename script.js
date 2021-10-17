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

let str;
let op;
let left;
let regex = /\+|\-|\*|\//;

let operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', function () {
        if (regex.test(upper.textContent) == true) {
            operators.disabled = true;
        }
        else {
            if (upper.textContent == '0') {
                upper.textContent = downer.textContent + button.textContent;
                downer.textContent = '';
                str = upper.textContent;
                left = parseInt(str.substring(0, str.length - 1));
                op = str.charAt(str.length - 1);
                console.log([left, op, str]);
                return [left, op, str];
            }
            else if (upper.textContent != '0') {
                upper.textContent += button.textContent;
                str = upper.textContent;
                left = parseInt(str.substring(0, str.length - 1))
                op = str.charAt(str.length - 1);
                console.log(str);
                return [left, str, op];
            }
        }
    })
})
let equal = document.querySelector('#equal');
equal.addEventListener('click', done)

let clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
    upper.textContent = '0';
    downer.textContent = '';
    left = undefined;
    str = undefined;
    op = undefined;
})