  // Function to validate a credit card number
  function validateCreditCardNumber(cardNumber) {
    // Remove any non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

    // Check for common card network rules
    if (!/^(4|5[1-5]|6[0-9]|7[0-9]|8[6-9])\d{15}$/.test(cardNumber)) {
        return false; // Invalid starting digits or length
    }

    // Luhn algorithm
    let sum = 0;
    let doubleUp = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);
        if (doubleUp) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        doubleUp = !doubleUp;
    }
    return sum % 10 === 0;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting initially
    const cardNumberInput = document.getElementById('card-number');
    const cardNumber = cardNumberInput.value;

    if (validateCreditCardNumber(cardNumber)) {
        alert('Credit card information is valid. Submitting...');
        // Perform your submission logic here
    } else {
        alert('Invalid credit card number. Please check the details.');
    }
}

// Add a submit event listener to the form
const paymentForm = document.getElementById('payment-form');
paymentForm.addEventListener('submit', handleSubmit);