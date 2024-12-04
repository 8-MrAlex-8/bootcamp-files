let previousValue = '0';                                                                                                                                //7
let currentOperation = null;                                                                                                                            //+

// Attaches particular number at the end of the string in the input field.
function appendNumber(number) {
    if (document.getElementById('text').value == '0') { document.getElementById('text').value = ''; }
    document.getElementById('text').value += number;    
}

function setOperation(operation) {

    // Upon page load/first use of the calculator, we take the value from the input field and operation button
    // and assign them to the global variables.
    const inputField = document.getElementById('text');

    // Check if the input field contains '0' (it will never be blank as per the append/clear setups)
    // Allow adding a negative sign if the operation is minus.
    if (inputField.value === '0' && operation === '-') {
        inputField.value = '-';
        return;
    }

    // On page load/first use/after calculating
    if (currentOperation === null) { 
        previousValue = inputField.value; //takes result
        currentOperation = operation;
        inputField.value = '0';
    } 
    
    else {
        calculate();
        currentOperation = operation;
    }
}

function calculate() {
    const currentValue = document.getElementById('text').value;

    // let nothing happen if user presses equals button without inputting values first.
    if (currentOperation === null || currentValue === '' || previousValue === '') {
        return;
    }

    let result;

    // applies current operation to the values recorded. Operation to be performed depends on button pressed.
    switch (currentOperation) {
        case '+':
            result = parseFloat(previousValue) + parseFloat(currentValue);
            break;
        case '-':
            result = parseFloat(previousValue) - parseFloat(currentValue);
            break;
        case '*':
            result = parseFloat(previousValue) * parseFloat(currentValue);
            break;
        case '/':
            if (parseFloat(currentValue) === 0) result = 'MATH ERROR';
            else result = parseFloat(previousValue) / parseFloat(currentValue);
            break;
        default:
            return;
        }

        if (result !== 'MATH ERROR')
            result = Math.round(result * 100) / 100; // Round to 2 decimal places

        document.getElementById('text').value = result; // updating the input field with the result.

    currentOperation = null; // clears current operation.
    previousValue = ''; // clears previous value to make room for the next input.
}

function clearAll() {
    // clears everything to make room for new calculation.
    document.getElementById('text').value = '0';
    currentOperation = null;
    previousValue = '';
}

function deleteLast() {
    // deletes last character in input field
    const inputField = document.getElementById('text');
    
    if (inputField.value.length > 1)
        inputField.value = inputField.value.slice(0, -1);
    else
        inputField.value = '0';
}

function squareRoot() {

    try {
        // works like an equal sign; computes for the square root of the value inside the input field and returns it immediately.
        const currentValue = document.getElementById('text').value;

        if (currentValue < 0)
            throw new (TypeError)
        document.getElementById('text').value = Math.sqrt(parseFloat(currentValue));
    } 
    
    catch (error) {
        window.alert('Please enter a nonnegative integer.');
    }
}