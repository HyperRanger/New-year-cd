const greetingHeader = document.getElementById('greeting');
const countdownHeader = document.getElementById('countdown-header');
const countdownContainer = document.getElementById('countdown-container');
const userName = localStorage.getItem('userName'); // Retrieve userName from localStorage

greetingHeader.innerHTML = `HI <span class="user-name">${userName.toUpperCase()}</span>! READY FOR NEW YEAR?`; // Display greeting

// ... (rest of your countdown logic) ...


function updateCountdown() {
  const endTime = new Date(); // Set endTime to current time
  endTime.setHours(23, 59, 59, 999); // Set to 23:59:59.999 (midnight)

  const currentTime = new Date();
  let timeLeft = endTime - currentTime;

  if (timeLeft <= 0) { 
    // Handle midnight reached
    clearInterval(countdownInterval); 
    countdownContainer.innerHTML = '';
    countdownContainer.classList.add('fireworks-background');
    countdownHeader.innerHTML = `HAPPY NEW YEAR, ${userName}!`;
    const messageContainer = document.createElement('div');
    messageContainer.innerHTML = `Thank you for an amazing year filled with laughter, memories, and incredible moments. Cheers to an even better year ahead – may it be filled with joy, success, and unforgettable adventures together. ✨<br><br>To ${userName}, a friend who makes life brighter. May the coming year bring us even more laughter, deeper bonds, and countless wonderful memories. Cheers🍻 to a year of amazing friendships!`;
    countdownContainer.appendChild(messageContainer);
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const milliseconds = timeLeft % 1000; 

    countdownContainer.innerHTML = 
      `${days}d:${hours}h:${minutes}m:${seconds}s:${milliseconds}ms`;
  }
}

// Start the countdown with a more reasonable update interval (e.g., every 100 milliseconds)
let countdownInterval = setInterval(updateCountdown, 100);