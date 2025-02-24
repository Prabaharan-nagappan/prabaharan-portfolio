// Smooth scrolling with header offset
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('.hero').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
});

// Shrink header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.hero');
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form submission with Formspree and toast notification
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = this;
    const toast = document.getElementById('toast');

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            toast.textContent = 'Message sent successfully!';
            toast.style.display = 'block';
            setTimeout(() => { toast.style.display = 'none'; }, 3000);
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        toast.textContent = 'Failed to send message. Try again later.';
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 3000);
    }
});

// Intersection Observer for section visibility
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));