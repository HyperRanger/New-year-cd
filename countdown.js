const greetingHeader = document.getElementById('greeting');
const header = document.getElementById('header');
const message = document.getElementById('message');
const userName = localStorage.getItem('userName');

header.innerHTML = `<h1 style="color: #FFD700; font-size: 24px;">HAPPY NEW YEAR, ${userName}!</h1>`;

message.innerHTML = `<h1 style="color: #FFFFFF; font-size: 18px;">Thank you for an amazing year filled with laughter, memories, and incredible moments. Cheers to an even better year ahead – may it be filled with joy, success, and unforgettable adventures together. ✨<br><br>To ${userName}, a friend who makes life brighter. May the coming year bring us even more laughter, deeper bonds, and countless wonderful memories. Cheers🍻 to a year of amazing friendships!</h1>`;
