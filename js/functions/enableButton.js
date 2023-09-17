
// Get all the radio button groups with the "required" attribute
const radioGroups = document.querySelectorAll('input[type="radio"][required]');

// Get the "grind" fieldset by its ID
const grindFieldset = document.getElementById("grind");

// Get elements for displaying grind-related information
const grindType = document.querySelector(".order-summary-text .js-grind");
const grindTypeText = grindType.textContent;
const notGrind = document.querySelector(".order-summary-text .js-if-grind");
const notGrindText = notGrind.textContent;

// Empty array to store selected radio button values and their corresponding group names
let selectedValues = [];

// Get the submit button
const submitButton = document.querySelector(".js-form-confirm");

// Function to update the selectedValues array with radio button selections
function updateSelectedValues(event) {
  // Get the clicked radio button element
  const radio = event.target || event.srcElement;

  // Extract the group name and selected value from the clicked radio button
  const groupName = radio.getAttribute("name");
  const selectedValue = radio.value;

  // Find and update the corresponding entry in the selectedValues array
  const index = selectedValues.findIndex((item) => item.name === groupName);
  if (index !== -1) {
    selectedValues[index].value = selectedValue;
  } else {
    selectedValues.push({ name: groupName, value: selectedValue });
  }

  // Check if "preferences" with value "capsules" is selected and "grind" isn't selected
  const capsules = selectedValues.find(
    (item) => item.name === "preferences" && item.value === "capsules"
  );

  if (capsules) {
    // Disable the "grind" fieldset and clear its related information
    grindFieldset.disabled = true;
    grindFieldset.previousElementSibling.disabled = true;
    console.log(grindFieldset.previousElementSibling);
    grindType.textContent = "";
    notGrind.textContent = "";

    // Reset the radio buttons in the "grind" fieldset
    resetRadioGroup(grindFieldset);

    // Remove the "grind" entries from selectedValues array
    selectedValues = removeEntriesByName("grind", selectedValues);
  } else {
    // Enable the "grind" fieldset and restore its related information
    grindFieldset.disabled = false;
    notGrind.textContent = notGrindText;
    grindFieldset.previousElementSibling.disabled = false;
   
  }

 

  // Check the count of selected values and enable/disable the submit button accordingly
  if (
    selectedValues.length === 5 ||
    (selectedValues.length === 4 && capsules && !selectedValues.find((item) => item.name === "grind"))
  ) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
}

// Add event listeners to all radio buttons to update the selectedValues array on change
for (const radioGroup of radioGroups) {
  radioGroup.addEventListener("change", updateSelectedValues);
}

// Function to reset all radio buttons within a fieldset
function resetRadioGroup(fieldset) {
  const radioButtons = fieldset.querySelectorAll('input[type="radio"]');
  
  // Uncheck all radio buttons in the fieldset
  for (const radioButton of radioButtons) {
    radioButton.checked = false;
  }
}

// Function to remove entries with a specific name from the selectedValues array
function removeEntriesByName(nameToRemove, selectedValues) {
  return selectedValues.filter((item) => item.name !== nameToRemove);
}
