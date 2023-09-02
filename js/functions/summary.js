
// Get references to all radio button groups
const preferencesRadios = document.querySelectorAll('input[name="preferences"]');
const beanTypeRadios = document.querySelectorAll('input[name="bean-type"]');
const quantityRadios = document.querySelectorAll('input[name="quantity"]');
const grindRadios = document.querySelectorAll('input[name="grind"]');
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
const summaryTextArea = document.getElementById("summary-text");

//  event listeners to all radio button groups
preferencesRadios.forEach(radio => radio.addEventListener("change", updateSummary));
beanTypeRadios.forEach(radio => radio.addEventListener("change", updateSummary));
quantityRadios.forEach(radio => radio.addEventListener("change", updateSummary));
grindRadios.forEach(radio => radio.addEventListener("change", updateSummary));
deliveryRadios.forEach(radio => radio.addEventListener("change", updateSummary));

// Function to update the summary;
function updateSummary() {


  preferencesRadios.forEach(radio => {
    if (radio.checked) {
        document.querySelector('.js-preference').textContent = radio.value;
    }
  });

  beanTypeRadios.forEach(radio => {
    if (radio.checked) {
        document.querySelector('.js-bean-type').textContent = radio.value;


    }
  });

  quantityRadios.forEach(radio => {
    if (radio.checked) {
        document.querySelector('.js-quantity').textContent = radio.value;


    }
  });

  grindRadios.forEach(radio => {
    if (radio.checked) {
        document.querySelector('.js-grind').textContent = radio.value;


    }
  });

  deliveryRadios.forEach(radio => {
    if (radio.checked) {
        document.querySelector('.js-delivery').textContent = radio.value;

    }
  });


}

// Initial call to update the summary when the page loads
updateSummary();