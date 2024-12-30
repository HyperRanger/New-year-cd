const nameInput = document.getElementById('name');
const submitButton = document.getElementById('submit');
const countdownContainer = document.getElementById('countdown-container');

let userName = '';
let countdownInterval;

submitButton.addEventListener('click', () => {
    userName = nameInput.value.trim();
    if (userName !== '') {
        countdownContainer.style.display = 'block';
        startCountdown();
    }
});

function startCountdown() {
    const endTime = new Date('2025-01-01T12:00:00');
    const currentTime = new Date();
    const timeLeft = endTime - currentTime;

    if (timeLeft <= 60000) { // 60 seconds
        countdownInterval = setInterval(updateCountdown, 1000);
    } else {
        countdownContainer.innerHTML = `Countdown starts in ${Math.floor(timeLeft / 60000)} minutes`;
    }
}

function updateCountdown() {
    const currentTime = new Date();
    const timeLeft = new Date('2025-01-01T12:00:00') - currentTime;

if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownContainer.innerHTML = `
            <div class="fireworks-background">
                <h1 class="algerian-font">HAPPY NEW YEAR!</h1>
                <p class="personalized-message">${userName}, may this new year bring you joy, happiness, and success!</p>
            </div>
        `;
    } else if (timeLeft <= 15000) { // 15 seconds
        countdownContainer.innerHTML = `
            <div class="countdown-message">
                Let's get ready to count down!
            </div>
        `;
    } else if (timeLeft <= 60000) { // 60 seconds
        const secondsLeft = Math.floor(timeLeft / 1000);
        countdownContainer.innerHTML = `
            <div class="countdown-message">
                ${secondsLeft} seconds to go, ${userName}!
            </div>
        `;
    }
}