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
return Math.round((a/b)*10)/10;
}

let firstNumber = 3;
let secondNumber = 5;
let operator= '+';
function operate(operator, firstNumber, secondNumber){
    return add(firstNumber, secondNumber);
}
