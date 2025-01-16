/**
 * A function that gets the numbers from the input fields
 * @returns num1 and num2
 */
function getNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    return {num1, num2};
}

/**
 * This function creates a history list of the operations performed
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} operation 
 * @param {*} result 
 */
function history(num1, num2, operation, result) {
    let history = [];
    let historyList = document.getElementById('history');
    let historyItem = document.createElement('li');
    historyItem.textContent = `${num1} ${operation} ${num2} = ${result}`;
    history.push(historyItem);
    historyList.appendChild(historyItem);
    console.log(`${num1} ${operation} ${num2} = ${result}`);
}

/**
 * A function that calculates the result of the operation based on the operation type
 * @param {*} operation 
 * @returns the result of the operation
 */
function calculate(operation) {
    // Get the numbers from the input fields
    const {num1, num2} = getNumbers();
    let result = 0;

    // Check if the input is a number
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input, please enter a valid number");
        return "Error, please enter valid numbers in both fields.";
    }

    // Check if the operation is divide and the second number is zero
    if (operation === 'divide' && num2 === 0) {
        console.log("Cannot divide by zero...");
        return "Error, Cannot divide by zero.";
    }
    
    // Perform the operation based on the operation type
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;  
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            // If the operation is not valid, print an error message
            console.log("Invalid operation..."); 
            return "Error, Invalid operation.";
    }

    // Display the result in the result field
    history(num1, num2, operation, result);
    return result;
}

// Reset the input fields and the result field
function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById('history').textContent = "";
}

// Add event listeners to the buttons
window.onload = function() {
    document.getElementById('add').addEventListener('click', () => {
        document.getElementById('result').textContent = `${calculate('add')}`;
    });

    document.getElementById('subtract').addEventListener('click', () => {
        document.getElementById('result').textContent = `${calculate('subtract')}`;
    });

    document.getElementById('multiply').addEventListener('click', () => {
        document.getElementById('result').textContent = `${calculate('multiply')}`;
    });

    document.getElementById('divide').addEventListener('click', () => {
        document.getElementById('result').textContent = `${calculate('divide')}`;
    });
    document.getElementById('reset').addEventListener('click', () => {
        reset();
    });
};
