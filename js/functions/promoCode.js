

// Elements for promo code

const promoCodeInput = document.getElementById('promo-code');
const applyPromoButton = document.getElementById('apply-promo-button');
const promoErrorMessage = document.getElementById('promo-error-message');

applyPromoButton.addEventListener('click', () => {
    const promoCode = promoCodeInput.value.trim();

    // Validate the promo code
    if (promoCode === 'CR10OFF' || promoCode === 'CR5OFF' || promoCode === 'CR15OFF') {
        
        promoErrorMessage.style.display = 'none';
        
    } else {
        promoErrorMessage.style.display = 'block';
    }
});



const promoToggle = document.getElementById('promo-toggle');
const promoContent = document.getElementById('promo-content');

promoToggle.addEventListener('click', () => {
    if (promoContent.style.display === 'none' || promoContent.style.display === '') {
        promoContent.style.display = 'block';
    } else {
        promoContent.style.display = 'none';
    }
});
