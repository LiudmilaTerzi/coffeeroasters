

// Get the modal
const modal = document.querySelector('.js-modal');

// Button that opens the modal
const btn = document.querySelector('.js-form-confirm');

// Element that closes the modal
const overlay = document.querySelector('.js-overlay');

// Function to open the modal and display order summary
btn.addEventListener('click', function() {
    const summary = document.querySelector('.js-summary').innerHTML;
    modal.style.display = "block";
    overlay.style.display = "block";
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.querySelector('.js-modal-summary').innerHTML = summary;

   
});


// Function to close the modal when clicking on the overlay
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
});





