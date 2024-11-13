const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

// Toggle the navbar when the toggle button is clicked
navbarToggle.addEventListener('click', () => {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none'; // Hide the navbar
    } else {
        navbar.style.display = 'block'; // Show the navbar
    }
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100; // Each slide takes up 100% width
    document.querySelector('.menu-container').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the first slide
showSlide(currentSlide);