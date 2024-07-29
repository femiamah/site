document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation link
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for fixed header height
                behavior: 'smooth'
            });
        });
    });

    // Basic form validation
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }
});
