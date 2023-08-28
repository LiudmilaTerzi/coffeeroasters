//Accordion for subscription

const accordionToggles = document.querySelectorAll('.accordion-toggle');
const detailsList = document.querySelectorAll('.details');

accordionToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    detailsList[index].style.display = detailsList[index].style.display === 'none' ? 'block' : 'none';
  });
});

const liItems = document.querySelectorAll('.details li');
liItems.forEach(li => {
  li.addEventListener('click', () => {
    li.classList.toggle('selected');
  });
});

//Change color when selected

const detailDivs = document.querySelectorAll('.details > div');

detailDivs.forEach((div) => {
    div.addEventListener('click', () => {
        div.style.backgroundColor = '#0E8784';
        div.style.color = '#FEFCF7';
    });

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = '#FDD6BA';
    });

    // Reset to default background and text color
    div.addEventListener('mouseleave', () => {
        div.style.backgroundColor = ''; 
        div.style.color = '';
    });
});

