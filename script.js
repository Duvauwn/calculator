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
let display = document.querySelector('#display')

let content = document.createElement('p');


let number = document.querySelectorAll('.numbers');
let val = []
number.forEach((button) => {
    button.addEventListener('click', function () {

        display.appendChild(content);

        val.push(button.textContent);
        let val1 = val.join('')
        content.textContent = val1;
        console.log(val1);
    })
})
let operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', function () {
        val.push(button.textContent);
        let val2 = val.join('');
        content.textContent = val2;
    })
})
let answer = document.querySelector('#answer');
let regexp = /\+|\*|\/|\-/g;
answer.addEventListener('click', function () {
    let str = content.textContent;
    let ans = [...str.matchAll(regexp)];
    console.log(ans[0]);

})