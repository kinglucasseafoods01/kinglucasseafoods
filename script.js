const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

// Toggle the navbar when the toggle button is clicked
navbarToggle.addEventListener('click', () => {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none'; // Hide navbar
    } else {
        navbar.style.display = 'block'; // Show navbar
    }
});

// Check the window size and adjust navbar visibility
function checkWindowSize() {
    if (window.matchMedia("(min-width: 1025px)").matches) {
        navbar.style.display = 'block'; // Show navbar on desktop
    } else if (window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches) {
        navbar.style.display = 'block'; // Show navbar on tablet
    } else {
        // If the navbar is closed on mobile, keep it hidden
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none'; // Hide navbar on mobile
        }
    }
}

// Add event listener for window resize
window.addEventListener('resize', checkWindowSize);

// Initial check when the page loads
checkWindowSize();

// Slide //

// Select elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize the slider by showing the first slide
showSlide(currentSlide);
