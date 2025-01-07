const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

//Navbar Mobile

document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");
    const categoryBar = document.getElementById("category-bar");

    homeLink.addEventListener("mouseenter", function () {
        categoryBar.style.opacity = "0.8"; // Optional: Fade the category bar
    });

    homeLink.addEventListener("mouseleave", function () {
        categoryBar.style.opacity = "1"; // Restore the category bar
    });
});

// Navbar //

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

//Category links//

// Function to handle category clicks
function handleCategoryClick(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the data-name attribute of the clicked element
    const clickedCategory = event.target.getAttribute('data-name');

    // Hide all categories initially
    const categories = document.querySelectorAll('.menu-background');
    categories.forEach(cat => cat.style.display = 'none');

    // Show the selected category or all categories based on the clicked data-name
    if (clickedCategory === 'crabs') {
        document.getElementById('crabs').style.display = 'block';
    } else if (clickedCategory === 'mollusk') {
        document.getElementById('mollusk').style.display = 'block';
    } else if (clickedCategory === 'crustaceans') {
        document.getElementById('crustaceans').style.display = 'block';
    } else if (clickedCategory === 'fish') {
        document.getElementById('fish').style.display = 'block';
    } else if (clickedCategory === 'all') {
        categories.forEach(cat => cat.style.display = 'block'); // Show all categories
    }
}

// Add event listeners to category links
const categoryLinks = document.querySelectorAll('#category-bar a');
categoryLinks.forEach(link => {
    link.addEventListener('click', handleCategoryClick);
});

// Set #all as the default visible category when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Hide all categories initially
    const categories = document.querySelectorAll('.menu-background');
    categories.forEach(cat => cat.style.display = 'none');

    // Show all categories by default
    categories.forEach(cat => cat.style.display = 'block');
});

// Menu //

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Default number of slides per view for smaller screens
    spaceBetween: 10, // Default space between slides for smaller screens
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // When window width is >= 576px
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // When window width is >= 768px
      718: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // When window width is >= 992px
      990   : {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // When window width is >= 1200px
      993: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });




