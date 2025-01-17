let currentInput = "";
let previousInput = "";
let operation = null;

/**
 * A function that updates the display
 */
function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

/**
 * A function that handles number button clicks
 * @param {string} number 
 */
function handleNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        updateDisplay();
    }
}

/**
 * A function that handles operation button clicks
 * @param {string} op 
 */
function handleOperation(op) {
    if (currentInput === "" && op === "-") {
        currentInput = "-";
        updateDisplay();
        return;
    }
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

/**
 * A function that calculates the result of the operation
 */
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    // Check if the input is invalid
    if (isNaN(prev) || isNaN(current)) {
        currentInput = "Error";
        updateDisplay();
        console.log("Error: Invalid Input");
        return;
    }

    // Check if the number is too large
    if (currentInput.length > 10 || previousInput.length > 10) {
        currentInput = "Error";
        updateDisplay();
        console.log("Error: Number too large");
        return;
    }

    // Check if the number is too small
    if (currentInput.length < 1 || previousInput.length < 1) {
        currentInput = "Error";
        updateDisplay();
        console.log("Error: Number too small");
        return;
    }
    
    // Check if the operation is invalid
    if (operation === "÷" && current === 0) {
        currentInput = "Error";
        updateDisplay();
        console.log("Error: Division by zero");
        return; 
    }
 
    // Perform the operation
    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "×":
            result = prev * current;
            break;
        case "÷":
            if (current === 0) {
                result = "Error";
            } else {
                result = prev / current;
            }
            break;
        case "%":
            result = prev % current;
            break;
        default:
            currentInput = "Error";
            updateDisplay();
            console.log("Error: Invalid Operation");
            return;
    }
    currentInput = result.toString();
    logHistory(prev, current, operation, result);
    operation = null;
    previousInput = "";
    updateDisplay();
}

/**
 * A function that handles the equals button click
 */
function handleEquals() {
    calculate();
}

/**
 * A function that handles the clear button click
 */
function handleClear() {
    currentInput = "";
    updateDisplay();
}

/**
 * A function that handles the reset button click
 */
function handleReset() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateDisplay();
    clearHistory();
}

/**
 * A function that handles the plus/minus button click
 */
function handlePlusMinus() {
    if (currentInput !== "") {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

/**
 * A function that handles the decimal button click
 */
function handleDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

/**
 * A function that logs the calculation history
 * @param {number} prev 
 * @param {number} current 
 * @param {string} operation 
 * @param {number} result 
 */
function logHistory(prev, current, operation, result) {
    const historyList = document.getElementById("history");
    const historyItem = document.createElement("li");
    historyItem.textContent = `${prev} ${operation} ${current} = ${result}`;
    historyList.appendChild(historyItem);
    document.getElementById("history").value = `${prev} ${operation} ${current} = ${result}`;
    console.log(`History: ${prev} ${operation} ${current} = ${result}`);
}

/**
 * A function that clears the calculation history
 */
function clearHistory() {
    const historyList = document.getElementById("history");
    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }
}

// Add event listeners to the buttons
window.onload = function() {
    document.getElementById('add').addEventListener('click', () => handleOperation('+'));
    document.getElementById('subtract').addEventListener('click', () => handleOperation('-'));
    document.getElementById('multiply').addEventListener('click', () => handleOperation('×'));
    document.getElementById('divide').addEventListener('click', () => handleOperation('÷'));
    document.getElementById('percent').addEventListener('click', () => handleOperation('%'));
    document.getElementById('equals').addEventListener('click', handleEquals);
    document.getElementById('reset').addEventListener('click', handleReset);
    document.getElementById('clear').addEventListener('click', handleClear);
    document.getElementById('plusMinus').addEventListener('click', handlePlusMinus);
    document.getElementById('decimal').addEventListener('click', handleDecimal);

    document.getElementById('zero').addEventListener('click', () => handleNumber('0'));
    document.getElementById('one').addEventListener('click', () => handleNumber('1'));
    document.getElementById('two').addEventListener('click', () => handleNumber('2'));
    document.getElementById('three').addEventListener('click', () => handleNumber('3'));
    document.getElementById('four').addEventListener('click', () => handleNumber('4'));
    document.getElementById('five').addEventListener('click', () => handleNumber('5'));
    document.getElementById('six').addEventListener('click', () => handleNumber('6'));
    document.getElementById('seven').addEventListener('click', () => handleNumber('7'));
    document.getElementById('eight').addEventListener('click', () => handleNumber('8'));
    document.getElementById('nine').addEventListener('click', () => handleNumber('9'));
};