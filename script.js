// Smooth scrolling for navigation links with offset for fixed header
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Shrink header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
        backToTop.style.display = 'block';
    } else {
        header.classList.remove('shrink');
        backToTop.style.display = 'none';
    }
});

// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');
navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Back-to-top functionality
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});