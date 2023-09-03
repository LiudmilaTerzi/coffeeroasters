// // Get the modal

// const modal = document.getElementsByClassName('js-modal');

// // Button that opens the modal

// const btn = document.getElementsByClassName('js-form-confirm');

// // // Element that closes the modal
// const overlay = getElementsByClassName('js-overlay');

// btn.onclick = function() {
//     modal.style.display="block";
// }



// overlay.addEventListener("click", function (event)  {
//     if (event.target === overlay) {
//     overlay.style.display = "none";
//     }
// });

// Get the modal
const modal = document.querySelector('.js-modal');

// Button that opens the modal
const btn = document.querySelector('.js-form-confirm');

// Element that closes the modal
const overlay = document.querySelector('.js-overlay');

// Function to open the modal
btn.addEventListener('click', function() {
    modal.style.display = "block";
    overlay.style.display = "block";
});

// Function to close the modal when clicking on the overlay
overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
});


