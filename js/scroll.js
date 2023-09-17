// Get a reference to the button element
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Add a scroll event listener to check the scroll position
window.addEventListener("scroll", () => {
  // Display the button when the user scrolls down 200 pixels
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Add a click event listener to the button to scroll to the top
scrollToTopButton.addEventListener("click", () => {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
