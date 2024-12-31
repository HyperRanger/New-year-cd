const greetingHeader = document.getElementById('greeting');
const countdownHeader = document.getElementById('countdown-header');
const countdownContainer = document.getElementById('countdown-container');
const userName = localStorage.getItem('userName'); 

greetingHeader.innerHTML = `<h1 style="color: #FF69B4; font-size: 60px;">HAPPY NEW YEAR</h1>`;
countdownHeader.innerHTML = `HAPPY NEW YEAR, ${userName}!`;

const messageContainer = document.createElement('div');
messageContainer.innerHTML = `Thank you for an amazing year filled with laughter, memories, and incredible moments. Cheers to an even better year ahead – may it be filled with joy, success, and unforgettable adventures together. ✨<br><br>To ${userName}, a friend who makes life brighter. May the coming year bring us even more laughter, deeper bonds, and countless wonderful memories. Cheers🍻 to a year of amazing friendships!`;
countdownContainer.appendChild(messageContainer);
```
