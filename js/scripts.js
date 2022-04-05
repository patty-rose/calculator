//business logic:

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

//User Interface Logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#num1").val());
    const number2 = parseInt($("#num2").val());
    const result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#numSub1").val());
    const number2 = parseInt($("#numSub2").val());
    const result = subtract(number1, number2);
    $("#outputSubtract").text(result);
  });

  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#num1").val());
    const number2 = parseInt($("#num2").val());
    const result = multiply(number1, number2);
    $("#outputMultiply").text(result);
  });

  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#num1").val());
    const number2 = parseInt($("#num2").val());
    const result = divide(number1, number2);
    $("#outputDivide").text(result);
  });

});
