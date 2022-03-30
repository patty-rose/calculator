function add(number1, number2){
	return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1  * number2;
}

function divide(number1, number2){
  return number1 / number2;
}

const number1 = parseInt(prompt("enter a number:"));
const number2 = parseInt(prompt("enter another number:"));

alert(divide(number1, number2));