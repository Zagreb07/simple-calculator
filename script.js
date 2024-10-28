let firstNumber = null;
let secondNumber = null;
let operator = null;

const display = document.querySelector('.display');

const containerBtn = document.querySelector('.containerBtn');

containerBtn.addEventListener('click', (event) => {
    const button = event.target; 

    if (button.tagName === 'BUTTON') {
        if (button.classList.contains('operator')) {
            if (button.textContent === 'AC') {
                display.textContent = ''; 
                firstNumber = secondNumber = operator = null; 
            } else if (button.textContent === 'DEL') {
                display.textContent = display.textContent.slice(0, -1); 
            } else if (button.textContent === '=') {
                if (firstNumber !== null && operator && display.textContent) {
                    secondNumber = parseFloat(display.textContent);
                    const result = operate(operator, firstNumber, secondNumber);
                    display.textContent = result; 
                    firstNumber = result; 
                    operator = null; 
                }
            } else {
                if (display.textContent) {
                    firstNumber = parseFloat(display.textContent);
                    operator = button.textContent; 
                    display.textContent = '';
                }
            }
        } else {
            display.textContent += button.textContent;
        }
    }
});

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '%':
            return mod(firstNumber,secondNumber);
        case '-':
            return substract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            return secondNumber;
    }
}
function add(a,b){
    return a + b;
    }
    
    function substract(a,b){
        return a - b;
    }
    
    function multiply(a,b){
     return a*b;
    }
    
    function divide(a,b){
    return b!==0 ? Math.round((a/b)*10)/10 : 'Error';
    }
    
    function mod(a,b){
        return a%b;
    }