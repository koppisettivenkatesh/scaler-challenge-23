const modal = document.getElementById('pricingModal');
const modalPrice = document.getElementById('price');
const users = document.getElementById('user');
const userSlider = document.getElementById('userSlider');
const numUser = document.getElementById('numUser');


function openModal(getModal) {
    modalPrice.textContent = getModal;
    users.textContent =  userSlider.value + " Users";
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function highlightPricingPlan() {
    const selectedUsers = userSlider.value;
    numUser.textContent = userSlider.value
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.classList.remove('highlighted-plan');
    });

    if (selectedUsers >= 0 && selectedUsers <= 10) {
        cards[0].classList.add('highlighted-plan');
    } else if (selectedUsers > 10 && selectedUsers <= 20) {
        cards[1].classList.add('highlighted-plan');
    } else {
        cards[2].classList.add('highlighted-plan');
    }
}

highlightPricingPlan();