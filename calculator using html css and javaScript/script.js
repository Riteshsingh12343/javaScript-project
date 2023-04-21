let result = document.getElementById("result");

function addToResult(value) {
	result.value += value;
}

function clearResult() {
	result.value = "";
}

function backspace() {
	result.value = result.value.slice(0, -1);
}

function calculate(operator) {
	let expression = result.value;

	if (operator == '=') {
		result.value = eval(expression);
	}
	else {
		result.value += operator;
	}
}