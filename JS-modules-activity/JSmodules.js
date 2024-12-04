function CheckPrime(num) {
    var firstPrimes = [2, 3, 5, 7];
    var isPrime = true;

    if (isNaN(num) || num < 2) {
        window.alert("Please enter a positive integer greater than 1.");
        return;
    }
    
    else {
        document.getElementById('number').innerHTML = num;
        document.getElementById('prime').style.display = "none";
        document.getElementById('composite').style.display = "none";

        firstPrimes.forEach(check);

        function check(item) {  
            if ((num != item) && (num % item == 0)) { isPrime = false; }
        }

        if (isPrime) { document.getElementById('prime').style.display = "block"; }
        else { document.getElementById('composite').style.display = "block"; }
    }
}

function SquareRoot() {
    var num = parseFloat(document.getElementById('getRoot').value);

    if (isNaN(num) || num < 0) { window.alert("Please enter a non-negative integer."); return; }
    else {
        var root = Math.sqrt(num);
        var result = root.toFixed(2);

        document.getElementById('squareRoot').innerHTML = result;
    }
}

function SetPhoneFormat() {
    var country = document.getElementById('countries').value;
    var prefixSection = document.getElementById('phonePrefix');
    var inputSection = document.getElementById('phoneNum');

    if (country === 'PH') {
        // PH NUM: (+63) XXX XXX XXXX
        prefixSection.value = '(+63)';
        inputSection.maxLength = "10";
        inputSection.removeAttribute('readonly');
        inputSection.placeholder = "Enter Phone No.";
    }

    else if (country === 'SG') {
        // SG NUM: 	(+65) XXXX XXXX
        prefixSection.value = '(+65)';
        inputSection.maxLength = "8";
        inputSection.removeAttribute('readonly');
        inputSection.placeholder = "Enter Phone No.";
    }

    else {
        prefixSection.value = ''; // Default value if no country selected
        phoneNumberInput.maxLength = "18"; // Default maxlength
  }
}


function checkPhone(phoneNumber) {
    var country = document.getElementById('countries').value;
    var numbersOnly = phoneNumber.split(' ').join('');


    if (country === 'PH') {

        if (numbersOnly[0] === '9' && numbersOnly.length == 10)
            window.alert('Success! Thank you.')
        else {
            if (numbersOnly[0] !== '9') // PH numbers start with 9.
                window.alert('Invalid PH phone number! Make sure your phone number input starts with 9.');
            if (numbersOnly.length != 10)   // PH numbers have 11 digits (10 if you exclude the prefix).
                window.alert('Invalid number length (PH)! Please enter 10 digits (no whitespace).')
        }
    }

    // In Singapore, mobile phones starts with 8/9, landline phone numbers starts with 6 while VOIP numbers starts with 3 (Wikipedia).
    // Prefix is (+65).

    else if (country === 'SG') {
        if (numbersOnly[0] !== '8' && numbersOnly[0] !== '9' && numbersOnly[0] !== '6' && numbersOnly[0] !== '3')
            window.alert('Invalid SG phone number! Make sure your phone number input starts with 3, 6, 8, or 9.');
        if (numbersOnly.length != 8)   // SG numbers have 8 digits after the prefix.
            window.alert('Invalid number length (SG)! Please enter 8 digits. (no whitespace)')
        else
            window.alert('Success! Thank you.')

    }
}