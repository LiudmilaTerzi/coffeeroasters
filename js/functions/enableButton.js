document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscription-form");
    const fieldsets = form.querySelectorAll(".create-plan-options");
    const submitButton = form.querySelector(".js-form-confirm");
  
    // Function to check if one radio button is selected in each fieldset
    function checkRadioSelections() {
      let allSelected = true;
      fieldsets.forEach((fieldset) => {
        const radios = fieldset.querySelectorAll('input[type="radio"]');
        let selected = false;
        radios.forEach((radio) => {
          if (radio.checked) {
            selected = true;
          }
        });
        if (!selected) {
          allSelected = false;
        }
      });
      return allSelected;
    }
  
    // Function to update submit button state
    function updateSubmitButtonState() {
      if (checkRadioSelections()) {
        submitButton.removeAttribute("disabled");
      } else {
        submitButton.setAttribute("disabled", "disabled");
      }
    }
  
    // Listen for changes in the form
    form.addEventListener("change", updateSubmitButtonState);
  
    // Initial check on page load
    updateSubmitButtonState();
  });
  
  