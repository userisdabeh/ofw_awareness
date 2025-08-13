document.addEventListener('DOMContentLoaded', () => {
    const continueButton = document.getElementById('continue');
    continueButton.disabled = true;

    setTimeout(() => {
        continueButton.innerHTML = 'Continue &nbsp;<i class="bi bi-arrow-right"></i>';
        continueButton.disabled = false;
    }, 5000);

    continueButton.addEventListener('click', () => {
        window.location.href = '/home';
    });
});