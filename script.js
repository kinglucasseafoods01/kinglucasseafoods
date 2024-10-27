const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');
// const closeButton = document.querySelector('.close-btn'); 

// closeButton.addEventListener('click', () => {
//    closeButton.style.display = 'none'; // Always hide the button when clicked
//   navbar.style.display = 'none'; // Also hide the navbar when the close button is clicked
// });

// Toggle the navbar when the toggle button is clicked
navbarToggle.addEventListener('click', () => {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none'; // Hide the navbar
        // closeButton.style.display = 'none'; // Hide the close button when navbar is hidden
    } else {
        navbar.style.display = 'block'; // Show the navbar
        // closeButton.style.display = 'block'; // Show the close button when navbar is visible
    }
});