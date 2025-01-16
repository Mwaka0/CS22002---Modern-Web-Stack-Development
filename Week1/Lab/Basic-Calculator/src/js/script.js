function getNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    return {num1, num2};
}

/**
 * A function that calculates the result of the operation based on the operation type
 * @param {*} operation 
 */
function calculate(operation) {
    // Get the numbers from the input fields
    const {num1, num2} = getNumbers();
    var result = 0;

    // Check if the input is a number
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input, please enter a valid number");
        return;
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
            break;
    }

    // Display the result in the result field
    return result;
}