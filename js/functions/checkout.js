// show/hide credit card details based on payment method

const paymentMethodSelect = document.getElementById('payment-method');
const creditCardDetails = document.getElementById('credit-card-details');
        
        paymentMethodSelect.addEventListener('change', () => {
            if (paymentMethodSelect.value === 'card') {
                creditCardDetails.style.display = 'block';
            } else {
                creditCardDetails.style.display = 'none';
            }
        });


const checkoutSummary = document.getElementById('checkout-summary');
const urlParams = new URLSearchParams(window.location.search);
const preferences = urlParams.get('preferences');
const beanType = urlParams.get('bean-type');
const quantity = urlParams.get('quantity');
const grind = urlParams.get('grind');
const delivery = urlParams.get('delivery');

// Check if both elements exist before copying the content
if (checkoutSummary) {
    // Create an array to hold the parameter name and value pairs
    const summaryValues = [];

    // Function to wrap a value with the specified color
    function wrapWithColor(value) {
        return `<span style="color: #0E8784;">${value}</span>`;
    }

    // Add parameter name and value pairs to the array with newlines and spaces
    if (preferences) {
        summaryValues.push(`Preferences: ${wrapWithColor(preferences.toUpperCase())}`);
    }
    if (beanType) {
        summaryValues.push(`Bean Type: ${wrapWithColor(beanType.toUpperCase())}`);
    }
    if (quantity) {
        summaryValues.push(`Quantity: ${wrapWithColor(quantity.toUpperCase() + ' g')}`);
    }
    if (grind) {
        summaryValues.push(`Grind: ${wrapWithColor(grind.toUpperCase())}`);
    }
    if (delivery) {
        summaryValues.push(`Delivery: ${wrapWithColor(delivery.toUpperCase())}`);
    }

    // Join the parameter name and value pairs with newlines and spaces
    const summaryText = summaryValues.join('<br><br>');

    // Set the HTML content of checkoutSummary
    checkoutSummary.innerHTML = summaryText;
}

