// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('#navbar');

mobileMenuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu when clicking a link
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('#header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Update current year in copyright
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form submission (prevent default for demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form - in a real portfolio, this would send your message.');
        this.reset();
    });
}

// Active menu item based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const headerHeight = document.querySelector('#header').offsetHeight;

        if (window.scrollY >= sectionTop - headerHeight - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});