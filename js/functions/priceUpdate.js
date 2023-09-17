const priceSum = {
  250: {
    "every week": 7.2,
    "every 2 weeks": 9.6,
    "every month": 12.0,
  },

  500: {
    "every week": 13.5,
    "every 2 weeks": 18.3,
    "every month": 23.8,
  },

  1000: {
    "every week": 25.0,
    "every 2 weeks": 31.0,
    "every month": 41.0,
  },
};

const totalMultiplier = {
  "every week": 4,
  "every 2 weeks": 2,
  "every month": 1,
};

// Get references to the radio buttons and the textarea
const quantityR = document.querySelectorAll('input[name="quantity"]');
const deliveryR = document.querySelectorAll('input[name="delivery"]');
const totalPriceTextarea = document.querySelector(".js-total");
const checkoutButton = document.querySelector(".checkout .modal-btn");

// Add event listeners to the radio buttons
quantityR.forEach((radio) => {
  radio.addEventListener("change", updateTotalPrice);
});

deliveryR.forEach((radio) => {
  radio.addEventListener("change", updateTotalPrice);
});

// Function to update the total price textarea
function updateTotalPrice() {
  const selectedQuantity = document.querySelector(
    'input[name="quantity"]:checked'
  );
  const selectedDelivery = document.querySelector(
    'input[name="delivery"]:checked'
  );

  // Update delivery text values based on quantity.
  if (selectedQuantity) {
        let selectedValue = selectedQuantity.getAttribute("value");
        for (let frequency in priceSum[selectedValue]) {
            deliveryR.forEach((input) => {
                if (input.value === frequency) {

                // Find the <span> element with class "js-price" within the label
                let label = input.nextElementSibling;
                // Find the <span> element with class "js-price" within the variable 'label'
                const priceSpan = label.querySelector(".js-price");

                // Update the text content of the found <span> element
                if (priceSpan) {
                    priceSpan.textContent = "$ " + priceSum[selectedValue][frequency]; // Replace with desired text
                }
                
                }
            });
        
        }
    }

  

  // Price at checkout
  if (selectedQuantity && selectedDelivery) {
    const price = priceSum[selectedQuantity.value][selectedDelivery.value];
    const total = price * totalMultiplier[selectedDelivery.value];
    totalPriceTextarea.innerHTML = "$ " + total.toFixed(2) + " / mo";
  
    

    
    // Check if the media width is max 480px
    if (window.matchMedia("(max-width: 480px)").matches) {
      checkoutButton.innerHTML = "Checkout - $ " + total.toFixed(2) + " / mo";
      totalPriceTextarea.style.display = "none";
    } else {
      checkoutButton.textContent = "Checkout";
      totalPriceTextarea.style.display = "inline"
    }
  } else {
    // Handle the case where not all options are selected.
    totalPriceTextarea.value = "$";
    checkoutButton.textContent = "Checkout";
    totalPriceTextarea.style.display = "inline"; 
  }


}



