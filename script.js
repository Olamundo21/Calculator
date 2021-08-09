'use strict'

/////////////////////////////////////////////
// Get elements from html to manipulate them
/////////////////////////////////////////////

// Get show result
const result = document.getElementById('result');

// Number Buttons
const button9 = document.getElementById('button9');
const button8 = document.getElementById('button8');
const button7 = document.getElementById('button7');
const button6 = document.getElementById('button6');
const button5 = document.getElementById('button5');
const button4 = document.getElementById('button4');
const button3 = document.getElementById('button3');
const button2 = document.getElementById('button2');
const button1 = document.getElementById('button1');
const button0 = document.getElementById('button0');
const dot = document.getElementById('dot');

// Operations Buttons
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const division = document.getElementById('division');
const mult = document.getElementById('multiply');
const calc = document.getElementById('enter');
const del = document.getElementById('del');
const clear = document.getElementById('clear');

// Variable that will hold numbers in memory
let currValue = '';
let operation = '';
let operationValue = '';

/////////////
// Functions
///////////// 
function checkOperation(numb) {
    if(operation === '') {    
        currValue += numb;
        return result.innerHTML = currValue;
    }

    if(operation !== ''){
        operationValue += numb;
        return result.innerHTML = operationValue;
    } 
}

function clearContinue() {
    operation = '';
    operationValue = '';
    result.innerHTML = currValue;
}

function clearAllMem() {
    currValue = '';
    operation = '';
    operationValue = '';
    result.innerHTML = '>_';
}
////////////////////////
// Numbers Buttons Event Listener
////////////////////////

[button0,button1,button2,button3,button4,button5,button6,button7,button8,button9].forEach((button, i) => button.addEventListener('click',()=>{
    checkOperation(i);
}))

////////////////////////
// Operations Buttons Event Listeners
////////////////////////
calc.addEventListener('click', () => {
    const first = +currValue;
    const second = +operationValue;
    switch (operation) {
    case '+':
        currValue = (first + second) + '';
        clearContinue();
        break;
    case '-':
        currValue = (first - second) + '';
        clearContinue();
        break;
    case '*':
        currValue = (first * second) + '';
        clearContinue();
        break;
    case '/':
        currValue = (first / second) + '';
        clearContinue();
        break;
    default:
        console.log(`Error ! No operation to return result 👀.`);
    }
});

plus.addEventListener('click', () => {
    operation = '+';
    result.innerHTML += operation;
});

minus.addEventListener('click',  () => {
    operation = '-';
    result.innerHTML += operation;
});

division.addEventListener('click', () => {
    operation = '/';
    result.innerHTML += operation;
});

mult.addEventListener('click', () =>{
    operation= '*';
    result.innerHTML += operation;
})

del.addEventListener('click', () => {
    if(operation === '') {  
        currValue = currValue.slice(0, -1);
        if(currValue === '') return result.innerHTML= '>_';
        return result.innerHTML = currValue;
    }

    if(operation !== ''){
        operationValue  = operationValue.slice(0, -1);
        return result.innerHTML += operationValue;
    } 
});

clear.addEventListener('click', () => {
   clearAllMem();
});

