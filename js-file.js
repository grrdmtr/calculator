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

const operate = (a,b,operand) => {
    a = parseInt(displayedValue1);
    b = parseInt(displayedValue2);
    operand = operator;
            if (operator === "add") {
                solution = add(a,b);
            } else if (operator === "substract") {
                solution = substract(a,b);
            } else if (operator === "multiply") {
                solution = multiply(a,b);
            } else if (operator === "divide") {
                solution = divide(a,b);
            }
            displayedValue1 = solution;
            displayedValue2 = "";
            display.textContent = solution;
            console.log(`The solution is ${solution}`);
};

const display = document.querySelector('.display');


const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach (btn => btn.addEventListener('click', displayDigit));

let displayedValue1 = "";
let displayedValue2 = "";
let displayedValue3 = "";
let solution = 0;
let operator = "";

function displayDigit() {
    displayedValue2 += this.value;
    display.textContent = displayedValue2;
    displayedValue3 = parseInt(displayedValue2);
    console.log(displayedValue2);
}

function getOperator() {
    operator = this.className;
    if (displayedValue1 === '') {
        displayedValue1 = displayedValue2;
        displayedValue2 = "";
        console.log(operator);
    } else if (displayedValue1 === solution && displayedValue2 != ''){
        console.log(displayedValue2);
        operate()
    }
}

function clear() {
    displayedValue1 = "";
    displayedValue2 = "";
    display.textContent = "Do your math";

}

const operatorBtns = document.querySelectorAll('#operator');

operatorBtns.forEach( btn => btn.addEventListener('click', getOperator))

const equalBtn = document.querySelector('.equal');

equalBtn.addEventListener('click', operate);

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', clear);