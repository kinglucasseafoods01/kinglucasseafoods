document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form");
    const submitBtn = document.querySelector(".submit-btn");

    // Initialize EmailJS with your User ID
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Prepare email parameters
        const templateParams = {
            to_email: "johncyril.benliro@hercorcollege.edu.ph", // Replace with the recipient's email
            from_name: name,
            from_email: email,
            message: message,
        };

        // Disable the submit button to prevent multiple submissions
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        // Send the email using EmailJS
        emailjs
            .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams) // Replace with your Service ID and Template ID
            .then(
                function (response) {
                    alert("Thank you for your message! We'll get back to you soon.");
                    contactForm.reset(); // Clear the form
                },
                function (error) {
                    alert("Oops! Something went wrong. Please try again later.");
                    console.error("EmailJS Error:", error);
                }
            )
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = "Send Message";
            });
    });
});

const loadingSpinner = document.getElementById("loading-spinner");

submitBtn.disabled = true;
submitBtn.textContent = "Sending...";
loadingSpinner.style.display = "flex"; // Show the spinner

// Send the email using EmailJS
emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(
        function (response) {
            alert("Thank you for your message! We'll get back to you soon.");
            contactForm.reset(); // Clear the form
        },
        function (error) {
            alert("Oops! Something went wrong. Please try again later.");
            console.error("EmailJS Error:", error);
        }
    )
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
        loadingSpinner.style.display = "none"; // Hide the spinner
    });