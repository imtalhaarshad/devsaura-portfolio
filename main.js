/* ==========================================
   HAMBURGER MENU TOGGLE
   ========================================== */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

/* ==========================================
   ACTIVE NAV LINK HIGHLIGHTING
   ========================================== */

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

/* ==========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ========================================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and sections
const elementsToObserve = document.querySelectorAll(
    '.feature-card, .service-card, .project-card, .faq-item, .info-card'
);
elementsToObserve.forEach(element => {
    observer.observe(element);
});

/* ==========================================
   CONTACT FORM HANDLING
   ========================================== */

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            service: formData.get('service'),
            budget: formData.get('budget'),
            timeline: formData.get('timeline'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };

        const statusEl = document.getElementById('formStatus');
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.textContent;

        try {
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            statusEl.textContent = '';

            // In a real application, you would send this to a server
            // For now, we'll simulate a successful submission
            console.log('Form Data:', data);

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message
            statusEl.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
            statusEl.classList.add('success');
            statusEl.classList.remove('error');

            // Reset form
            contactForm.reset();

            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;

            // Clear success message after 5 seconds
            setTimeout(() => {
                statusEl.textContent = '';
                statusEl.classList.remove('success');
            }, 5000);

        } catch (error) {
            console.error('Error:', error);
            statusEl.textContent = '✗ Error sending message. Please try again.';
            statusEl.classList.add('error');
            statusEl.classList.remove('success');

            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

/* ==========================================
   SMOOTH SCROLL BEHAVIOR
   ========================================== */

// Already handled by CSS: scroll-behavior: smooth;

/* ==========================================
   NAVBAR SCROLL EFFECT
   ========================================== */

const navbar = document.querySelector('.navbar');
let lastScrollY = 0;

if (navbar) {
    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;

        if (lastScrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });
}

/* ==========================================
   REVEAL ON SCROLL - Additional animations
   ========================================== */

const revealElements = document.querySelectorAll(
    '.hero-title, .hero-subtitle, .hero-cta, .page-header h1, .page-header p'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(element);
});

/* ==========================================
   COUNTER ANIMATION FOR STATS
   ========================================== */

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('.stat-value');
            if (statValue) {
                const value = parseInt(statValue.textContent);
                if (!isNaN(value)) {
                    animateCounter(statValue, value);
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(item => {
    statsObserver.observe(item);
});

/* ==========================================
   HOVER EFFECTS FOR PROJECT CARDS
   ========================================== */

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

/* ==========================================
   UTILITY: Get URL parameter
   ========================================== */

function getUrlParam(param) {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
}

/* ==========================================
   PAGE LOAD ANIMATIONS
   ========================================== */

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Set initial opacity
document.body.style.opacity = '0.95';

/* ==========================================
   LAZY LOADING IMAGES (if added in future)
   ========================================== */

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ==========================================
   KEYBOARD SHORTCUTS
   ========================================== */

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

/* ==========================================
   FORM VALIDATION
   ========================================== */

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

if (contactForm) {
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !validateEmail(emailInput.value)) {
            emailInput.style.borderColor = 'var(--error)';
        } else {
            emailInput.style.borderColor = '';
        }
    });
}

/* ==========================================
   PRINT STYLES
   ========================================== */

@media print {
    .navbar,
    .footer,
    .hero-scroll {
        display: none;
    }

    body {
        background: white;
        color: black;
    }
}

console.log('DevsAura - Web Development & AI Automation Agency');
console.log('Welcome! Explore our portfolio and services.');
