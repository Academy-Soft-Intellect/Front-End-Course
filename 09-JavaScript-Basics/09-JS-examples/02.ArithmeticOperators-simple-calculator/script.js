function calculate () {
	// get the value of first input 
	var firstNum = document.getElementById('first-number').value;
	firstNum = parseInt(firstNum);

	// get the value of second input 
	var secondNum = document.getElementById('second-number').value;
	secondNum = parseInt(secondNum);

	//get the result input
	var resultInput = document.getElementById('result');

	var result = firstNum + secondNum;
	resultInput.value = result;
} 