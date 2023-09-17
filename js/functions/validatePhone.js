    // Get the input element and error message element
    const phoneInput = document.getElementById('phone');
    const errorMessage = document.getElementById('error-message');

    // Add an event listener to the input element
    phoneInput.addEventListener('input', () => {
        // Get the current value of the input
        const inputValue = phoneInput.value;

        // Remove any non-numeric characters from the input
        const numericValue = inputValue.replace(/\D/g, '');

        // Update the input field with the numeric value
        phoneInput.value = numericValue;

        // Show the error message if non-numeric characters were removed
        if (inputValue !== numericValue) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });