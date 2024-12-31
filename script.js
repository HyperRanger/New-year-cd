const nameInput = document.getElementById('name');
const submitButton = document.getElementById('submit');
const mainContent = document.querySelector('main'); // Assuming <main> tag encloses your content

submitButton.addEventListener('click', () => {
  const userName = nameInput.value.trim();
  if (userName !== '') {
    localStorage.setItem('userName', userName);

    // Fetch countdown.html content
    fetch('countdown.html')
      .then(response => response.text())
      .then(data => {
        mainContent.innerHTML = data; // Replace current content with countdown.html
        // Initialize countdown timer here (if needed)
      });
  }
});