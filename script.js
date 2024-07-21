let screenText = document.querySelector('.screen-text');
let digitArray = Array.from(document.querySelectorAll('.digit'));
let deleteButton = document.querySelector('.delete');
let signButton = document.querySelector('.sign');
let percentButton = document.querySelector('.percent');
let dotButton = document.querySelector('.dot');
let divideButton = document.querySelector('.divide');
let multiplyButton = document.querySelector('.multiply');
let sumButton = document.querySelector('.plus');
let subtractButton = document.querySelector('.minus');
let equalsButton = document.querySelector('.equals');
let firstnum;
let secondnum;
let currentOperation;
let afterOp = false;
let operationDone = true;

function addToScreen(num) {
    if(afterOp) {
        screenText.innerText = "";
        screenText.innerText += num.toString();
        afterOp = false;
    }
    else {
        if (screenText.innerText === "0") {
            screenText.innerText = "";
            screenText.innerText += num.toString();
        } else {
            screenText.innerText += num.toString();
        }
    }
    if(screenText.innerText.length < 12) {
        screenText.style.fontSize = '50px';
    }
    else {
        screenText.style.fontSize = (parseInt(window.getComputedStyle(screenText).fontSize) / 1.05) + "px";
    }
}

function deleteAll() {
    screenText.innerText = "0";
    firstnum = "";
    secondnum = "";
    currentOperation = "";
    screenText.style.fontSize = '50px';
}

function signChange() {
    screenText.innerText = (parseFloat(screenText.innerText) * -1).toString();
}

function percentFunc() {
    screenText.innerText = (parseFloat(screenText.innerText) / 100).toString();
    if(screenText.innerText.length < 12) {
        screenText.style.fontSize = '50px';
    }
    else {
        screenText.style.fontSize = (parseInt(window.getComputedStyle(screenText).fontSize) / 1.05) + "px";
    }
}

function addDot() {
    if(!(screenText.innerText.includes("."))) {
        screenText.innerText += ".";
    }
    if(screenText.innerText.length < 12) {
        screenText.style.fontSize = '50px';
    }
    else {
        screenText.style.fontSize = (parseInt(window.getComputedStyle(screenText).fontSize) / 1.05) + "px";
    }
}

function saveFirst(operation){
    if(!operationDone) {
        operate(firstnum, currentOperation);
        firstnum = parseFloat(screenText.innerText);
        currentOperation = operation;
        operationDone = false;
    }
    else{
        firstnum = parseFloat(screenText.innerText);
        currentOperation = operation;
        operationDone = false;
    }

    afterOp = true;
}

function divide(num1, num2) {
    return num1/num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function sum(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function operate(num1, operation) {
    secondnum = parseFloat(screenText.innerText);
    if(operation === "divide") {
        screenText.innerText = divide(num1, secondnum).toString();
        firstnum = parseFloat(screenText.innerText);
        afterOp = true;
        operationDone = true;
    }
    if(operation === "multiply") {
        screenText.innerText = multiply(num1, secondnum).toString();
        firstnum = parseFloat(screenText.innerText);
        afterOp = true;
        operationDone = true;
    }
    if(operation === "sum") {
        screenText.innerText = sum(num1, secondnum).toString();
        firstnum = parseFloat(screenText.innerText);
        afterOp = true;
        operationDone = true;
    }
    if(operation === "subtract") {
        screenText.innerText = subtract(num1, secondnum).toString();
        firstnum = parseFloat(screenText.innerText);
        afterOp = true;
        operationDone = true;
    }
    if(screenText.innerText.length < 12) {
        screenText.style.fontSize = '50px';
    }
    else {
        screenText.style.fontSize = (parseInt(window.getComputedStyle(screenText).fontSize) / 1.05) + "px";
    }
}

for (let i = 0; i < digitArray.length; i++) {
    digitArray[i].addEventListener('click', () => addToScreen(digitArray[i].textContent));
}

deleteButton.addEventListener('click', () => deleteAll());

signButton.addEventListener('click', () => signChange());

percentButton.addEventListener('click', () => percentFunc());

dotButton.addEventListener('click', () => addDot());

divideButton.addEventListener('click', () => saveFirst("divide"));
multiplyButton.addEventListener('click', () => saveFirst("multiply"));
sumButton.addEventListener('click', () => saveFirst("sum"));
subtractButton.addEventListener('click', () => saveFirst("subtract"));

equalsButton.addEventListener('click', () => operate(firstnum, currentOperation));
