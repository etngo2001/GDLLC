document.addEventListener('DOMContentLoaded', function () {
  const garageDoor = document.getElementById('garage-door');
  const homePage = document.querySelector('.home-page');

  // Function to open the garage door and reveal the home page
  function openGarageDoor() {
      garageDoor.style.transform = 'translateY(-100%)';
      homePage.style.opacity = 1;
  }

  // Simulate a delay (you can adjust the duration as needed)
  setTimeout(openGarageDoor, 500); // 500ms (.5 seconds) delay before opening
});