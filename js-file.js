function add(a,b) {
    return a + b;
};

function substract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide (a,b) {
    return a / b;
};

function percent (a,b) {
    if (displayedValue1 === undefined) {
        displayedValue2 = parseFloat(displayedValue2)/100;
        display.textContent = displayedValue2;
     } else {
        displayedValue2 = displayedValue1 * (displayedValue2/100);
        display.textContent = displayedValue2;
     }
}

const operate = (a,b,operand) => {
    if (displayedValue2 === '') return;
    a = parseFloat(displayedValue1);
    b = parseFloat(displayedValue2);
    operand = operator;
            if (operator === "add") {
                solution = add(a,b);
            } else if (operator === "substract") {
                solution = substract(a,b);
            } else if (operator === "multiply") {
                solution = multiply(a,b);
            } else if (operator === "divide" && b === 0) {
                solution = '';
                display.textContent = 'THE NUCLEAR BOMB WAS LAUNCHED';
            } else if (operator === "divide") {
                solution = divide(a,b);
            }
            displayedValue1 = solution;
            displayedValue2 = '';
            display.textContent = solution.toFixed(4).replace(/\.?0+$/, '');
            console.log(`The solution is ${solution}`);
};

const display = document.querySelector('.display');


const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach (btn => btn.addEventListener('click', displayDigit));

let displayedValue1 = undefined;
let displayedValue2 = '';
let solution = 0;
let operator = "";

function displayDigit() {
    displayedValue2 += this.value;
    if (displayedValue2.split('').includes(".")) {
        document.getElementById('dot').disabled = true;
    } else {
        document.getElementById('dot').disabled = false;
    }
    display.textContent = displayedValue2;

    console.log(displayedValue2);
}

function getOperator() {
    if (displayedValue1 == undefined) {
        operator = this.className;
        displayedValue1 = displayedValue2;
        displayedValue2 = "";
        console.log(operator);
    } else if (displayedValue1 != undefined && displayedValue2 != undefined){
        console.log(displayedValue2);
        operate();
        operator = this.className;
    } else {
        operator = this.className;
    }
}

function clear() {
    displayedValue1 = undefined;
    displayedValue2 = '';
    display.textContent = '0';

}

const percentBtn = document.querySelector('.percent');
percentBtn.addEventListener('click', percent);

const operatorBtns = document.querySelectorAll('#operator');

operatorBtns.forEach(btn => btn.addEventListener('click', getOperator))

const equalBtn = document.querySelector('#result');

equalBtn.addEventListener('click', operate);

const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', clear);