

// Get references to the elements
const menuIcon = document.getElementById('menu-icon');
const header = document.querySelector('header');
const body = document.body;

//  click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  
  header.classList.toggle('open-menu');

  // property on the body to prevent scrolling
  if (body.style.overflow === 'hidden') {
    body.style.overflow = ''; // remove the "overflow" property
  } else {
    body.style.overflow = 'hidden'; // set "overflow" to "hidden"
  }
});
